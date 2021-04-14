const readline = require('readline');
const parkingLot = require('./parkingLot')
const rl = readline.createInterface({
    input: process.stdin
});


let initApp = () => {
    rl.on('line', async (input) => {
        input = input.split(" ");
        if (input[0] === 'create_parking_lot') {
            try {
                const result = await parkingLot.createParkingLot(input[1]);
                console.log(result);
            } catch (e) {
               console.log(`error ${e}`)
            }
        }
        else if (input[0] === 'park') {
            try {
                const result = parkingLot.park(input[1]);
                console.log(result)
            } catch (e) {
                console.log(`error ${e}`)
            }
        }
        else {
            console.log('Command is not valid , please note predeifed commands are case sensitive and matched as per the description!');
        }
    });
}

initApp();
