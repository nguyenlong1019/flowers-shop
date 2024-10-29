import db from '../config.js';

const Order = {
    create: (orderData, orderItems, callback) => {
        db.beginTransaction((err) => {
            if (err) return callback(err);

            // Tạo đơn hàng mới
            db.query(
                `INSERT INTO orders (user_id, total_price, shipping_address, shipping_city, shipping_postal_code, shipping_phone, shipping_status, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
                [
                    orderData.user_id,
                    orderData.total_price,
                    orderData.shipping_address,
                    orderData.shipping_city,
                    orderData.shipping_postal_code,
                    orderData.shipping_phone,
                    orderData.shipping_status,
                    orderData.status,
                ],
                (err, result) => {
                    if (err) {
                        return db.rollback(() => callback(err));
                    }

                    const orderId = result.insertId;

                    // Thêm các mục trong đơn hàng (order_items)
                    const itemsData = orderItems.map((item) => [
                        orderId,
                        item.flower_id,
                        item.quantity,
                        item.price,
                    ]);
                    db.query(
                        `INSERT INTO order_items (order_id, flower_id, quantity, price) VALUES ?`,
                        [itemsData],
                        (err) => {
                            if (err) {
                                return db.rollback(() => callback(err));
                            }

                            // Hoàn tất giao dịch
                            db.commit((err) => {
                                if (err) {
                                    return db.rollback(() => callback(err));
                                }
                                callback(null, { message: "Order created successfully!" });
                            });
                        }
                    );
                }
            );
        });
    },

    findAll: (callback) => {
        const query = `
            SELECT o.*, u.username AS user_name 
            FROM orders o
            JOIN users u ON o.user_id = u.id
        `;
        db.query(query, callback);
    },

    findById: (orderId, callback) => {
        db.query(`SELECT * FROM orders WHERE id = ?`, [orderId], callback);
    },findById: (orderId, callback) => {
        const queryOrder = `SELECT * FROM orders WHERE id = ?`;
        const queryOrderItems = `SELECT * FROM order_items WHERE order_id = ?`;

        // Truy vấn thông tin đơn hàng và các mục trong đơn hàng
        db.query(queryOrder, [orderId], (err, orderResults) => {
            if (err) return callback(err);

            db.query(queryOrderItems, [orderId], (err, orderItemsResults) => {
                if (err) return callback(err);

                callback(null, {
                    ...orderResults[0],
                    order_items: orderItemsResults,
                });
            });
        });
    },

    update: (orderId, orderData, orderItems, callback) => {
        db.beginTransaction((err) => {
            if (err) return callback(err);

            // Cập nhật thông tin đơn hàng
            db.query(
                `UPDATE orders SET total_price = ?, shipping_address = ?, shipping_city = ?, shipping_postal_code = ?, shipping_phone = ?, shipping_status = ?, status = ? WHERE id = ?`,
                [
                    orderData.total_price,
                    orderData.shipping_address,
                    orderData.shipping_city,
                    orderData.shipping_postal_code,
                    orderData.shipping_phone,
                    orderData.shipping_status,
                    orderData.status,
                    orderId,
                ],
                (err) => {
                    if (err) {
                        return db.rollback(() => callback(err));
                    }

                    // Xóa các mục đơn hàng cũ
                    db.query(`DELETE FROM order_items WHERE order_id = ?`, [orderId], (err) => {
                        if (err) {
                            return db.rollback(() => callback(err));
                        }

                        // Thêm các mục đơn hàng mới
                        const itemsData = orderItems.map((item) => [
                            orderId,
                            item.flower_id,
                            item.quantity,
                            item.price,
                        ]);
                        db.query(
                            `INSERT INTO order_items (order_id, flower_id, quantity, price) VALUES ?`,
                            [itemsData],
                            (err) => {
                                if (err) {
                                    return db.rollback(() => callback(err));
                                }

                                // Hoàn tất giao dịch
                                db.commit((err) => {
                                    if (err) {
                                        return db.rollback(() => callback(err));
                                    }
                                    callback(null, { message: "Order updated successfully!" });
                                });
                            }
                        );
                    });
                }
            );
        });
    },

    delete: (orderId, callback) => {
        db.query(`DELETE FROM orders WHERE id = ?`, [orderId], callback);
    },
};

export default Order;
