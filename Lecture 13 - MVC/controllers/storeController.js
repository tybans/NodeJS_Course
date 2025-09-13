const HomesModel = require("../models/homesModel");

exports.getIndex = (req, res, next) => {
  HomesModel.fetchAll((registeredHomes) => {
    res.render("store/index", {
      registeredHomes: registeredHomes,
      pageTitle: "airbnb Home",
      currentPage: "index",
    });
  });
};
exports.getHomes = (req, res, next) => {
  HomesModel.fetchAll((registeredHomes) => {
    res.render("store/homeList", {
      registeredHomes: registeredHomes,
      pageTitle: "Home List",
      currentPage: "home",
    });
  });
};

exports.getBookings = (req, res, next) => {
  res.render("store/bookings", {
    pageTitle: "My Bookings",
    currentPage: "bookings",
  });
};

exports.getFavouriteList = (req, res, next) => {
  HomesModel.fetchAll((registeredHomes) => {
  res.render("store/favouriteList", {
    registeredHomes: registeredHomes,
    pageTitle: "My Favourites",
    currentPage: "favourites",
  });
})
};
