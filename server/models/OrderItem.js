const db = require('../config');

const OrderItem = {
    create: (orderItemData, callback) => {
        db.query(`INSERT INTO order_items (order_id, flower_id, quantity, price) VALUES (?, ?, ?, ?)`,
        [orderItemData.order_id, orderItemData.flower_id, orderItemData.quantity, orderItemData.price], callback);
    },

    findOrderById: (orderId, callback) => {
        db.query(`SELECT * FROM order_items WHERE order_id = ?`, [orderId], callback);
    },

    update: (orderId, flowerId, orderItemData, callback) => {
        db.query(`UPDATE order_items SET quantity = ?, price = ? WHERE order_id = ? AND flower_id = ?`,
        [orderItemData.quantity, orderItemData.price, orderId, flowerId], callback);
    },

    delete: (orderItemId, callback) => {
        db.query(`DELETE FROM order_items WHERE id = ?`, [orderItemId], callback);
    },
};

module.exports = OrderItem;
