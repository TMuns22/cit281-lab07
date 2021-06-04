### Description

Create your own GitHub organization for the CIT Minor, create your first GitHub repository, clone your GitHub repository to your local system, create lab JavaScript file, and initialize folder as a Node.js folder, Update and commit lab JavaScript file to practice with error handling, and push your changes to GitHub.

### Code

class CustomError extends Error {
    constructor(args) {
        super(args);
        this.name = 'CustomError';
    }
}

try{
    throw new throwGenericError("Generic error")
} catch (err) {
    console.log(`${err.name}: ${err.message}`);
}

try{
    throw new throwCustomError("Custom error")
} catch (err) {
    console.log(`${err.name}: ${err.message}`);
}

try {
    throwGenericError()
} catch (err){

}
