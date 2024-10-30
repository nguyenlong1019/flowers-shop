import Flower from '../models/Flower.js';
import jwt from "jsonwebtoken";

const createFlower = (req, res) => {
    const {name, category_id, description, price, price_old, image, is_feature, is_sale} = req.body;
    
    Flower.create({name, category_id, description, price, price_old, image, is_feature, is_sale}, (err, result) => {
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

const get8Feature = (req, res) => {
    Flower.findByFeature((err, flowers) => {
        if (err) return res.status(500).send(err);

        res.send(flowers);
    });
};

const get3Sale = (req, res) => {
    Flower.findBySale((err, flowers) => {
        if (err) return res.status(500).send(err);

        res.send(flowers);
    });
};

const getAllSortCreatedAt = (req, res) => {
    Flower.findAllByCreatedAtSort((err, flowers) => {
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
    const {name, category_id, description, price, price_old, image, is_feature, is_sale} = req.body;

    Flower.update(flowerId, {name, category_id, description, price, price_old, image, is_feature, is_sale}, (err, result) => {
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

export {createFlower, getAllFlowers, get8Feature, get3Sale, getAllSortCreatedAt, getFlowerById, updateFlower, deleteFlower};
