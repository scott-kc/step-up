const DEFAULT_GOAL = 10000;

class User {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.goal = 10000;
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

function userFrom(user) {
    if (!user) {
        user = {};
    }
    return {
        name: user.name,
        email: user.email,
        password: user.password,
        goal: user.goal,
        steps: user.steps
    }
}




export {User, StepEntry, userFrom, DEFAULT_GOAL};