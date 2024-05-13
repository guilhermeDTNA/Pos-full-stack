import { createServer } from 'http';
import { parse } from 'url';
import { readFile } from 'fs';

createServer(function(req, res){
    const q = parse(req.url, true);
    const fileName = "." + q.pathname;

    readFile(fileName, function(err, data){
        if(err){
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end('404 not found');
        }

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    })
}).listen(8080)