import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCbqXg2l5vjKEqk5o5hlvOuSuVEBKVvJLE",
    authDomain: "catch-of-the-day-calaway.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-calaway.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// This is a default export
export default base