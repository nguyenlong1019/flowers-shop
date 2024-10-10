import Category from '../models/Category.js';

const createCategory = (req, res) => {
    const {name, description} = req.body;

    Category.create({name, description}, (err, result) => {
        if (err) return res.status(500).send(err);

        res.send({message: 'Category created successfully!'});
    });
};

const getAllCategories = (req, res) => {
    Category.findAll((err, categories) => {
        if (err) return res.status(500).send(err);
        res.send(categories);
    });
};

const getCategoryById = (req, res) => {
    const categoryId = req.params.id;

    Category.findById(categoryId, (err, category) => {
        if (err) return res.status(500).send(err);
        res.send(category);
    });
};

const updateCategory = (req, res) => {
    const categoryId = req.params.id;
    const {name, description} = req.body;

    Category.update(categoryId, {name, description}, (err, result) => {
        if (err) return res.status(500).send(err);
        res.send({message: 'Category updated successfully!'});
    });
};

const deleteCategory = (req, res) => {
    const categoryId = req.params.id;
    Category.delete(categoryId, (err, result) => {
        if (err) return res.status(500).send(err);
        res.send({message: "Category deleted successfully!"});
    });
};

export {createCategory, getAllCategories, getCategoryById, updateCategory, deleteCategory};
