const User = require('../models/user.model');

exports.getUser = function(req, res) {
    User.findById(req.auth.id, function(err, user) {
        if(err) {
            console.log(err, user);
            res.status(500);
            res.send({ msg: 'Could not retrieve user.'});
        };
        
        return res.json({
            success: true,
            data: user
        });
    });
}

exports.deleteUser = function(req, res) {
    User.findByIdAndDelete(req.auth.id, function(err, user) {
        if(err) {
            console.log(err, user);
            res.status(500);
            res.send({ msg: 'Could not retrieve user.'});
        };
        
        return res.json({
            success: true,
            data: user
        });
    });
}