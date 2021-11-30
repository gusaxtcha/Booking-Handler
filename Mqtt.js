const mqtt = require('mqtt')
//TODO: define options for mqtt connection (client ID, etc)

/** Different MQTT servers */
const LOCALHOST = ''; //TODO: fill with the local mqtt address
const HOST = 'mqtt://test.mosquitto.org'; //mosquitto test server address

/** Connects to the servers defined in the constants above */
const client = mqtt.connect(HOST) //Change the parameter between HOST or LOCALHOST if you want to connect to the mosquitto test broker or a local broker. For local, mosquitto needs to be installed and running
module.exports.client = client;

/**
 * Subscribes to the needed topic(s)
 */
client.on('connect', async function () {
    await console.log("Connected to Mqtt broker successfully")
})

/**
 * Function that subscribes to a certain topic and react to the subscription.
 * @param topic of type String
 */
module.exports.subscribeToTopic = function (topic){
    client.subscribe(topic, function (err) {
        if (!err) {
            console.log("Subscribed to " + topic + " successfully")
        }else{
            console.log(err.message);
        }
    })
}

/**
 * Publish wrapper for publishing message to given topic, with a given QOS
 * @param topic as a string
 * @param message as a string or buffer
 * @param QoS as a Json Object following the QoS in the mqtt library
 */
module.exports.publishToTopic = function (topic, message, QoS){
    client.publish(topic, message, QoS)
}


