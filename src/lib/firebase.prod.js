import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {    
apiKey: "AIzaSyB8vYc1HfxQP5NUB28bg1HQMPLx6fDIIhk",
authDomain: "netflix-35463.firebaseapp.com",
databaseURL: "https://netflix-35463.firebaseio.com",
projectId: "netflix-35463",
storageBucket: "netflix-35463.appspot.com",
messagingSenderId: "64642275086",
appId: "1:64642275086:web:8c1b0edbe927d3f1ea295f"
};

const firebase = Firebase.initializeApp(config);

export { firebase };