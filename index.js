const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record) {
  
  const found = record.find(function(record){return record.result === "W";});
  // console.log(found);
  return found ? found.year : undefined;
}