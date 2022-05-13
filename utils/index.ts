export function whatIsNeeded(
  scoreSelf: number,
  scoreOther: number,
  numReds: number,
  numColors: number,
  isActiveSelf: boolean,
  nextIsFreeBall: boolean,
  nextIsColorAfterRed: boolean
) {
  // a copy because we don't want to mutate the parameters
  let isFreeBall = nextIsFreeBall
  let isColorAfterRed = nextIsColorAfterRed

  let redsNeeded = 0
  let blacksNeeded = 0
  let colorsNeeded = 0
  let snookersNeeded = 0
  let freeBallNeeded = 0

  const penaltyPoints = Math.max(4, 8 - numColors)
  const freeBallPoints = numReds > 0 ? 1 : 8 - numColors

  if (!isActiveSelf) {
    isColorAfterRed = false
    isFreeBall = false
  }

  while (
    scoreSelf +
    redsNeeded +
    (blacksNeeded * 7) +
    colorPoints(colorsNeeded, numColors) +
    snookersNeeded * penaltyPoints +
    freeBallNeeded * freeBallPoints
    <=
    scoreOther + pointsLeft(numReds - redsNeeded, numColors - colorsNeeded)
  ) {
    if (redsNeeded < numReds) { // reds remain
      if (!isColorAfterRed) { // on a red or free ball
        if (isFreeBall) { // on a free ball
          freeBallNeeded++
          isFreeBall = false
        } else { // on a red
          redsNeeded++
        }
        isColorAfterRed = true
      } else { // on a color after a red
        blacksNeeded++
        isColorAfterRed = false
      }
    } else if (redsNeeded === numReds && isColorAfterRed) { // on a color after the last red
      blacksNeeded++
      isColorAfterRed = false
    } else if (colorsNeeded < numColors) { // only colors left
      if (isFreeBall) {
        freeBallNeeded++
        isFreeBall = false
      } else {
        colorsNeeded++
      }
    } else { // snookers
      snookersNeeded++
    }
  }

  const winnerScore =
    scoreSelf +
    redsNeeded +
    (blacksNeeded * 7) +
    colorPoints(colorsNeeded, numColors) +
    snookersNeeded * penaltyPoints +
    freeBallNeeded * freeBallPoints

  const loserScore = scoreOther + pointsLeft(numReds - redsNeeded, numColors - colorsNeeded)


  isColorAfterRed = nextIsColorAfterRed // restore original value
  isFreeBall = nextIsFreeBall // restore original value
  if (!isActiveSelf) {
    isColorAfterRed = false
    isFreeBall = false
  }
  

  let oneRedOnly = ''
  let freeBallOnly = ''
  let separatedBlack = '' // nextIsColorAfterRed
  let freeBallBlackCombination = ''
  let redBlackCombinations = ''
  let oneMoreRed = ''
  let freeBallOnColors = ''
  let colors = ''
  let snookers = ''

  if (freeBallNeeded === 1 && freeBallPoints === 1 && !blacksNeeded) {
    freeBallOnly = '1 Free Ball'
  } else if (redsNeeded === 1 && !blacksNeeded) {
    oneRedOnly = '1 Red'
  } else {
    if (freeBallNeeded === 1 && freeBallPoints === 1 && blacksNeeded) {
      freeBallBlackCombination = '1 x (Free Ball + Black)'
      blacksNeeded--
    }
    if (isActiveSelf && isColorAfterRed && blacksNeeded > 0) {
      separatedBlack = '1 Black'
      blacksNeeded--
    }
    if (blacksNeeded) {
      redBlackCombinations = `${blacksNeeded} x (Red + Black)`
    }
    if (redsNeeded > blacksNeeded) {
      oneMoreRed = '1 Red'
    } else {
      if (freeBallNeeded === 1 && freeBallPoints > 1) {
        freeBallOnColors = '1 Free Ball'
      }
      if (colorsNeeded) {
        colors = `${colorsNeeded} ${colorsNeeded === 1 ? 'Colour' : 'Colours'}`
      }
      if (snookersNeeded) {
        snookers = `${snookersNeeded} ${snookersNeeded === 1 ? 'Snooker' : 'Snookers'}`
      }
    }
  }

  let steps = ''

  oneRedOnly ? (steps ? steps += ' + ' + oneRedOnly : steps += oneRedOnly) : steps += ''
  freeBallOnly ? (steps ? steps += ' + ' + freeBallOnly : steps += freeBallOnly) : steps += ''
  separatedBlack ? (steps ? steps += ' + ' + separatedBlack : steps += separatedBlack) : steps += ''
  freeBallBlackCombination ? (steps ? steps += ' + ' + freeBallBlackCombination : steps += freeBallBlackCombination) : steps += ''
  freeBallOnColors ? (steps ? steps += ' + ' + freeBallOnColors : steps += freeBallOnColors) : steps += ''
  snookers ? (steps ? steps += ' + ' + snookers : steps += snookers) : steps += ''
  redBlackCombinations ? (steps ? steps += ' + ' + redBlackCombinations : steps += redBlackCombinations) : steps += ''
  oneMoreRed ? (steps ? steps += ' + ' + oneMoreRed : steps += oneMoreRed) : steps += ''
  colors ? (steps ? steps += ' + ' + colors : steps += colors) : steps += ''

  if (steps === '') steps = 'Nothing'

  const aheadOrBehind = scoreSelf >= scoreOther ? 'Ahead' : 'Behind'
  const difference = Math.abs(scoreSelf - scoreOther)
  const available = pointsLeft(numReds, numColors, isColorAfterRed, isFreeBall)

  return { steps, winnerScore, loserScore, aheadOrBehind, difference, available }
}


// returns total points left on the table
function pointsLeft(reds: number, colors: number, onColorAfterRed: boolean = false, onFreeBall: boolean = false) {
  let result = 0
  if (onColorAfterRed) result += 7
  result += reds * 8
  if (onFreeBall) {
    if (reds > 0) {
      result += 8
    } else {
      result += 8 - colors
    }
  }
  for (let i = 0; i < colors; i++) {
    result += 7 - i
  }
  return result
}

// returns the points obtained by potting x of the remaining colors
function colorPoints(x: number, colors: number) {
  let result = 0
  let lowestColVal = 8 - colors
  for (let i = 0; i < x; i++) {
    result += lowestColVal
    lowestColVal++
  }
  return result
}