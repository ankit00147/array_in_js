let marks = [37,85,17,95,27,90,56];
let highest = marks[0];

for(let i = 0; i < marks.length; i++){
    if (marks[i] > highest){
        highest = marks[i];
    }
}
console.log("highest marks : ",highest);