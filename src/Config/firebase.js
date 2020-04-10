import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore';
import 'firebase/functions'
import 'firebase/storage'

const config = {
	apiKey: "AIzaSyCQuZoXusa7EqGQdCmmoQAi4DegvYs-GvY",
	authDomain: "easyword.firebaseapp.com",
	databaseURL: "https://easyword.firebaseio.com",
	projectId: "easyword",
	storageBucket: "easyword.appspot.com",
	messagingSenderId: "306976829495",
	appId: "1:306976829495:web:37164c3f59e9896bf7cfb2",
	measurementId: "G-YKTHC6P2DW"
  };

firebase.initializeApp(config);
firebase.firestore().settings({});

const db = firebase.firestore();
const au = firebase.auth();
const auth = firebase.auth;
const fu = firebase.functions();
const st = firebase.storage();
let user = null;
au.onAuthStateChanged(snap => {
	if (snap) {
		user = snap
	}
})

export {
	db,
	au,
	auth,
	fu,
	st,
	user
}