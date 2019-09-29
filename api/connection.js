const {
    OrderedMap
} = require('immutable');
const {
    ObjectID
} = require('mongodb');
// const spawn = require("child_process").spawn;
// const Threatdetect = {
//     threat: 'a',
//     lat: 0,
//     long: 0
// }
class Connection {


    constructor(app) {
        this.app = app;

        this.clients = new OrderedMap();


        this.socketServerConnect();

    }

    getClients() {

        return this.clients;
    }

    addClient(id, client) {

        this.clients = this.clients.set(id, client);
    }

    removeClient(id) {
        this.clients = this.clients.remove(id);
    }

    socketServerConnect() {

        const app = this.app;

        app.ws.on('connection', (ws) => {

            console.log(`RaspberryPi is connected`);


            // Add this Pi to clients collections.
            const clientId = new ObjectID().toString();

            const newClient = {
                _id: clientId,
                ws: ws,
                created: new Date()
            };


            this.addClient(clientId, newClient);


            ws.on('message', (msg) => {

                console.log("Message received from RaspberryPi is", msg);
                // to run a child process here 

                // const pythonProcess = spawn('python', ["path/to/script.py", arg1, arg2,]);
                // pythonProcess.stdout.on('data', (data) => {
                //     threatdetect.threat = data.threat;
                //     threatdetect.lat = data.lat;
                //     threatdetect.long = data.long;
                // });
            });

            ws.on('close', () => {

                console.log(`Raspberry Pi camera with Id ${clientId} is disconnected`);
                this.removeClient(clientId);

            });


            const commandNeedToSendToPi = {
                action: 'stream',
                payload: true
            };
            //ws.send(JSON.stringify(commandNeedToSendToPi));
        });
    }

}

exports.connection = Connection;
//exports.threatdetect = Threatdetect;