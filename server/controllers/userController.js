const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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
}

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
}
