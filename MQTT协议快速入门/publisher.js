//  发布消息
const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://iot.eclipse.org', {
    clientId: 'mqtt_sample_publisher_id_1',
    clean: false
});

client.on('connect', function(connack){
    if (connack.returnCode === 0) {
        client.publish('home/2ndfloor/201/temperature', JSON.stringify(
            {
                current: 25
            }
        ), { 
            qos: 1
        }, function(err) {
            if (err) {
                console.log("Publish failed", err)
            } else {
                console.log("Publish finished");
                client.end(); 
            }
        });
    } else {
        console.log(`Connection failed: ${connack.returnCode}`);
    };
});
