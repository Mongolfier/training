// Condition:
// Create a tower-pyramid configuration consisting of the characters "*".
// The input parameter is the number of floors of the tower.

const buildTower = (floorsCount) => {
  const floor = (count) => {
    return 1 + (count - 1) * 2;
  }

  const maxSymbolsOnFloor = floor(floorsCount);

  const tower = [];

  for(let i = 0; i < floorsCount; i++) {
    const floorStarsSymbols = floor(i + 1);
    const countHalfOfFullSpaces = Math.floor((maxSymbolsOnFloor - floorStarsSymbols) / 2);

    tower.push(
      "" +
      " ".repeat(countHalfOfFullSpaces) +
      "*".repeat(floorStarsSymbols) +
      " ".repeat(countHalfOfFullSpaces)
    )
  }

  return tower;
}

console.log(buildTower(5));
