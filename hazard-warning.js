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

rocksWarning('Main st. pacific ave');
snowWarning('Church st. and 7th');
heatWarning('Cactus and 19th');

// let test = ;
// console.log(test);
