import db from '../config.js';

const User = {
    create: (userData, callback) => {
        db.query(`INSERT INTO users (username, email, password, role) VALUES (?, ?, ?, ?)`,
        [userData.username, userData.email, userData.password, userData.role], callback);
    },

    findByEmail: (email, callback) => {
        db.query(`SELECT * FROM users WHERE email = ?`, [email], callback);
    },

    findById: (userId, callback) => {
        db.query(`SELECT * FROM users WHERE id = ?`, [userId], callback);
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

    updatePassword: (userId, newPassword, callback) => {
        db.query(`UPDATE users SET password = ? WHERE id = ?`, [newPassword, userId], callback);
    }
};

export default User;