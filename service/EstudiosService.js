'use strict';


/**
 * Adiciona uma nova data na agenda
 * 
 *
 * id String target studio id
 * body Agenda new agenda info
 * no response value expected for this operation
 **/
exports.addAgendaByStudio = function(id,body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Adiciona um novo estudio
 * 
 *
 * body Estudio new studio info
 * no response value expected for this operation
 **/
exports.addStudio = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Deleta o cadastro de uma agenda
 * 
 *
 * id String target studio id
 * body DeleteItem target agenda to delete
 * no response value expected for this operation
 **/
exports.deleteAgenda = function(id,body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Deleta o cadastro de um estudio
 * 
 *
 * body DeleteItem target studio id to delete
 * no response value expected for this operation
 **/
exports.deleteStudio = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retorna as agendas por estudio
 * 
 *
 * id String target studio id
 * returns List
 **/
exports.getAgendasByStudio = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "data" : "data",
  "horaFinal" : 6.02745618307040320615897144307382404804229736328125,
  "eventos" : [ {
    "tatuador" : "tatuador",
    "tipo" : "tipo",
    "horaFinal" : 5.962133916683182377482808078639209270477294921875,
    "horaInicio" : 1.46581298050294517310021547018550336360931396484375
  }, {
    "tatuador" : "tatuador",
    "tipo" : "tipo",
    "horaFinal" : 5.962133916683182377482808078639209270477294921875,
    "horaInicio" : 1.46581298050294517310021547018550336360931396484375
  } ],
  "horaInicio" : 0.80082819046101150206595775671303272247314453125
}, {
  "data" : "data",
  "horaFinal" : 6.02745618307040320615897144307382404804229736328125,
  "eventos" : [ {
    "tatuador" : "tatuador",
    "tipo" : "tipo",
    "horaFinal" : 5.962133916683182377482808078639209270477294921875,
    "horaInicio" : 1.46581298050294517310021547018550336360931396484375
  }, {
    "tatuador" : "tatuador",
    "tipo" : "tipo",
    "horaFinal" : 5.962133916683182377482808078639209270477294921875,
    "horaInicio" : 1.46581298050294517310021547018550336360931396484375
  } ],
  "horaInicio" : 0.80082819046101150206595775671303272247314453125
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retorna os estúdios cadastrados
 * 
 *
 * returns List
 **/
exports.getStudios = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "nome" : "nome",
  "agenda" : [ {
    "data" : "data",
    "horaFinal" : 6.02745618307040320615897144307382404804229736328125,
    "eventos" : [ {
      "tatuador" : "tatuador",
      "tipo" : "tipo",
      "horaFinal" : 5.962133916683182377482808078639209270477294921875,
      "horaInicio" : 1.46581298050294517310021547018550336360931396484375
    }, {
      "tatuador" : "tatuador",
      "tipo" : "tipo",
      "horaFinal" : 5.962133916683182377482808078639209270477294921875,
      "horaInicio" : 1.46581298050294517310021547018550336360931396484375
    } ],
    "horaInicio" : 0.80082819046101150206595775671303272247314453125
  }, {
    "data" : "data",
    "horaFinal" : 6.02745618307040320615897144307382404804229736328125,
    "eventos" : [ {
      "tatuador" : "tatuador",
      "tipo" : "tipo",
      "horaFinal" : 5.962133916683182377482808078639209270477294921875,
      "horaInicio" : 1.46581298050294517310021547018550336360931396484375
    }, {
      "tatuador" : "tatuador",
      "tipo" : "tipo",
      "horaFinal" : 5.962133916683182377482808078639209270477294921875,
      "horaInicio" : 1.46581298050294517310021547018550336360931396484375
    } ],
    "horaInicio" : 0.80082819046101150206595775671303272247314453125
  } ],
  "email" : "email"
}, {
  "nome" : "nome",
  "agenda" : [ {
    "data" : "data",
    "horaFinal" : 6.02745618307040320615897144307382404804229736328125,
    "eventos" : [ {
      "tatuador" : "tatuador",
      "tipo" : "tipo",
      "horaFinal" : 5.962133916683182377482808078639209270477294921875,
      "horaInicio" : 1.46581298050294517310021547018550336360931396484375
    }, {
      "tatuador" : "tatuador",
      "tipo" : "tipo",
      "horaFinal" : 5.962133916683182377482808078639209270477294921875,
      "horaInicio" : 1.46581298050294517310021547018550336360931396484375
    } ],
    "horaInicio" : 0.80082819046101150206595775671303272247314453125
  }, {
    "data" : "data",
    "horaFinal" : 6.02745618307040320615897144307382404804229736328125,
    "eventos" : [ {
      "tatuador" : "tatuador",
      "tipo" : "tipo",
      "horaFinal" : 5.962133916683182377482808078639209270477294921875,
      "horaInicio" : 1.46581298050294517310021547018550336360931396484375
    }, {
      "tatuador" : "tatuador",
      "tipo" : "tipo",
      "horaFinal" : 5.962133916683182377482808078639209270477294921875,
      "horaInicio" : 1.46581298050294517310021547018550336360931396484375
    } ],
    "horaInicio" : 0.80082819046101150206595775671303272247314453125
  } ],
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
 * Atualiza agenda
 * 
 *
 * id String target studio id
 * agendaId String target agenda id
 * body Agenda new agenda info
 * no response value expected for this operation
 **/
exports.updateAgendaByStudio = function(id,agendaId,body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

