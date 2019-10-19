require('dotenv').config()

const config = {
  dev: process.env.NODE_ENV !== 'production',
  port: process.env.PORT || 5500,
  cors: process.env.CORS,
}

module.exports = { config }
