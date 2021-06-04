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