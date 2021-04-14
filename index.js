const readline = require('readline');
const parkingLotInstance = require('./parkingLot')
const rl = readline.createInterface({
    input: process.stdin
});


let initApp = () => {
    rl.on('line', async (input) => {
        input = input.split(" ");
        if (input[0] === 'create_parking_lot') {
            try {
                const result = await parkingLotInstance.createParkingLot(input[1]);
                console.log(result);
            } catch (e) {
                console.log(`error occured ==> ${e}`);
            }
        }
    });
}

initApp();
