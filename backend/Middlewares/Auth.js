
// // Auth.js
// import jwt from 'jsonwebtoken';

// const authMiddleware = (req, res, next) => {
//   const token = req.header('Authorization')?.split(" ")[1];
//   if (!token) return res.status(401).json({ message: 'Access Denied' });

//   try {
//     const verified = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = verified;
//     next();
//   } catch (error) {
//     res.status(400).json({ message: 'Invalid Token' });
//   }
// };

// export default authMiddleware;

import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1]; // Assuming token is passed in 'Authorization: Bearer <token>'

  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid or expired token' });
    }

    req.user = decoded; // Attach user info to the request object
    next();
  });
};


export default authMiddleware;

