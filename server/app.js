const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const flowerRoutes = require('./routes/flowerRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const orderRoutes = require('./routes/orderRoutes');
const orderItemRoutes = require('./routes/orderItemRoutes');

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
 