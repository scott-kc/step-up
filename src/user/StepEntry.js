function stepEntry() {
    return {
        date: new Date(),
        stepCount: 0
    };
}

function stepEntryUsing(date, stepCount) {
    return {
        date: date,
        stepCount: stepCount
    };
}

function stepEntryFrom(entry) {
    if (!entry) {
        return stepEntry;
    } else {
        return {
            date: entry.date ? entry.date : new Date(),
            stepCount: entry.stepCount ? entry.stepCount : 0
        };
    }
}

function increment(entry) {
    let entryCopy = stepEntryFrom(entry);
    entryCopy.stepCount = entryCopy.stepCount + 1;
    return entryCopy
}

export {stepEntry,stepEntryUsing, stepEntryFrom, increment};