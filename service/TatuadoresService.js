'use strict';


/**
 * Adiciona um novo tatuador
 * 
 *
 * body Tatuador new tattoo artist info
 * no response value expected for this operation
 **/
exports.addTattooArtist = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Deleta o cadastro de um tatuador
 * 
 *
 * body DeleteItem target tattoo artist to delete
 * no response value expected for this operation
 **/
exports.deleteTattooArtist = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retorna os tatuadores cadastrados
 * 
 *
 * returns List
 **/
exports.getTattooArtists = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "estilo" : "estilo",
  "nome" : "nome",
  "email" : "email"
}, {
  "estilo" : "estilo",
  "nome" : "nome",
  "email" : "email"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Atualiza o cadastro de um tatuador
 * 
 *
 * body Tatuador target tattoo artist info to update
 * no response value expected for this operation
 **/
exports.updateTattooArtist = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

