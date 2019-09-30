class User {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.isLoggedIn = false;
        this.steps = []; // define steps as a map of date to number
    }
}

class StepEntry {
    constructor() {
        this.date = new Date();
        this.stepCount = 0;
    }

    increment() {
        this.stepCount += 1;
    }
}

export {User, StepEntry};