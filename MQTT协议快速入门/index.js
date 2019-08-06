const mqtt = require('mqtt');

const client = mqtt.connect('mqtt://iot.eclipse.org', {
    clientId: 'mqtt_sample_id_1',
    clean: true
});

client.on('connect', function(connack) {
    console.log(`return code: ${connack.returnCode}, sessionPresent: ${connack.sessionPresent}`);
    // client.end();
});

client.on('offline', function () {
    console.log("client went offline")
})