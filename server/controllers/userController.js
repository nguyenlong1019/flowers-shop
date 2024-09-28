const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const secretKey = 'secret';
const generateToken = (userId) => {
    return jwt.sign({id: userId}, secretKey, {expiresIn: 86400});
};

exports.registerUser = (req, res) => {
    const {username, email, password} = req.body;
    const hashedPassword = bcrypt.hashSync(password, 8);

    const newUser = {
        username, 
        email,
        password: hashedPassword, 
        role: 'user'
    };

    User.create(newUser, (err, result) => {
        if (err) return res.status(500).send(err);
        res.send({message: "User registered successfully!"});
    });
};

exports.loginUser = (req, res) => {
    const {email, password} = req.body;
    User.findByEmail(email, (err, users) => {
        if (err) return res.status(500).send(err);
        if (!users.length) return res.status(404).send({message: "User not found!"});

        const user = users[0];
        const passwordIsValid = bcrypt.compareSync(password, user.password);
        if (!passwordIsValid) return res.status(401).send({token: null, message: "Invalid Password!"});

        const token = jwt.sign({id: user.id}, 'secret', {expiresIn: 86400});
        res.send({token});
    });
};

exports.changePassword = (req, res) => {
    const {userId, oldPassword, newPassword} = req.body;

    User.findById(userId, (err, users) => {
        if (err) return res.status(500).send(err);
        if (!users.length) return res.status(404).send({'message': "User not found!"});

        const user = users[0];
        const passwordIsValid = bcrypt.compareSync(oldPassword, user.password);
        if (!passwordIsValid) return res.status(401).send({message: "Old password is incorrect!"});

        const hashedNewPassword = bcrypt.hashSync(newPassword, 8);
        User.updatePassword(user.id, hashedNewPassword, (err, result) => {
            if (err) return res.status(500).send(err);

            res.send({message: "Password updated successfully!"});
        });
    });
};

exports.createUser = (req, res) => {
    const {username, email, password, role} = req.body;
    const hashPassword = bcrypt.hashSync(password, 8);
    const userData = {username, email, hashPassword, role};
    User.create(userData, (err, result) => {
        if (err) return res.status(500).send(err);

        res.send({message: "User created successfully!"});
    });
};

exports.getAllUsers = (req, res) => {
    User.findAll((err, users) => {
        if (err) return res.status(500).send(err);
        res.send(users);
    });
};

exports.getUserById = (req, res) => {
    const userId = req.params.id;

    User.findById(userId, (err, user) => {
        if (err) return res.status(500).send(err);
        if (!user) return res.status(404).send({message: "User not found!"});
        res.send(user);
    });
};

exports.updateUser = (req, res) => {
    const {username, email, role} = req.body;
    const userId = req.params.id;

    User.update(userId, {username, email, role}, (err, result) => {
        if (err) return res.status(500).send(err);

        res.send({message: "User updated successfully!"});
    });
};

exports.deleteUser = (req, res) => {
    const userId = req.params.id;

    User.delete(userId, (err, result) => {
        if (err) return res.status(500).send(err);

        res.send({message: "User deleted successfully!"});
    });
};
