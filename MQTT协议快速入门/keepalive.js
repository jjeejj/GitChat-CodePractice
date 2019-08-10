const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://iot.eclipse.org', {
    clientId: 'mqtt_sample_keepalive_id_1',
    clean: false,
    keepalive: 5
});

client.on('connect', function(connack){
    client.on('packetsend', (packet) => {
        console.log(`${new Date()}: send ${JSON.stringify(packet)}`)
    });
    client.on('packetreceive', (packet) => {
        console.log(`${new Date()}: receive ${JSON.stringify(packet)}`)
    });
});
