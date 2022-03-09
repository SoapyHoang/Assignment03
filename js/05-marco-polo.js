let n = 100

for (let i = 0; i <= n; i++) {
    // console.log(i)
    if (i % 3 == 0 && i % 5 == 0 ) { 
        console.log('Marco! Polo!');
    }
    else if (i % 3 == 0) {
        console.log('Marco!');
    } else if (i % 5 == 0) {
        console.log('Polo!');
    }
}