var jsonStefan = '[{"firstName": "Stefan", "lastName":"Stranger"}]';    
var jsonEsther = '[{"firstName": "Esther", "lastName":"Leibbrand"}]';

// Stefan Promise
var Stefan = function (jsonStefan) {
    var message = 'My firstname is ' + JSON.parse(jsonStefan)[0].firstName;
    return Promise.resolve(message);
}

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