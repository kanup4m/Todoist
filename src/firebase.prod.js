import firebase from 'firebase/app';
import 'firebase/firestore';
var firebaseConfig = firebase.initializeApp({
	apiKey: 'AIzaSyCqhrky7ZP_oZ_RAngsFggz9IOj2jpCWus',
	authDomain: 'todoist-22041.firebaseapp.com',
	databaseURL: 'https://todoist-22041.firebaseio.com',
	projectId: 'todoist-22041',
	storageBucket: 'todoist-22041.appspot.com',
	messagingSenderId: '644613355908',
	appId: '1:644613355908:web:cb1711a9e59da107bf85d1'
});

export { firebaseConfig as firebase };
