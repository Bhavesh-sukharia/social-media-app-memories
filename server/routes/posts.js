import express from 'express';
import { getPost, getPosts, createPost, updatePost, deletePost, likePost, commentPost, savePost } from '../controllers/posts.js'
import auth from '../middleware/auth.js'

const router = express.Router();

router.get('/', getPosts);
router.get('/:id', getPost);

router.post('/', auth, createPost);
router.patch('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);
router.patch('/:id/likePost', auth, likePost);
router.patch('/:id/savePost', auth, savePost);
router.post('/:id/commentPost', auth, commentPost);


export default router;
