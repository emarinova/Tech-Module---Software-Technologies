const Product = require('../models/Product');

module.exports = {

	index: (req, res) => {
		Product.find({}).then(products => {
            res.render('product/index', {products: products})
        })
        },

	createGet: (req, res) => {
        res.render('product/create');
	},

	createPost: (req, res) => {
		let productArgs = req.body;
		let productObj = {
			priority: productArgs.priority,
			name: productArgs.name,
			quantity: productArgs.quantity,
			status: 'not bought'
		}
		Product.create(productObj).then(
			res.redirect('/')
		);
	},
	editGet: (req, res) => {
		let id = req.params.id;
        Product.findById(id).then(product =>
			res.render('product/edit', product));
	},

	editPost: (req, res) => {
        let id = req.params.id;
        let productArgs = req.body;
        let criteria = {
        	priority: productArgs.priority,
			name: productArgs.name,
        	quantity: productArgs.quantity,
			status: productArgs.status
		};
        Product.findOneAndUpdate({"_id": id}, criteria, {new: true}, function(err, doc){});
		res.redirect('/');
	}
};