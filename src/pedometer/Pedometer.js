import {stepEntry, stepEntryFrom} from "../user/StepEntry";
import {userFrom} from "../user/User";

function incrementUserStepCount(user) {
    let userCopy = userFrom(user);
    const stepEntry = getLatestStepEntry(user);
    const updatedEntry = increment(stepEntry);
    return replaceLatestStepEntry(userCopy, updatedEntry);
}

function getLatestStepEntry(user) {
    if (user && user.steps) {
        const length = user.steps.length;
        return stepEntryFrom(user.steps[length - 1]);
    }
    return stepEntry();
}

function replaceLatestStepEntry(user, updatedEntry) {

}

function increment(entry) {
    let entryCopy = stepEntryFrom(entry);
    entryCopy.stepCount = entryCopy.stepCount + 1;
    return entryCopy
}

export {incrementUserStepCount};

