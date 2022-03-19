// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'] 

function findMatching(drivers, string) {
    const result = drivers.filter(driverName => driverName.toLowerCase() === string.toLowerCase());
    return result;
}

function fuzzyMatch(drivers, string) {
    const result = drivers.filter(driverName => driverName.startsWith(string));
    return result
}

function matchName(drivers, name) {
    const result = drivers.filter((driverObject) => {
        if(driverObject["name"] === name) {
        return driverObject
        }
    })
    return result
}