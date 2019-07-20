const testVar = {}

function testFunc() {
  return "hi";
}


function superbowlWin(record){
  let winningRecord = record.find(function(t){
    return t.result === "W";
  });

  if (winningRecord){
    return winningRecord.year;
  }else{
    return undefined;
  }

}
