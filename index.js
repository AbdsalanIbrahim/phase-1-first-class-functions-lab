const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(multiplier) {
    return function(fare) {
        return fare * multiplier;
    };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(drivers, selectFunction) {
    return selectFunction(drivers);
};

// Test the functions to ensure they work as expected
console.log(returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])); // => ['Antonia', 'Nuru']
console.log(returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])); // => ['Amari', 'Mo']
console.log(selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnFirstTwoDrivers)); // => ['Antonia', 'Nuru']
console.log(selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnLastTwoDrivers)); // => ['Amari', 'Mo']
console.log(fareDoubler(10)); // => 20
console.log(fareTripler(10)); // => 30
