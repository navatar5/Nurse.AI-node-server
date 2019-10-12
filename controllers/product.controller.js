const Product = require('../models/product.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.product_create = function (req, res) {
    let product = new Product(
        {
            username: req.body.username,
            date: req.body.date,
            gluc_level: req.body.gluc_level,
            meal: req.body.meal,
            exercise: req.body.exercise,
            insulin: req.body.insulin,
            medication: req.body.medication
        }
    );

    product.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Product Created successfully')
    })
};

exports.product_findByID = function (req, res) {
    Product.findById(req.params.id, function (err, product) {
        if (err) return next(err);
        res.send(product);
    })
};

exports.product_update = function (req, res) {
    Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) return next(err);
        res.send('Product udpated.');
    });
};

exports.product_findByName = function (req, res) {
  Product.find({username: req.params.username}, function (err, product) {
      if (err) return next(err);
      res.send(product);
  })
};
