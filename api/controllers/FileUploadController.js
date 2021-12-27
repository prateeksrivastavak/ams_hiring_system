'use strict';

module.exports = {

  index: function(req, res) {

    res.writeHead(200, { 'content-type': 'text/html' });
    res.end(
      '<form action="http://localhost:9090/api/fileUpload" enctype="multipart/form-data" method="post">' +
      '<input type="text" name="title">' +
      '<input type="file" name="filename" multiple="multiple">' +
      '<input type="submit" value="Upload">' +
      '</form>'
    )
  },
  upload: function(req, res) {
    req.file('filename').upload(function(err, files) {
      if (err)
        return res.serverError(err);

      return res.json({
        message: files.length + ' file(s) uploaded successfully!',
        files: files
      });
    });
  }

};
