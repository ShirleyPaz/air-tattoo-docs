'use strict';

var utils = require('../utils/writer.js');
var Estudios = require('../service/EstudiosService');

module.exports.addAgendaByStudio = function addAgendaByStudio (req, res, next) {
  var id = req.swagger.params['id'].value;
  var body = req.swagger.params['body'].value;
  Estudios.addAgendaByStudio(id,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.addStudio = function addStudio (req, res, next) {
  var body = req.swagger.params['body'].value;
  Estudios.addStudio(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteAgenda = function deleteAgenda (req, res, next) {
  var id = req.swagger.params['id'].value;
  var body = req.swagger.params['body'].value;
  Estudios.deleteAgenda(id,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteStudio = function deleteStudio (req, res, next) {
  var body = req.swagger.params['body'].value;
  Estudios.deleteStudio(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAgendasByStudio = function getAgendasByStudio (req, res, next) {
  var id = req.swagger.params['id'].value;
  Estudios.getAgendasByStudio(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getStudios = function getStudios (req, res, next) {
  Estudios.getStudios()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateAgendaByStudio = function updateAgendaByStudio (req, res, next) {
  var id = req.swagger.params['id'].value;
  var agendaId = req.swagger.params['agendaId'].value;
  var body = req.swagger.params['body'].value;
  Estudios.updateAgendaByStudio(id,agendaId,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
