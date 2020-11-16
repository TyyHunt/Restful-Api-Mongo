const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const con = require('../db-config');
const jwtconfig = require('../jwt-config');
const User = require('../models/user.model');

exports.registerUser = function(req, res) {
    const passwordHash = bcrypt.hashSync(req.body.password);

    const newUser = new User({
        username: req.body.username,
        password: passwordHash,
        email: req.body.email
    });

    newUser.save(function(err, result) {
        if (err) {
            console.log(err);
            res.status(500)
            res.send({ msg: 'Could not register user. Please try again later'});
        };
        return res.json({
            success: true,
            message: 'registered user'
        });
    });
}

exports.login = function(req, res) {
    User.findOne({ username: req.body.username }, req.body.password , function(err, user) {
        if(err) {
            console.log(err);
            res.status(500);
            res.send({ msg: 'Could not retrieve user.'});
        };
        
        bcrypt.compare(req.body.password, user.password)
            .then( function(validPass) {
                if (!validPass) {
                    res.status(404).send({ msg: 'Invalid Password! '});
                }

                const token = jwt.sign({ id: data._id }, jwtconfig.secret, { expiresIn: "1h" });
                res.header('auth-token', token)
                .send({auth: true, msg: 'Logged In! '})
            })
            .catch(console.log);
        });
}

exports.updateUser = function(req, res) {
    const passwordHash = bcrypt.hashSync(req.body.password);
    User.findByIdAndUpdate(req.auth.id, { password: passwordHash }, { new: true, useFindAndModify: false }, function(err, user) {
        if(err) {
            console.log(err, user);
            res.status(500);
            res.send({ msg: 'Could not retrieve user.'});
        };
        return res.json({
            success: true,
            data: data
        });
    });
}
