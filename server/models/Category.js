import db from '../config.js';

const Category = {
    create: (categoryData, callback) => {
        db.query(`INSERT INTO categories (name, description) VALUES (?, ?)`,
        [categoryData.name, categoryData.description], callback);
    },

    findAll: (callback) => {
        db.query(`SELECT * FROM categories`, callback);
    },

    findById: (categoryId, callback) => {
        db.query(`SELECT * FROM categories WHERE id = ?`, [categoryId], callback);
    },

    update: (categoryId, categoryData, callback) => {
        db.query(`UPDATE categories SET name = ?, description = ? WHERE id = ?`,
        [categoryData.name, categoryData.description, categoryId], callback);
    },

    delete: (categoryId, callback) => {
        db.query(`DELETE FROM categories WHERE id = ?`, [categoryId], callback);
    }
};

export default Category;