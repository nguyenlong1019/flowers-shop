import User from '../models/User.js';
import bcrypt from "bcryptjs";

const createUser = (req, res) => {
    const {username, email, password, role} = req.body;
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);
    const userData = {username, email, hashPassword, role};
    User.create(userData, (err, result) => {
        if (err) return res.status(500).send(err);

        res.send({message: "User created successfully!"});
    });
};

const getAllUsers = (req, res) => {
    User.findAll((err, users) => {
        if (err) return res.status(500).send(err);
        res.send(users);
    });
};

const getUserById = (req, res) => {
    const userId = req.params.id;

    User.findById(userId, (err, user) => {
        if (err) return res.status(500).send(err);
        if (!user) return res.status(404).send({message: "User not found!"});
        res.send(user);
    });
};

const updateUser = (req, res) => {
    const {username, email, role} = req.body;
    const userId = req.params.id;

    User.update(userId, {username, email, role}, (err, result) => {
        if (err) return res.status(500).send(err);

        res.send({message: "User updated successfully!"});
    });
};

const deleteUser = (req, res) => {
    const userId = req.params.id;

    User.delete(userId, (err, result) => {
        if (err) return res.status(500).send(err);

        res.send({message: "User deleted successfully!"});
    });
};

export {createUser, getAllUsers, getUserById, updateUser, deleteUser};
