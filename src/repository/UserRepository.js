import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";


const usersPath = 'users';

const firebaseConfig = {
    apiKey: "AIzaSyCGu6VPCdm9VofmdK-ZFEfxRbpH3R92Ao0",
    authDomain: "step-up-24f08.firebaseapp.com",
    databaseURL: "https://step-up-24f08.firebaseio.com",
    projectId: "step-up-24f08",
    storageBucket: "step-up-24f08.appspot.com",
    messagingSenderId: "557965425780",
    appId: "1:557965425780:web:a8fcab2c215d843232e521",
    measurementId: "G-EJKYXSE81E"
};


class UserRepository {
    constructor() {
        firebase.initializeApp(firebaseConfig);
        this.db =  firebase.firestore();
    }

    async save(user) {
        let data = map(user);
        const saved = await this.db.collection(usersPath).doc(user.email).set(data);
        console.log(saved);
        return saved;
    }

    findByEmail(email) {
        return this.db.collection(usersPath).doc(email).get().toJSON();
    }
}

function map(user) {
    return user ? {
            name: user.name,
            email: user.email,
            password: user.password
        }
        : {};
}

export default UserRepository;