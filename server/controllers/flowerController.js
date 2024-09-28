const Flower = require('../models/Flower');

exports.createFlower = (req, res) => {
    const {name, description, price, image} = req.body;

    Flower.create({name, description, price, image}, (err, result) => {
        if (err) return res.status(500).send(err);

        res.send({message: "Flower created successfully!"});
    });
};

exports.getAllFlowers = (req, res) => {
    Flower.findAll((err, flowers) => {
        if (err) return res.status(500).send(err);

        res.send(flowers);
    });
};

exports.getFlowerById = (req, res) => {
    const flowerId = req.params.id;

    Flower.findById(flowerId, (err, flower) => {
        if (err) return res.status(500).send(err);

        if (!flower) return res.status(404).send({message: "Flower not found!"});
        res.send(flower);
    });
};

exports.updateFlower = (req, res) => {
    const flowerId = req.params.id; 
    const {name, description, price, image} = req.body;

    Flower.update(flowerId, {name, description, price, image}, (err, result) => {
        if (err) return res.status(500).send(err);
        res.send({message: "Flower updated successfully!"});
    });
};

exports.deleteFlower = (req, res) => {
    const flowerId = req.params.id;

    Flower.delete(flowerId, (err, result) => {
        if (err) return res.status(500).send(err);

        res.send({message: "Flower deleted successfully!"});
    });
};
