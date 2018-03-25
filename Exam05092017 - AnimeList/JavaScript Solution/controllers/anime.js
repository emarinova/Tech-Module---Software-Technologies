const Anime = require('../models/Anime');

module.exports = {
	index: (req, res) => {
        Anime.find({}).then(animes => res.render('anime/index', {animes: animes}));
	},
	createGet: (req, res) => {
        res.render('anime/create');
	},
	createPost: (req, res) => {
        let animeArgs = req.body;
        Anime.create(animeArgs).then(res.redirect('/'));
	},
	deleteGet: (req, res) => {
        let id = req.params.id;
        Anime.findById(id).then(anime =>
            res.render('anime/delete', anime));
	},

	deletePost: (req, res) => {
        let id = req.params.id;
        Anime.findOneAndRemove({'_id' : id}, function (err,offer) {

        }).then(res.redirect('/'));
	}
};