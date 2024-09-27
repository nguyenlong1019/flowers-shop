const db = require('../config');

const User = {
    create: (userData, callback) => {
        db.query(`INSERT INTO users (username, email, password, role) VALUES (?, ?, ?, ?)`,
        [userData.username, userData.email, userData.password, userData.role], callback);
    },

    findByEmail: (email, callback) => {
        db.query(`SELECT * FROM users WHERE email = ?`, [email], callback);
    }
};

module.exports = User;