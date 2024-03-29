const jwt = require('jsonwebtoken')


module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.secret_key);
        const userId = decodedToken.userId;
        red.auth = {
            userId: userId
        };

    } catch (error) {
        res.status(401).json({ error })
    }
}