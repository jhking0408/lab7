var projects = require('../projects.json');

/*
 * GET home page.
 */

exports.view = function(request, response){
  	response.render('index', projects);
};

data = "http://localhost:3000:/viewAlt"

exports.view = function(request, response){
	project['viewAlt'] = false;
	response.render('index', data);
};

exports.viewAlt = function(request, response){
	project['viewAlt'] = true;
	response.render('index', data);
};