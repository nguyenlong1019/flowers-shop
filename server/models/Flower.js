import db from '../config.js';

const Flower = {
    create: (flowerData, callback) => {
        db.query(`INSERT INTO flowers (name, category_id, description, price, price_old, image, is_feature, is_sale) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [flowerData.name, flowerData.category_id, flowerData.description, flowerData.price, flowerData.price_old, flowerData.image, flowerData.is_feature, flowerData.is_sale], callback);
    },

    findAll: (callback) => {
        db.query(`SELECT * FROM flowers`, callback);
    },

    findById: (flowerId, callback) => {
        const q = "SELECT f.id, f.name, f.price, f.price_old, f.image, c.name as categoryName, f.updated_at FROM flowers f JOIN categories c ON f.category_id = c.id WHERE f.id = ?";
        db.query(q, [flowerId], callback);
    },

    update: (flowerId, flowerData, callback) => {
        db.query(`UPDATE flowers SET name = ?, category_id = ?, description = ?, price = ?, price_old = ?, image = ?, is_feature = ?, is_sale = ? WHERE id = ?`,
        [flowerData.name, flowerData.category_id, flowerData.description, flowerData.price, flowerData.price_old, flowerData.image, flowerData.is_feature, flowerData.is_sale, flowerId], callback);
    },

    delete: (flowerId, callback) => {
        db.query(`DELETE FROM flowers WHERE id = ?`, [flowerId], callback);
    }
};

export default Flower;