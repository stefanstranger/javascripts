var jsonStefan = '[{"firstName": "Stefan", "lastName":"Stranger"}]';    

// FirstName Promise
var firstName = function (param) {
    var message = JSON.parse(param)[0].firstName;
    return Promise.resolve(message);
}

// 2nd FirstName Promise
var secondFirstName = function (message) {
    var message = 'Your firstname is ' + message;
    return Promise.resolve(message);
}

//Call our Promise
var whoAmI = function () {
    firstName(jsonStefan)
    .then((secondFirstName))
    .then(function (fullfilled){
        console.log(fullfilled);
    })
    .catch(function (error){
        console.log(error.message);
    })
}

whoAmI();

/*
// Esther Promise
var Esther = function (jsonEsther) {
    var message = 'My firstname is ' + JSON.parse(jsonEsther)[0].firstName;
    return Promise.resolve(message);
}

// call our Promises
var whoAmI = function () {
    Stefan
    .then(Esther)
    .then(function (fullfilled){
        console.log(fullfilled);
    })
    .catch(function (error){
        console.log(error.message);
    });
}

whoAmI();
*/