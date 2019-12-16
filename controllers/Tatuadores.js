'use strict';

var utils = require('../utils/writer.js');
var Tatuadores = require('../service/TatuadoresService');

module.exports.addTattooArtist = function addTattooArtist (req, res, next) {
  var body = req.swagger.params['body'].value;
  Tatuadores.addTattooArtist(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteTattooArtist = function deleteTattooArtist (req, res, next) {
  var body = req.swagger.params['body'].value;
  Tatuadores.deleteTattooArtist(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getTattooArtists = function getTattooArtists (req, res, next) {
  Tatuadores.getTattooArtists()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateTattooArtist = function updateTattooArtist (req, res, next) {
  var body = req.swagger.params['body'].value;
  Tatuadores.updateTattooArtist(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
