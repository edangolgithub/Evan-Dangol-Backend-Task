const jwt = require('jsonwebtoken');
const JWT_SECRET = '4ebbc2e61f2a1e2e99eae8f7bef2938d889f86692149e9751c392c346d5d08b5c77bd2a6ca1e4625733ef4b6e123c2aa832039cb1f037e50f562c2b3d576a8f6af22aa2ce40b3c50ec3d17d41dd9217addfb090f3828b56de2f4fb1f113a0988924428b1b854879d230a2c90097f431407ca6435befb2c06b0cc32a10a67adb5c00ed00b4d008a90d034bfbf3642c7f394b8bf9138095fc338ddb7eea0b42e2e293f5544c0f8c048644c94277647637a330a3f2e4a54c033f571731b2b5aaadb6cedd6571ff4cde03e36dbb6572c44ba5908871fc8e9325adbcdd57e93c78d6f854a2ed46a9a9d99b35ceb550b10f02b9e25d95e2f53dd6232427d8a888cf6c1';

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) return res.sendStatus(401); 

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403); 
        req.user = user;
        console.log(user);
        next();
    });
};

module.exports = authenticateToken;
