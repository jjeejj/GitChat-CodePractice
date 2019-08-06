// 订阅
const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://iot.eclipse.org', {
    clientId: 'mqtt_sample_subscriber_id_1',
    clean: false
});

client.on('connect', function(connack){
    if (connack.returnCode === 0) {
        client.subscribe('home/2ndfloor/201/temperature', { 
            qos: 1
        }, function(err, granted) {
            if (err) {
                console.log("subscribe failed", err)
            } else {
                console.log("subscribe succeeded ", JSON.stringify(granted));
                // client.end(); 
            }
        });
    } else {
        console.log(`Connection failed: ${connack.returnCode}`);
    };
});

client.on('message', function(_, message, _){
    var jsonPayload = JSON.parse(message.toString());
    console.log(`current temperature is ${jsonPayload.current}`);
});