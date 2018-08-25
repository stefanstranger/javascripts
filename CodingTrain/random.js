// Create a random number

// Call Random number function once.
console.log('First call to Random Number function');
randomnumber();

// Call Random number function at interval 1 second
setInterval(randomnumber, 1000);

// Random number function
function randomnumber() {
    var r = Math.floor(Math.random()*100);
    console.log(r);
}