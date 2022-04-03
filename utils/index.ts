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

  const penaltyPoints = Math.max(4, 8 - numColors)

  if (!isActiveSelf) {
    isColorAfterRed = false
    isFreeBall = false
  }

  while (
    scoreSelf +
    redsNeeded +
    (blacksNeeded * 7) +
    colorPoints(colorsNeeded, numColors) +
    snookersNeeded * penaltyPoints
    <=
    scoreOther + pointsLeft(numReds - redsNeeded, numColors - colorsNeeded)
  ) {
    if (redsNeeded < numReds) { // reds remain
      if (!isColorAfterRed) {
        redsNeeded++
        isColorAfterRed = true
      } else {
        blacksNeeded++
        isColorAfterRed = false
      }
    } else if (redsNeeded === numReds && isColorAfterRed) { // last red was potted
      blacksNeeded++
      isColorAfterRed = false
    } else if (colorsNeeded < numColors) { // only colors left
      colorsNeeded++
    } else { // snookers
      snookersNeeded++
    }
  }

  const winnerScore =
    scoreSelf +
    redsNeeded +
    (blacksNeeded * 7) +
    colorPoints(colorsNeeded, numColors) +
    snookersNeeded * penaltyPoints

  const loserScore = scoreOther + pointsLeft(numReds - redsNeeded, numColors - colorsNeeded)

  isColorAfterRed = nextIsColorAfterRed // restore original value

  let steps = ''

  if (redsNeeded === 1 && !blacksNeeded) {
    steps += '1 Red'
  }
  else {
    if (isActiveSelf && isColorAfterRed && blacksNeeded > 0) {
      steps += '1 Black'
      blacksNeeded--
    }
    if (blacksNeeded) {
      steps += `${steps ? ' +' : ''} ${blacksNeeded} x (Red + Black)`
    }
    if (redsNeeded > blacksNeeded) {
      steps += `${steps ? ' +' : ''} 1 Red`
    } else {
      if (colorsNeeded) {
        steps += `${steps ? ' +' : ''} ${colorsNeeded} ${colorsNeeded == 1 ? 'Color' : 'Colors'}`
      }
      // if (snookersNeeded) {
      //   steps = `${snookersNeeded} ${snookersNeeded == 1 ? '(' + penaltyPoints + ' point) Snooker' : '(' + penaltyPoints + ' point) Snookers'} +` + steps
      // }
      if (snookersNeeded) {
        steps = `${snookersNeeded} ${snookersNeeded == 1 ? 'Snooker' : 'Snookers'} + ` + steps
      }
    }
  }

  if (steps === '') steps = 'Opponent already needs snookers'

  return { steps, winnerScore, loserScore }

}

// todos
// in messages like this, the 1 black must come first : 13 Snookers + 1 Black + 7 x (Red + Black) + 6 Colors
// comment on lesser colors then black without extra red or extra snooker
// freeball 


// returns total points left on the table
function pointsLeft(reds: number, colors: number) {
  let result = reds * 8
  for (let i = 0; i < colors; i++) {
    result += 7 - i
  }
  return result
}

// returns the points obtained by potting x of the remaining colors
function colorPoints(x: number, colors: number) {
  let result = 0
  let lowestColVal = 7 - colors + 1
  for (let i = 0; i < x; i++) {
    result += lowestColVal
    lowestColVal++
  }
  return result
}