const express = require('express')
require('dotenv').config()

const Logger = require('./loaders/logger')

const startServer = async () => {
  const app = express()
  const http = require("http").Server(app);
  await require('./loaders')(app)
  const config = {
    port: 4001
  }
  http.listen(config.port, (err) => {
    if(err){
      Logger.error(err);
      process.exit(1);
      return;
    }
  
    Logger.info(`
      ################################################
      🛡️  Server listening on port: ${config.port} 🛡️ 
      ################################################
    `);
  
  })
}

startServer()