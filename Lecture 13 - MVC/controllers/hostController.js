const HomesModel = require("../models/homesModel");

exports.getAddHome = (req, res, next) => {
  res.render("host/addHome", {
    pageTitle: "Add Home",
    currentPage: "addHome",
  });
};

exports.getHostHomes = (req, res, next) => {
  HomesModel.fetchAll((registeredHomes) => {
    res.render("host/hostHomeList", {
      registeredHomes: registeredHomes,
      pageTitle: "Host Homes List",
      currentPage: "hostHomes",
    });
  });
};

exports.postAddHome = (req, res, next) => {
  // console.log("Home Registered Successfully for:", req.body);

  const { houseName, price, location, rating, photoUrl } = req.body;
  // const homesModel = new HomesModel(req.body.houseName, req.body.price, req.body.location, req.body.rating, req.body.photoUrl);
  const homesModel = new HomesModel(
    houseName,
    price,
    location,
    rating,
    photoUrl
  );
  homesModel.save();

  // registeredHomes.push(req.body);
  res.render("host/homeAdded", {
    pageTitle: "Home Added",
    currentPage: "homeAdded",
  });
};

