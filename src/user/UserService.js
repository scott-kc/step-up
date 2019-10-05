import {User} from "./User";

const DEFAULT_NUMBER_OF_DAYS = 7;

class UserService {

    constructor(props) {
        this.user = null;
        this.userRepository = props.userRepository ? props.userRepository : sneakyThrows();
    }

    // returns a Promise<User>
    async signUp(name, email, password) {
        console.log(`signing up ${name} ${email} ${password}`);
        ensureEmailAndPassword(email, password);
        let user = new User(name, email, password);
        return await this.userRepository.save(user);
    }

    async signIn(email, password) {
        ensureEmailAndPassword(email, password);
        let user = await this.userRepository.findByEmail(email);
        validateCredentials(user, {password: password});
        return user;
    }

    // resets user.password if props.password is not empty
    async resetPassword(email, password) {
        if (isEmpty(password === null)) {
            throw Error("new password must be valued to reset password.");
        }
        let user = await this.userRepository.findByEmail(email);
        if (user === null) {
            throw Error("User does not exist in the system. Would you like to sign up?");
        }
        user.password = password;
        return this.save(user);
    }

    // saves user and returns it after first validating for not null
    save(user) {
        if (user === null) {
            throw Error("Illegal state. Unable to save null user.");
        }
        return this.userRepository.save(user);
    }

    // returns Array<UserEntry>
    getStepHistory(user, numberOfDays) {
        if (user === null) {
            throw Error("Unable to find step history null user.");
        }
        let steps = this.userRepository.findByEmail(user.email).steps;
        return Array.isArray(steps) ? steps.slice(numberOfDays ? numberOfDays : DEFAULT_NUMBER_OF_DAYS) : [];
    }

}

function ensureEmailAndPassword(email, password) {
    if (isEmpty(email) || isEmpty(password)) {
        throw Error("Email and password must not be empty in order to log in", email, password);
    }
}

function validateCredentials(user, credentials) {
    if (user.password !== credentials.password) {
        throw Error("Invalid credentials. Username or password do not match");
    }
}

function isEmpty(s) {
    return !(s) && s !== '';
}

function sneakyThrows() {
    throw Error("Illegal State! UserService must have a UserRepository");
}

export default UserService;