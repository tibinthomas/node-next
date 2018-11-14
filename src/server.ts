import express from 'express';
const db = require('./database');

db.execute(`SELECT * FROM products`).then((result) => {
    console.log(result);
})
.catch((err) => {
    console.log(err);
})


