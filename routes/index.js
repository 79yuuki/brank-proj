
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index.hbs', { title: 'handlebars', data: 'hello world!!' });
};
