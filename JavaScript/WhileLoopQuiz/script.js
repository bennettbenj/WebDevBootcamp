let x = -10;

while (x < 20) {
    console.log(x);
    x++;
}

x = 10;

while (x <= 40) {
    if (x % 2 === 0) {
        console.log(x);
    }
    x++;
}

x = 300;

while (x <= 333) {
    if (x % 2 === 1) {
        console.log(x);
    }
    x++;
}

x = 5;

while (x <= 50) {
    if ((x % 5 === 0) && (x % 3 == 0)) {
        console.log(x);
    }
    x++;
}