function stepEntry() {
    return stepEntryUsing(new Date(), 0);
}

function stepEntryUsing(date, stepCount) {
    return {
        date: date,
        stepCount: stepCount
    };
}

function stepEntryFrom(entry) {
    if (!entry) {
        return stepEntry();
    } else {
        return {
            date: entry.date ? entry.date : new Date(),
            stepCount: entry.stepCount ? entry.stepCount : 0
        };
    }
}

export {stepEntry, stepEntryUsing, stepEntryFrom};