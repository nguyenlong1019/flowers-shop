import Flower from '../models/Flower.js';

const createFlower = (req, res) => {
    const {name, category_id, description, price, image} = req.body;

    Flower.create({name, category_id, description, price, image}, (err, result) => {
        if (err) return res.status(500).send(err);

        res.send({message: "Flower created successfully!"});
    });
};

const getAllFlowers = (req, res) => {
    Flower.findAll((err, flowers) => {
        if (err) return res.status(500).send(err);

        res.send(flowers);
    });
};

const getFlowerById = (req, res) => {
    const flowerId = req.params.id;

    Flower.findById(flowerId, (err, flower) => {
        if (err) return res.status(500).send(err);

        if (!flower) return res.status(404).send({message: "Flower not found!"});
        res.send(flower);
    });
};

const updateFlower = (req, res) => {
    const flowerId = req.params.id; 
    const {name, category_id, description, price, image} = req.body;

    Flower.update(flowerId, {name, category_id, description, price, image}, (err, result) => {
        if (err) return res.status(500).send(err);
        res.send({message: "Flower updated successfully!"});
    });
};

const deleteFlower = (req, res) => {
    const flowerId = req.params.id;

    Flower.delete(flowerId, (err, result) => {
        if (err) return res.status(500).send(err);

        res.send({message: "Flower deleted successfully!"});
    });
};

export {createFlower, getAllFlowers, getFlowerById, updateFlower, deleteFlower};
