const firebase = require("firebase-admin");
const serviceAccount = require('../new-tify-firebase-adminsdk-tvoot-3ead32aba7.json');

const firebaseToken = 'fU59XrxVpHKqAbCu2sLGL7:APA91bHUbmtcI6Dg0g8Jz7K9-_a_3F5RmA4zrqoldZQNHliEcoFn1Bcvcqz29sEewHfQVMTnLpqBMDYonLayitTXt0KdoJW-eU66rbJryV79YAlB7iYGfqE5PsRrtIFs3VhuCfIwTeoD';

firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: "https://new-tify.firebaseio.com"
});

const payload = {
    notification: {
      title: 'Notification Title',
      body: 'Your cart is ready to be purchased',
    },
    data: { //you can send only notification or only data(or include both)
      title: 'ok cdfsdsdfsd',
      body: '{"name" : "okg ooggle ogrlrl","product_id" : "123","final_price" : "0.00035"}'
    }
};

const options = {
    priority: 'high',
    timeToLive: 60 * 60 * 24, // 1 day
};

const sendNotification = () => {
    // firebase.usePublicVapidKey("BAYvtQ3PwwXT4zjCQb0wR5AddArr6MHxpPyCLtOzSRMkYc8i7THe8M9i6hQSv_wsOIcej2r81h0MCQxAVF3Fp8Y");

    // firebase.messaging.onBackgroundMessage(function(payload) {
    //     const notificationTitle = payload.data.title;
    //     const notificationOptions = {
    //         body: payload.data.message,
    //         icon:'',
    //         data: { url:payload.data.onClick }, //the url which we gonna use later
    //     };
    //     return self.registration.showNotification(notificationTitle,notificationOptions);
    // });

    return firebase.messaging().sendToDevice(firebaseToken, payload, options).then(res => {
        return res;
    });
}

module.exports = sendNotification;