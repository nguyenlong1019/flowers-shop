import db from '../config.js';

const Flower = {
    create: (flowerData, callback) => {
        db.query(`INSERT INTO flowers (name, category_id, description, price, price_old, image, is_feature, is_sale) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [flowerData.name, flowerData.category_id, flowerData.description, flowerData.price, flowerData.price_old, flowerData.image, flowerData.is_feature, flowerData.is_sale], callback);
    },

    findAll: (callback) => {
        const q = `
            SELECT f.id, f.name, f.price, f.price_old, f.image, f.description, f.is_feature, f.is_sale, f.updated_at, 
                c.name AS categoryName
            FROM flowers f
            JOIN categories c ON f.category_id = c.id
        `;
        db.query(q, callback);
    },

    findByFeature: (callback) => {
        const q = `
            SELECT f.id, f.name, f.price, f.price_old, f.image, f.description, f.is_feature, f.is_sale, f.created_at,
                c.name AS categoryName
            FROM flowers f
            JOIN categories c ON f.category_id = c.id
            WHERE f.is_feature = TRUE
            ORDER BY f.created_at DESC
            LIMIT 8
        `;
        db.query(q, callback);
    },

    findBySale: (callback) => {
        const q = `
            SELECT f.id, f.name, f.price, f.price_old, f.image, f.description, f.is_feature, f.is_sale, f.created_at,
                c.name AS categoryName
            FROM flowers f
            JOIN categories c ON f.category_id = c.id
            WHERE f.is_sale = TRUE
            ORDER BY f.created_at DESC
            LIMIT 3
        `;
        db.query(q, callback);
    },

    findAllByCreatedAtSort: (callback) => {
        const q = `
            SELECT f.id, f.name, f.price, f.price_old, f.image, f.description, f.is_feature, f.is_sale, f.created_at,
                c.name AS categoryName
            FROM flowers f
            JOIN categories c ON f.category_id = c.id
            ORDER BY f.created_at DESC
        `;
        db.query(q, callback);
    },

    findById: (flowerId, callback) => {
        const q = "SELECT f.id, f.name, f.description, f.price, f.price_old, f.image, c.name as categoryName, c.id as category_id, f.updated_at, f.is_sale, f.is_feature FROM flowers f JOIN categories c ON f.category_id = c.id WHERE f.id = ?";
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