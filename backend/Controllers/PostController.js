import Post from '../Models/Post.js';

/**
 * Create a new post
 */
export const createPost = async (req, res) => {
  try {
    console.log('req.user:', req.user); // Check if user is attached to the request
    console.log('req.file:', req.file); // Check if file is uploaded
    // Check if an image file was uploaded
    if (!req.file) {
      return res.status(400).json({ error: 'No image file uploaded' });
    }

    // Save the post with Cloudinary URL for the image
    const post = new Post({
      user: req.user.id,
      image: req.file.path, // Image URL from Cloudinary
    });

    await post.save();
    res.status(201).json({ success: true, message: 'Post created successfully!', post });
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ error: 'Failed to create post' });
  }
};

/**
 * Like or unlike a post
 */
export const likePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    if (!post) return res.status(404).json({ error: 'Post not found' });

    // Toggle like status
    const isLiked = post.likes.includes(req.user._id);
    if (isLiked) {
      post.likes = post.likes.filter((userId) => userId.toString() !== req.user._id.toString());
    } else {
      post.likes.push(req.user._id);
    }
    await post.save();
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: 'Failed to like post' });
  }
};

/**
 * Add a comment to a post
 */
export const addComment = async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    if (!post) return res.status(404).json({ error: 'Post not found' });

    // Validate comment text
    if (!req.body.text) {
      return res.status(400).json({ error: 'Comment text is required' });
    }

    // Create and add comment
    const comment = {
      user: req.user._id,
      text: req.body.text,
    };
    post.comments.push(comment);
    await post.save();

    res.json(post);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add comment' });
  }
};
