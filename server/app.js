const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(cors());
app.user('/api/users', userRoutes);

const PORT = 8888;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
 