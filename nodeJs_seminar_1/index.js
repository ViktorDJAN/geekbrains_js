const http = require('http');
let counter1 =0;
let counter2 = 0;
const server = http.createServer((req, res) => {
    console.log('Request is gotten');

    if(req.url==='/'){
        counter1++;
        res.writeHead(200, {'Content-Type': 'text/plain; charset=UTF-8'});
        res.end('<h1> Welcome to the club </h1>' + counter1)
    }else if(req.url==='/about'){
        counter2++;
        res.writeHead(200, {'Content-Type': 'text/plain; charset=UTF-8'});
        res.end('<h1> About is at the club </h1>' + counter2)
    }else{
        res.writeHead(404,{
            'Content-Type': 'text/plain; charset=UTF-8'});
        res.end('Unfortunately we rash informing you that page is NOT FOUND')
    }
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server is kicked off on server ${port}`);
})