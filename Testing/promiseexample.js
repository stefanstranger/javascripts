var isMomHappy = false;

//Promise
var willIGetNewPhone = new Promise(
    function (resolve,reject) {
        if (isMomHappy) {
            var phone = {
                brand: 'Samsung',
                color: 'black'
            };
        resolve(phone); //fullfilled
        } else {
            var reason = new Error('mom is not happy');
            reject(reason); //reject
        }
    }
)

// 2nd promise
var showOff = function (phone) {
    var message = 'Hey friend, I have a new ' + phone.color + ' ' + phone.brand + ' phone';
    return Promise.resolve(message);
}

// call our Promise
var askMom = function () {
    //console.log('before asking Mom');
    willIGetNewPhone
    .then(showOff) // Chain 2nd Promise
    .then(function (fullfilled){
        console.log(fullfilled);
    })
    .catch(function (error){
        console.log(error.message);
    });
    //console.log('after asking Mom');
}

askMom();