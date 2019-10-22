require('dotenv').config();

const config = {
  dev: process.env.NODE_ENV !== 'prodcution',
  port: process.env.PORT || 3000,
  cors: process.env.CORS
}

module.exports = { config };