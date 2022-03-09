 let coinFlip 
 let amount = parseFloat(prompt('How many times would you like to flip a coin?'));

 for (let i= 1; i <= amount; i++) {
    let coinFlip = Math.round(Math.random());
    if (coinFlip == 0) {
        console.log('Heads')
    } else if (coinFlip == 1) {
        console.log('Tails')
    }
 }