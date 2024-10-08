import db from '../config.js';

const OrderItem = {
    create: (orderItemData, callback) => {
        db.query(`INSERT INTO order_items (order_id, flower_id, quantity, price) VALUES (?, ?, ?, ?)`,
        [orderItemData.order_id, orderItemData.flower_id, orderItemData.quantity, orderItemData.price], callback);
    },

    findByOrderId: (orderId, callback) => {
        db.query(`SELECT * FROM order_items WHERE order_id = ?`, [orderId], callback);
    },

    update: (orderItemId, orderItemData, callback) => {
        db.query(`UPDATE order_items SET quantity = ?, price = ? WHERE id = ?`,
        [orderItemData.quantity, orderItemData.price, orderItemId], callback);
    },

    delete: (orderItemId, callback) => {
        db.query(`DELETE FROM order_items WHERE id = ?`, [orderItemId], callback);
    },
};

export default OrderItem;
