function average(scores) {
    let total = 0;
    
    for (let i = 0; i < scores.length; i++) {
        total += scores[i];
    }
    
    return Math.round(total/scores.length);
}

let scores = [90, 98, 89, 100, 100, 86, 94];
console.log(average(scores));