 'use strict';

 module.exports = (entity) => {
   return (data) => {
     var read = fs.createReadStream(reqData.file.path);
     var ext = path.parse(reqData.file.name).ext;
     var fn = Math.floor(Math.random() * 1000000000000000) + ext;
     var fileName = path.join(sails.config.uploadFolder, fn);
     read.pipe(write);
     write.on('finish', function() {
       if (reqData.resourceId && reqData.resourceType) {
         reqData.database.resourceFiles.create({
           fileName: fn,
           filePath: fileName
         }).then(function(instance) {
           return resolve({
             id: instance.id,
             fileName: reqData.file.path,
             filePath: fn
           });
         });
       } else {
         return resolve({
           fileName: reqData.file.path,
           filePath: fn
         });
       }
     });
   }
 }



 