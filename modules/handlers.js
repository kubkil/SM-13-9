const fs = require('fs');
const formidable = require('formidable');
const mv = require('mv');

exports.upload = function (request, response) {
  console.log('Rozpoczynam obsługę żądania upload.');
  const form = new formidable.IncomingForm();
  form.parse(request, function (error, fields, files) {
    fs.renameSync(files.upload.path, 'test.png');
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('received image:<br/>');
    response.write('<img src="/show" />');
    resposne.end();
  });
}

exports.welcome = function (request, response) {
  console.log('Rozpoczynam obsługę żądania welcome.');
  // err vs error?
  // ../templates?
  fs.readFile('templates/start.html', function (error, html) {
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
  // err vs error?
  fs.readFile('test.png', 'binary', function (error, file) {
    response.writeHead(200, {'Content-Type': 'image/png'});
    reponse.write(file, 'binary');
    response.end();
  });
 }