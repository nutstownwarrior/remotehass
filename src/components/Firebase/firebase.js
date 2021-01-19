import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyDatvcntt9N12yc2MCi2f7O2lC4zJ3y7SQ",
    authDomain: "hassremote.firebaseapp.com",
    projectId: "hassremote",
    storageBucket: "hassremote.appspot.com",
    messagingSenderId: "748531607261",
    appId: "1:748531607261:web:2927d0694695672718dd34",
    databaseURL: "https://hassremote-default-rtdb.europe-west1.firebasedatabase.app/"
  };

  class Firebase {
      constructor(){
          app.initializeApp(config);

          this.auth = app.auth();
          this.db = app.database();
      }

      doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

      doSignOut = () => this.auth.signOut();
      
      devices = () => this.db.ref('devices');
  }

  export default Firebase;