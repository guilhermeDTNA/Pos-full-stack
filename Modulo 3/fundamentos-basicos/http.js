import { createServer } from 'http';

createServer(function(req, res){
    res.write("Hello world HTTP!");
    return res.end();
}).listen(8080)