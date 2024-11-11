// routes/PostRoutes.js
import express from 'express';
import { createPost, likePost, addComment } from '../Controllers/PostController.js';
import authMiddleware from '../middlewares/Auth.js';
import upload from '../config/upload.js';

const router = express.Router();

router.post('/', authMiddleware, upload.single('image'), createPost);     
router.put('/:postId/like', authMiddleware, likePost);                   
router.post('/:postId/comment', authMiddleware, addComment);             

export default router;
