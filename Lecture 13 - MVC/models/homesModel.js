// Core Modules
const path = require("path");
const fs = require("fs");

// Fake database
// const registeredHomes = [];

// local Modules
const rootDir = require("../utils/path");

// Fake database
// let registeredHomes = [];

module.exports = class HomesModel {
  constructor(houseName, price, location, rating, photoUrl) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
  }

  save() {
    HomesModel.fetchAll((registeredHomes) => {
      registeredHomes.push(this);
      const homeDataPath = path.join(rootDir, "data", "homes.json");
      fs.writeFile(homeDataPath, JSON.stringify(registeredHomes), (error) => {
        console.log("File writning concluded", error);
      });
    });
  }

  static fetchAll(callback) {
    const homeDataPath = path.join(rootDir, "data", "homes.json");
    fs.readFile(homeDataPath, (error, data) => {
      // console.log("File read", error, data);
      callback(!error ? JSON.parse(data) : []);
      // if (!error) {
      //   callback(JSON.parse(data));
      // }else{callback([]);}
    });

    // return registeredHomes;
  }
};
