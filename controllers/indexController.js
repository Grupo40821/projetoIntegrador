const indexController = {
    index: function(req, res, next) {
  res.render('index', { title: 'Express' });
},
    login: function(req, res) {
      res.render('login', {});
    }
}

module.exports = indexController;