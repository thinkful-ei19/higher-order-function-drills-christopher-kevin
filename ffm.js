//[FB ,LR] Positive = forwards, left Negative = back, right
const turtleArray = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

function filter (arr) {
    console.log(arr.filter(function (a){
        if (a[0] >= 0 && a[1] >= 0) {
            return a;
        }
    }));
}

function map (arr) {
    console.log(arr.map(function (a) {
        if (a[0] < 0) {
            a[0] = a[0] * -1;
        }
        if (a[1] < 0) {
            a[1] = a[1] * -1;
        }
        return a[0] + a[1];
    }))
}

function forEach (arr) {
    arr.forEach(function(a) {
        if (a[0] < 0) {
            a[0] = a[0] * -1;
        }
        if (a[1] < 0) {
            a[1] = a[1] * -1;
        }
        console.log(a[0] + a[1]);
    })
}

filter(turtleArray);
map(turtleArray);
forEach(turtleArray);