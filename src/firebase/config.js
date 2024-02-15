import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
       apiKey: "AIzaSyC6G5EijRnSLmuTeyd6Hljh-kdUgS7ILfA",
       authDomain: "fir-ae939.firebaseapp.com",
       projectId: "fir-ae939",
       storageBucket: "fir-ae939.appspot.com",
       messagingSenderId: "836388484755",
       appId: "1:836388484755:web:2e7db76e87dfaf408ebf66",
       measurementId: "G-6MYP9PDL2F"
     };

   export  const firebase  = firebase.initialiseApp(firebaseConfig)
