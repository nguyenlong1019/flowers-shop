import db from '../config.js';

const Order = {
    create: (orderData, callback) => {
        db.query(`INSERT INTO orders (user_id, total_price, shipping_address, shipping_city, shipping_postal_code, shipping_phone, shipping_status, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [orderData.user_id, orderData.total_price, orderData.shipping_address, orderData.shipping_city, orderData.shipping_postal_code, orderData.shipping_phone, orderData.shipping_status, orderData.status], callback);
    },

    findAll: (callback) => {
        db.query(`SELECT * FROM orders`, callback);
    },

    findById: (orderId, callback) => {
        db.query(`SELECT * FROM orders WHERE id = ?`, [orderId], callback);
    },

    update: (orderId, orderData, callback) => {
        db.query(`UPDATE orders SET total_price = ?, shipping_address = ?, shipping_city = ?, shipping_postal_code = ?, shipping_phone = ?, shipping_status = ?, status = ? WHERE id = ?`,
        [orderData.total_price, orderData.shipping_address, orderData.shipping_city, orderData.shipping_postal_code, orderData.shipping_phone, orderData.shipping_status, orderData.status, orderId], callback);
    },

    delete: (orderId, callback) => {
        db.query(`DELETE FROM orders WHERE id = ?`, [orderId], callback);
    },
};

export default Order;
