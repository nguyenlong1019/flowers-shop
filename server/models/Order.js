import db from '../config.js';

const Order = {
    create: (orderData, callback) => {
        db.query(`INSERT INTO orders (user_id, total_price, status) VALUES (?, ?, ?)`,
        [orderData.user_id, orderData.total_price, orderData.status], callback);
    },

    findAll: (callback) => {
        db.query(`SELECT * FROM orders`, callback);
    },

    findById: (orderId, callback) => {
        db.query(`SELECT * FROM orders WHERE id = ?`, [orderId], callback);
    },

    update: (orderId, orderData, callback) => {
        db.query(`UPDATE orders SET total_price = ?, status = ? WHERE id = ?`,
        [orderData.total_price, orderData.status, orderId], callback);
    },

    delete: (orderId, callback) => {
        db.query(`DELETE FROM orders WHERE id = ?`, [orderId], callback);
    },
};

export default Order;
