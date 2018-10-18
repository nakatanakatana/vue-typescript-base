import * as firebase from 'firebase';

export const firebaseConfig = {
  apiKey: 'yourFirebaseAPIKey',
  authDomain: 'yourFirebaseAuthDomain',

  databaseURL: 'ws://localhost:5000',
  projectId: null,
  storageBucket: null,
  messagingSenderId: null,
};

export class FirebaseApp {
  private static _instance: FirebaseApp;
  private static _app: firebase.app.App = firebase.initializeApp(firebaseConfig);

  private constructor () {
  }

  public static getApp (): firebase.app.App {
    if (!this._instance) {
      this._instance = new FirebaseApp();
    }
    return FirebaseApp._app;
  }

  public static login (email: string, password: string): Promise<any> {
    return this.getApp().auth().signInWithEmailAndPassword(email, password);
  }

  public static logout (): Promise<any> {
    return this.getApp().auth().signOut();
  }

  public static getDB (): firebase.database.Database {
    return this.getApp().database();
  }

  public static getStorage (): firebase.storage.Storage {
    return this.getApp().storage();
  }

  public static getAuth (): firebase.auth.Auth {
    return this.getApp().auth();
  }
}
