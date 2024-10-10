import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import userRoutes from "./routes/userRoutes.js";
import flowerRoutes from './routes/flowerRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import orderItemRoutes from './routes/orderItemRoutes.js';

const app = express();
app.use(cors());
app.use(bodyParser.json())

app.use('/api/users', userRoutes);
app.use('/api/flowers', flowerRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/order-items', orderItemRoutes);

const PORT = 8888;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
 