import express from 'express';
import { connectDB } from './Config/database.js';  // Named import
import authRoutes from './Routes/AuthRoutes.js';  // Change to ES module import
import postRoutes from './Routes/PostRoutes.js';
// import userRoutes from './Routes/UserRoutes.js';
import 'dotenv/config.js';

const app = express();
app.use(express.json());

connectDB();

app.use('/api/auth', authRoutes);
// app.use('/api/users', userRoutes);
app.use('/api/posts/', postRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
