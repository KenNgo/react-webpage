import * as firebase from 'firebase';

const prodConfig = {
  apiKey: 'AIzaSyCsjOZptxs39BEvSqifL77pRn1BhB-_K7Y',
  authDomain: 'todo-app-6293f.firebaseapp.com',
  databaseURL: 'https://todo-app-6293f.firebaseio.com',
  projectId: 'todo-app-6293f',
  storageBucket: 'todo-app-6293f.appspot.com',
  messagingSenderId: '1082091469672',
};

const devConfig = {
  apiKey: 'AIzaSyCsjOZptxs39BEvSqifL77pRn1BhB-_K7Y',
  authDomain: 'todo-app-6293f.firebaseapp.com',
  databaseURL: 'https://todo-app-6293f.firebaseio.com',
  projectId: 'todo-app-6293f',
  storageBucket: 'todo-app-6293f.appspot.com',
  messagingSenderId: '1082091469672',
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};