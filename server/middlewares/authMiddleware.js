import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json("Not authenticated!");

    jwt.verify(token, "jwtkey", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!");

        req.user = userInfo;

        next();
    });
};

export const verifyAdmin = (req, res, next) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json("You do not have permission to perform this action.");
    }
    next();
};

export const verifyOrderOwnership = (req, res, next) => {
    const orderId = req.params.id;
    const userId = req.user.id;

    const query = "SELECT * FROM orders WHERE id = ? AND user_id = ?";
    db.query(query, [orderId, userId], (err, data) => {
        if (err) return res.status(500).json("Internal server error.");
        if (data.length === 0) return res.status(403).json("You do not have permission to access this order.");

        next();
    });
};
