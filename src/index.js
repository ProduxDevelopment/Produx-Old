const express = require('express');
const app = new express();

const routes = require("./routes")

app.listen("8000", (() => {
    console.log('App listening')
}))

