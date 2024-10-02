const jwt = require('jsonwebtoken');
const User = require('../models/User');

const secretKey = 'secret'; // secret key here 

exports.verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(403).send({message: 'No token provided!'});
    }

    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.status(401).send({'message': 'Unauthorized!'});
        }

        req.userId = decoded.id;
        next();
    });
};

exports.isAdmin = (req, res, next) => {
    User.findById(req.userId, (err, users) => {
        if (err) {
            return res.status(500).send({message: 'Error finding user'});
        }

        if (!users.length) {
            return res.status(404).send({message: 'User not found'});
        }

        const user = users[0];

        if (user.role === 'admin') {
            next();
            return;
        }

        res.status(403).send({message: 'Require Admin Role!'});
    });
};

exports.isUser = (req, res, next) => {
    User.findById(req.userId, (err, users) => {
        if (err) {
            return res.status(500).send({message: 'Error finding user'});
        }

        if (!users.length) {
            return res.status(404).send({message: 'User not found'});
        }

        const user = users[0];

        if (user.role === 'user' || user.role === 'admin') {
            next();
            return;
        }

        res.status(403).send({message: 'Require User Role!'});
    });
};
