const firebase = require("firebase-admin");
const serviceAccount = require('../new-tify-firebase-adminsdk-tvoot-3ead32aba7.json');

const firebaseToken = 'fU59XrxVpHKqAbCu2sLGL7:APA91bFiYhop3MRU5YjxcDupMV2lFbHJlncR-nVMhmxdPF5RVjIOtPfPXG5XOY-deA1yVsAqI4aMs1sRbBa7LQvo3min59cqCkTYDUeemKRj2Ih4gqJy36mzja9jhEAcJ0vgt9Tn-QwI';

firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: "https://new-tify.firebaseio.com"
});

const payload = {
    notification: {
      title: 'Congratulation Raman',
      body: 'Your cart is ready to be purchased',
      icon: 'http://image.ibb.co/frYOFd/tmlogo.png',
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