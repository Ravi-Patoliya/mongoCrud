var User = require('../models/user');
const router = require('express').Router();

//--get request
router.get('/user', (req, res) => {
    User.find((err, user) => {
        if (err)
            res.send(err)
        res.json(user); // return all user in JSON format
    });
});


//-- get a user with ID of 1
router.get('/user/:User_id', (req, res) => {
    let id = req.params.User_id;
    User.findById(id, (err, user) => {
        if (err)
            res.send(err)

        res.json(user);
    });
});

//-- create user and send back all user after creation
router.post('/user', (req, res) => {
    User.create({
        name: req.body.name,
        salary: req.body.salary,
        age: req.body.age
    }, (err, user) => {
        if (err)
            res.send(err);

        res.json(user)
    });
});

// upadte user and send back all user after creation
router.put('/user/:User_id', (req, res) => {
    let id = req.params.User_id;
    var data = {
        name: req.body.name,
        salary: req.body.salary,
        age: req.body.age
    }

    // save the user
    User.findByIdAndUpdate(id, data, (err, user) => {
        if (err) throw err;

        res.send('Successfully! user updated - ' + user.name);
    });
});

//-- delete a user by id
router.delete('/user/:User_id', (req, res) => {
    console.log(req.params.User_id);
    let id = req.params.User_id;
    User.remove({ _id: id }, (err) => {
        if (err)
            res.send(err);
        else
            res.send('Successfully! user has been Deleted.');
    });
});

module.exports = router;