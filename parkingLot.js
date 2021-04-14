let maxSize = 0;
let availableSlot = [];
let Cars = [];

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

let park = (carNo) => {
    if (maxSize === 0) {
        return 'parkinglot is not created'
    }
    else if (maxSize === Cars.length) {
        return 'Sorry, parking lot is full'
    }
    else {
        let slot = availableSlot[0];
        Cars.push({
            'slot': slot,
            'carNo': carNo
        })
        availableSlot.shift();
        return `Allocated slot number: ${slot}`
    }
}

module.exports = {
    createParkingLot,
    park
}


