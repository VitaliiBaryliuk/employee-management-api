const multer = require('multer');

const upload = multer({
  dest: 'src/public/images',
  limits: {
    fileSize: 4 * 1024 * 1024,
  }
});

module.exports = upload