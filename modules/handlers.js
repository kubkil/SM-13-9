const fs = require('fs');
const formidable = require('formidable');

exports.upload = function (request, response) {
  console.log('Rozpoczynam obsługę żądania upload.');
  const form = new formidable.IncomingForm();
  form.parse(request, function (error, fields, files) {
    if (err) throw err;
    fs.renameSync(files.upload.path, 'test.png');
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('received image:<br/>');
    response.write('<img src="/show" />');
    response.end();
  });
}

exports.styles = function (request, response) {
  fs.readFile('style.css', function (err, css) {
    if (err) throw err;
    response.writeHead(200, { 'Content-Type': 'text/css; charset=utf-8' });
    response.write(css);
    response.end();
  });
}

exports.welcome = function (request, response) {
  console.log('Rozpoczynam obsługę żądania welcome.');
  fs.readFile('templates/start.html', function (err, html) {
    if (err) throw err;
    response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    response.write(html);
    response.end();
  });
}

exports.error = function (request, response) {
  console.log('Nie wiem co robić.');
  response.write('404 :(');
  response.end();
}

exports.show = function (request, response) {
  fs.readFile('test.png', 'binary', function (err, file) {
    if (err) throw err;
    response.writeHead(200, {'Content-Type': 'image/png'});
    response.write(file, 'binary');
    response.end();
  });
 }