const indexController = {
    index: function(req, res, next) {
  res.render('index', { title: 'Express' });
},
    login: function(req, res) {
      res.render('login', {});
    },
    partner: function(req, res) {
      res.render('partner', {});
    },
}

module.exports = indexController;