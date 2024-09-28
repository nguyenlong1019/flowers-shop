const db = require('../config');

const Flower = {
    create: (flowerData, callback) => {
        db.query(`INSERT INTO flowers (name, description, price, image) VALUES (?, ?, ?, ?)`,
        [flowerData.name, flowerData.description, flowerData.price, flowerData.image]);
    },

    findAll: (callback) => {
        db.query(`SELECT * FROM flowers`, callback);
    },

    findById: (flowerId, callback) => {
        db.query(`SELECT * FROM flowers WHERE id = ?`, [flowerId], callback);
    },

    update: (flowerId, flowerData, callback) => {
        db.query(`UPDATE flowers SET name = ?, description = ?, price = ?, image = ? WHERE id = ?`,
        [flowerData.name, flowerData.description, flowerData.price, flowerData.image, flowerId], callback);
    },

    delete: (flowerId, callback) => {
        db.query(`DELETE FROM flowers WHERE id = ?`, [flowerId], callback);
    }
};

module.exports = Flower;