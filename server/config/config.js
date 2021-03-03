module.exports = {
  "development": {
    "database": {
      "url": "mongodb://localhost/todos",
      "options": {
        "useNewUrlParser": true
      }
    }
  },
  "production": {
    "database": {
      "protocol": "mongodb+srv",
      "username": "root",
      "password": process.env.MONGODB_PW,
      "host": "todos.2q7ul.mongodb.net",
      "port": "",
      "options": {
        "useNewUrlParser": true,
        "dbName": "todos"
      }
    }
  }
}
