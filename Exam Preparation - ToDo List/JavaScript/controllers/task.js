const Task = require('../models/Task');

module.exports = {
    index: (req, res) => {
        Task.find({}).then(tasks => {
            res.render('task/index', {tasks: tasks})
        });
    },
	createGet: (req, res) => {
        res.render('task/create');
	},
	createPost: (req, res) => {
        let taskArgs = req.body;
        let errMsg = '';

        if (!taskArgs.title){
        	errMsg = 'Invalid title';
		} else if (!taskArgs.comments) {
        	errMsg = 'Invalid comments';
		}

		if (errMsg) {
        	res.render('article/create', {error: errMsg});
        	return;
		}

		Task.create(taskArgs).then(res.redirect('/'));
	},
	deleteGet: (req, res) => {
    	let id = req.params.id;
    	Task.findById(id).then(task =>
		res.render('task/delete', task));

	},
	deletePost: (req, res) => {
        let id = req.params.id;
        Task.findOneAndRemove({'_id' : id}, function (err,offer) {

        }).then(res.redirect('/'));
	}
};