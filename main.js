// load the HTTP module 
var http = require("http");

// load the file system module to load the html file
var fs = require("fs")

// Create the HTTP Server 
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    var url = req.url;
        
    if(url === '/'){
        fs.readFile('./index.html',null, function(error, data){
            if(error){
                res.writeHead(404);
                res.write('Whoops! File not found!');
            }else{
                res.write(data);
            }
            res.end();
        });
    }else if(url === '/monday'){
        res.write("Welcome to Monday page");
        res.write(printTodaysDate());
        res.end();
    }else if(url === '/tuesday'){
        res.write("Welcome to Tuesday page");
        res.write(printTodaysDate());
        res.end();
    }else if(url === '/wenesday'){
        res.write("Welcome to Wenesday page");
        res.write(printTodaysDate());
        res.end();
    }else if(url === '/thuesday'){
        res.write("Welcome to Thuesday page");
        res.write(printTodaysDate());
        res.end();
    }else if(url === '/friday'){
        res.write("Welcome to Friday page");
        res.write(printTodaysDate());
        res.end();
    }else if(url === '/satarday'){
        res.write("Welcome to Satarday page");
        res.write(printTodaysDate());
        res.end();
    }else if(url === '/sunday'){
        res.write("Welcome to Sunday page");
        res.write(printTodaysDate());
        res.end();
    }
    
}).listen(3000,function(req, res){
    console.log("server started at port no. 3000")
});

// Date function to print the todays date
function printTodaysDate(){
    let date_ob = new Date();
    let date = ("0" + date_ob.getDate()).slice(-2);
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();
    let hours = date_ob.getHours();
    let minutes = date_ob.getMinutes();
    let seconds = date_ob.getSeconds();
    return "<br>Todays Time is => "+ year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds;
}