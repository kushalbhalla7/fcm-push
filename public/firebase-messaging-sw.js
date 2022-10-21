importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-messaging.js');
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxwdfv0JNLA5L9h2jGRxE1MJrFxWhFvrA",
  authDomain: "new-tify.firebaseapp.com",
  projectId: "new-tify",
  storageBucket: "new-tify.appspot.com",
  messagingSenderId: "210836084003",
  appId: "1:210836084003:web:b62bebea6fb537231f2896",
  measurementId: "G-9GCVE8BT0Y"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();
messaging.usePublicVapidKey("BCwWdVtBRm5rQvYUUxUCk_Y406lmnTYlarC0AA-NpXuM_0Zuoxuc0-MNobjRjSnXUzNhPlpUJkDuSa937Cq3MgE");


messaging.onBackgroundMessage(function(payload) {
  const notificationTitle = payload.data.title;
  const notificationOptions = {
    body: payload.data.message,
    icon:'http://image.ibb.co/frYOFd/tmlogo.png',
    data: { url:payload.data.onClick }, //the url which we gonna use later
  };
  return self.registration.showNotification(notificationTitle,notificationOptions);
});


// //Code for adding event on click of notification
// self.addEventListener('notificationclick', function(event) {
//   let url = event.notification.data.url;
//   event.notification.close(); 
//   event.waitUntil(
//     clients.matchAll({type: 'window'}).then( windowClients => {
//       // Check if there is already a window/tab open with the target URL
//       for (var i = 0; i < windowClients.length; i++) {
//         var client = windowClients[i];
//         // If so, just focus it.
//         if (client.url === url && 'focus' in client) {
//           return client.focus();
//         }
//       }
//       // If not, then open the target URL in a new window/tab.
//       if (clients.openWindow) {
//         return clients.openWindow(url);
//       }
//     })
//   );
// });