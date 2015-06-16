// Local (client-only) collection
Errors  = new Mongo.Collection(null);

thowError = function(message) {
    Errors.insert({message: message});
};