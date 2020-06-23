function takeANumber(katzDeliLine, newName){
  katzDeliLine.push(newName);
  return `Welcome, ${newName}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0 ){
    return "There is nobody waiting to be served!";
  }
  else{
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0 ){
    return "The line is currently empty.";
  }
  else{
    var y = [];
    var x = "The line is currently: ";

    for (let i = 0, i < katzDeliLine.length, i++){
      y[i] = `${i+1}. katzDeliLine[i]`;
       x = x + y;
    }

    return x
  }
}
