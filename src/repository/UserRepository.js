import 'firebase/auth';
import admin from 'firebase-admin';

const usersPath = 'users';

const mockUser = {
    name: "someone",
    email: "someone@mail.com",
    password: "secret"
};


class UserRepository {
    constructor() {
        const serviceAccount = require("./step-up-5583b-firebase-adminsdk-tyt5q-abfb518444");
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
            databaseURL: "https://step-up-5583b.firebaseio.com"
        });
        //this.app = firebase.initializeApp(firebaseConfig);
        this.db = admin.firestore();
    }

    save(user) {
        let data = map(user);
        //return this.db.collection(usersPath).doc(user.email).set(data);
        return user;
    }

    findByEmail(email) {
        //return this.db.collection(usersPath).doc(email).get().toJSON();
        return mockUser;
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