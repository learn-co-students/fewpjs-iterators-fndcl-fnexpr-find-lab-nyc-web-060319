const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record){
  // find win
  let win = record.find(function(game){
    return game.result === "W"
  });

// result
if (win){
  return win.year
} else{
  return undefined
}
}
