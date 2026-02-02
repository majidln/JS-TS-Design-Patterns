class Profiler {
    constructor(label) {
        this.label = label;
        this.lastTime = null;
    }

    start() {
        this.lastTime = process.hrtime();
    }

    end() {
        const diff = process.hrtime(this.lastTime);
        console.log(`Time taken to run ${this.label}: ${diff[0]} seconds and ${diff[1]} nanoseconds`);
    }
}

// we don't want to use the profiler in the production environment so we use the factory pattern to create the profiler
const noopProfiler = {
    start: () => {},
    end: () => {}
}

const createProfiler = (label) {
    if (process.env.NODE_ENV === 'production') {
        return noopProfiler;
    }

    return new Profiler(label);
}
