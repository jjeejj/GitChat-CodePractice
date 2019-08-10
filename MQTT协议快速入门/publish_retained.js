/**
 * 发布 retained 消息
 */
const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://iot.eclipse.org', {
    clientId: "mqtt_sample_publisher_1",
    clean: false
});

client.on('connect', (connack) => {
    if (connack.returnCode === 0) {
        client.publish('home/2ndfloor/201/temperature', JSON.stringify({
            current: 25
        }),{
            qos: 0,
            retain: 1
        }, (err) => {
            if(err == undefined) {
                console.log("Publish finished")
                client.end()
            }else{
                console.log("Publish failed")
            };
        });
    } else {
        console.log(`Connection failed: ${connack.returnCode}`);
    };
});
