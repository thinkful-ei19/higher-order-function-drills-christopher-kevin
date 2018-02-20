function hazardWarningCreator(typeOfWarning) {
    let warningCounter = 0;
    return (location) => {
        warningCounter++;
        console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}`);
        console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`);
    }
}

let rocksWarning = hazardWarningCreator('Rocks on the Road');
let snowWarning = hazardWarningCreator('It\'s snowing outside');
let heatWarning = hazardWarningCreator('It\'s hot as hell');

let test = ;
console.log(test);

// return1('Main st. pacific ave');
// return2('Church st. and 7th');
// return3('Cactus and 19th');
