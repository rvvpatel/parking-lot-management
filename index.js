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
        else if (input[0] === 'leave') {
            try {
                const result = parkingLot.leave(input[1], input[2]);
                console.log(result)
            } catch (e) {
                console.log(`error ${e}`)
            }
        }
        else if (input[0] === 'status') {
            try {
                const result = parkingLot.status();
                if (result) {
                    console.log(result)
                }
            } catch (e) {
                console.log(`error ${e}`)
            }
        }
        else {
            console.log('Command is not valid , please predeifed readme file for commands');
        }
    });
}

initApp();
