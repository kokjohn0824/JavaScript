const prompt = require('prompt-sync')();
seat = ["green", "red", "lightblue", "blue", "yellow"];

function shuffle(a) {
  for (var j, i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
}

console.log('Begin shuffle...');
shuffle(seat)
console.log('Shuffle complete! here is the result');
console.table(seat);

while(true){
    const teamA = prompt('which team wants to swap seat?  (or x to finish)');

    if(teamA === "x"){
        break;
    }
    const teamB = prompt(`which team wants to swap with team${teamA}?`);
    [seat[teamA-1], seat[teamB-1]] = [seat[teamB-1], seat[teamA-1]];
    console.log(' swap result: ');
    console.table(seat);
}
console.log('final result: ');
console.table(seat);

