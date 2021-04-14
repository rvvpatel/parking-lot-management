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

let status = () => {
    if (maxSize === 0) {
        return "parking lot is not initiated";
    } else if (Cars.length > 0) {
        Cars.sort((a, b) => (a.slot) - (b.slot));
        console.log("Slot No.\t Car No.")
        Cars.map(item => {
            console.log(item.slot + '\t    ' + item.carNo)
        })
    }
    else {
        return 'Parking lot empty'
    }
}

module.exports = {
    createParkingLot,
    park,
    status
}


