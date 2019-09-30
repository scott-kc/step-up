import * as firebase from 'firebase';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBp3XN-umKusDA40vcNP_EAz1MB_fqBHHs",
    authDomain: "step-up-5583b.firebaseapp.com",
    databaseURL: "https://step-up-5583b.firebaseio.com",
    projectId: "step-up-5583b",
    storageBucket: "step-up-5583b.appspot.com",
    messagingSenderId: "598409230273",
    appId: "1:598409230273:web:efe9198b757730280c2140"
};

const usersPath = 'users';

class UserRepository {
    constructor() {
        this.app = firebase.initializeApp(firebaseConfig);
        this.db = firebase.database();
    }

    save(user) {
        return this.db.ref(`${usersPath}/${user.name}`).set(user);
    }

    findByEmail(email) {
        return this.db.ref(`${usersPath}/${email}`).toJSON();
    }
}

export default UserRepository;