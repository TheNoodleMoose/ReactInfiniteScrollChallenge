global.fetch = require("node-fetch");
const config = require("universal-config");
const Unsplash = require("unsplash-js").default;
const toJson = require("unsplash-js").toJson;
const express = require("express");

// Define unsplash that accepts our id's and callbackUrl from Config Server
const unsplash = new Unsplash({
  applicationId: config.get("APPLICATION_ID"),
  secret: config.get("SECRET"),
  callbackUrl: config.get("CALLBACK_URL")
});

// Define App
const app = express();

// Make a get request to get photos and convert them to json
app.get("/api/photos", (req, res) => {
  unsplash.photos
    .listPhotos(req.query.start, req.query.count)
    .then(toJson)
    .then(json => res.json(json));
});

// Define our port
const PORT = process.env.PORT || 5000;

// Listen on that port
app.listen(PORT, () => console.log(`Server Started on port ${PORT}`));
