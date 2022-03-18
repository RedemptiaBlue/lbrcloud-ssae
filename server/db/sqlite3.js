const express = require('express')
const sqlite3 = require('sqlite3').verbose()

let db = new sqlite3.Database(':memory:', err => {
    if (err) return console.error(err.message)
    console.log('Connected to in-memory SQLite database.')
});

db.close(err => {
    if (err) return console.lerror(err.message)
    console.log('database connection closed')
})

module.export = db