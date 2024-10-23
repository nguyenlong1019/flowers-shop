import db from '../config.js';

const User = {
    create: (userData, callback) => {
        db.query(`INSERT INTO users (username, email, password, role) VALUES (?, ?, ?, ?)`,
        [userData.username, userData.email, userData.hashPassword, userData.role], callback);
    },

    findById: (userId, callback) => {
        db.query(`SELECT * FROM users WHERE id = ?`, [userId], callback);
    },

    findByEmail: (email, callback) => {
        db.query(`SELECT * FROM users WHERE email = ?`, [email], callback);
    },

    findByUsername: (username, callback) => {
        db.query(`SELECT * FROM users WHERE username = ?`, [username], callback);
    },  

    findAll: (callback) => {
        db.query(`SELECT * FROM users`, callback);
    },

    update: (userId, userData, callback) => {
        db.query(`UPDATE users SET username = ?, email = ?, role = ? WHERE id = ?`,
        [userData.username, userData.email, userData.role, userId], callback);
    },

    delete: (userId, callback) => {
        db.query(`DELETE FROM users WHERE id = ?`, [userId], callback);
    },
};

export default User;