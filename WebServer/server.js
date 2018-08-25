var http = require('http');
http.createServer(function(request, response){
    var date = new Date();
    var dateString = date.getDate() + "-" + (date.getMonth()+1) + "-" + date.getFullYear();
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end('<b>Hello World</b><br /><i>The date is: ' + dateString + '</i><br /><br />The requested URL is: ' + request.url);    
}).listen(3000);