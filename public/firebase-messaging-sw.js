firebase.initializeApp({
    messagingSenderId:JSON.parse(localStorage.getItem('customerId'))
});

const initMessaging=firebase.messaging();
