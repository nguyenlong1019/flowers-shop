import db from '../config.js';

const Order = {
    create: (orderData, orderItems, callback) => {
        db.beginTransaction((err) => {
            if (err) return callback(err);

            // Tạo đơn hàng mới
            db.query(
                `INSERT INTO orders (user_id, recipient_name, total_price, shipping_address, shipping_city, shipping_postal_code, shipping_phone, shipping_status, status, payment_method, payment_status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                [
                    orderData.user_id,
                    orderData.recipient_name,
                    orderData.total_price,
                    orderData.shipping_address,
                    orderData.shipping_city,
                    orderData.shipping_postal_code,
                    orderData.shipping_phone,
                    orderData.shipping_status,
                    orderData.status,
                    orderData.payment_method, 
                    orderData.payment_status
                ],
                (err, result) => {
                    if (err) {
                        return db.rollback(() => callback(err));
                    }

                    const orderId = result.insertId;

                    // Thêm các mục trong đơn hàng (order_items)
                    const itemsData = orderItems.map((item) => [
                        orderId,
                        item.id,
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
                `UPDATE orders SET recipient_name = ?, total_price = ?, shipping_address = ?, shipping_city = ?, shipping_postal_code = ?, shipping_phone = ?, shipping_status = ?, status = ?, payment_method = ?, payment_status = ? WHERE id = ?`,
                [
                    orderData.recipient_name,
                    orderData.total_price,
                    orderData.shipping_address,
                    orderData.shipping_city,
                    orderData.shipping_postal_code,
                    orderData.shipping_phone,
                    orderData.shipping_status,
                    orderData.status,
                    orderData.payment_method,
                    orderData.payment_status,
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
        db.beginTransaction((err) => {
            if (err) return callback(err);

            // Xóa các mục trong order_items trước
            db.query(`DELETE FROM order_items WHERE order_id = ?`, [orderId], (err) => {
                if (err) return db.rollback(() => callback(err));

                // Sau đó xóa đơn hàng trong orders
                db.query(`DELETE FROM orders WHERE id = ?`, [orderId], (err) => {
                    if (err) return db.rollback(() => callback(err));

                    // Hoàn tất giao dịch
                    db.commit((err) => {
                        if (err) {
                            return db.rollback(() => callback(err));
                        }
                        callback(null, { message: "Order deleted successfully!" });
                    });
                });
            });
        });
    },

    findByUserId: (userId, callback) => {
        const queryOrder = `SELECT * FROM orders WHERE user_id = ?`;
        const queryOrderItems = `SELECT * FROM order_items WHERE order_id = ?`;

        // Truy vấn danh sách đơn hàng của người dùng
        db.query(queryOrder, [userId], (err, orderResults) => {
            if (err) return callback(err);

            // Kiểm tra nếu không có đơn hàng nào
            if (orderResults.length === 0) {
                return callback(null, []);
            }

            // Duyệt qua từng đơn hàng và lấy các mục đơn hàng liên quan
            const ordersWithItems = [];
            let processedOrders = 0;

            orderResults.forEach((order) => {
                db.query(queryOrderItems, [order.id], (err, orderItemsResults) => {
                    if (err) return callback(err);

                    ordersWithItems.push({
                        ...order,
                        order_items: orderItemsResults,
                    });

                    processedOrders++;

                    // Khi đã xử lý xong tất cả các đơn hàng
                    if (processedOrders === orderResults.length) {
                        callback(null, ordersWithItems);
                    }
                });
            });
        });
    },
};

export default Order;
