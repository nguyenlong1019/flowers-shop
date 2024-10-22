import Flower from '../models/Flower.js';
import jwt from "jsonwebtoken";

const createFlower = (req, res) => {
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json("Not authenticated!");

    jwt.verify(token, "jwtkey", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!");

        if (userInfo.role !== 'admin') {
            return res.status(403).json("You do not have permission to perform this action.")
        }
        
        const {name, category_id, description, price, price_old, image, is_feature, is_sale} = req.body;
    
        Flower.create({name, category_id, description, price, price_old, image, is_feature, is_sale}, (err, result) => {
            if (err) return res.status(500).send(err);
    
            res.send({message: "Flower created successfully!"});
        });
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
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json("Not authenticated!");

    jwt.verify(token, "jwtkey", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!");
    
        if (userInfo.role !== 'admin') {
            return res.status(403).json("You do not have permission to perform this action.")
        }
        
        
        const flowerId = req.params.id; 
        const {name, category_id, description, price, price_old, image, is_feature, is_sale} = req.body;
    
        Flower.update(flowerId, {name, category_id, description, price, price_old, image, is_feature, is_sale}, (err, result) => {
            if (err) return res.status(500).send(err);
            res.send({message: "Flower updated successfully!"});
        });
    });
};

const deleteFlower = (req, res) => {
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json("Not authenticated!");

    jwt.verify(token, "jwtkey", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!");
    
        if (userInfo.role !== 'admin') {
            return res.status(403).json("You do not have permission to perform this action.")
        }
        
        const flowerId = req.params.id;
    
        Flower.delete(flowerId, (err, result) => {
            if (err) return res.status(500).send(err);
    
            res.send({message: "Flower deleted successfully!"});
        });
    });

};

export {createFlower, getAllFlowers, getFlowerById, updateFlower, deleteFlower};
