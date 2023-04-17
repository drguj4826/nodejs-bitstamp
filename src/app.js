const path = require('path');
const express = require('express');
const request = require('request');


// const api = require('./routes/api');

const { application } = require('express');

const app = express();


app.get('/data', async (req, res) => {
    try {
      const response = await fetch("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty");
      res.status(200).json({result: req.bodyresponse});
    } catch (error) {
      console.error(error);
      res.status(500).send(); 
    }
  });



module.exports = app;