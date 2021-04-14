let maxSize = 0;
let availableSlot = [];

let createParkingLot = async (lotNumber) => {
    try {
        maxSize = parseInt(lotNumber);
    } catch (e) {
        return "Parameter is not a number!";
    }

    for (let i = 1; i <= maxSize; i++) {
        availableSlot.push(i);
    }
    return `Created a parking lot with ${availableSlot.length} slots`;
}

module.exports = {
    createParkingLot
}


