const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const flowerRoutes = require('./routes/flowerRoutes');

const app = express();
app.use(cors());
app.use('/api/users', userRoutes);
app.use('/api/flowers', flowerRoutes);

const PORT = 8888;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
 