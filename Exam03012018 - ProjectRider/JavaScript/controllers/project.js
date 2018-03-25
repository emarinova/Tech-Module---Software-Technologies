const Project = require('../models/Project');

module.exports = {
    index: (req, res) => {
        Project.find({}).then(projects => {
            res.render('project/index', {projects: projects});
        });
    },
    createGet: (req, res) => {
        res.render('project/create');
    },
    createPost: (req, res) => {
        let projectArgs = req.body;

        let err = '';

        if (!projectArgs.title){
            err = 'Invalid title!';
        } else if (!projectArgs.description) {
            err = 'Invalid description!';
        } else if (!projectArgs.budget) {
            err = 'Invalid budget!';
        }

        if(err) {
            res.render('project/create',{error: err});
            return;
        }

        Project.create(projectArgs).then(
            res.redirect('/')
        );
    },
    editGet: (req, res) => {
        let id = req.params.id;
        Project.findById(id).then(project =>
            res.render('project/edit', project));
    },
    editPost: (req, res) => {
        let id = req.params.id;
        let projectArgs = req.body;
        let criteria = {
            title: projectArgs.title,
            description: projectArgs.description,
            budget: projectArgs.budget
        };
        Project.findOneAndUpdate({"_id": id}, criteria, {new: true}, function(err, doc){});
        res.redirect('/');
    },
    deleteGet: (req, res) => {
        let id = req.params.id;
        Project.findById(id).then(project =>
            res.render('project/delete', project));
    },
    deletePost: (req, res) => {
        let id = req.params.id;
        Project.findOneAndRemove({'_id' : id}, function (err,offer) {
        }).then(res.redirect('/'));
    }
};