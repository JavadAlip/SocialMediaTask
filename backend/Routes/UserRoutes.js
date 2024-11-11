// // Routes/UserRoutes.js
// import express from 'express';
// import User from '../Models/User.js';
// import authMiddleware from '../Middlewares/Auth.js';

// const router = express.Router();

// // Follow a user
// router.put('/:userId/follow', authMiddleware, async (req, res) => {
//   try {
//     const userToFollow = await User.findById(req.params.userId);
//     const currentUser = await User.findById(req.user._id);

//     if (!userToFollow || !currentUser) {
//       return res.status(404).json({ error: 'User not found' });
//     }

//     if (!currentUser.following.includes(userToFollow._id)) {
//       currentUser.following.push(userToFollow._id);
//       userToFollow.followers.push(currentUser._id);

//       await currentUser.save();
//       await userToFollow.save();

//       res.status(200).json({ message: `You are now following ${userToFollow.username}` });
//     } else {
//       res.status(400).json({ message: 'You are already following this user' });
//     }
//   } catch (error) {
//     res.status(500).json({ error: 'Error following user' });
//   }
// });

// // Unfollow a user
// router.put('/:userId/unfollow', authMiddleware, async (req, res) => {
//   try {
//     const userToUnfollow = await User.findById(req.params.userId);
//     const currentUser = await User.findById(req.user._id);

//     if (!userToUnfollow || !currentUser) {
//       return res.status(404).json({ error: 'User not found' });
//     }

//     if (currentUser.following.includes(userToUnfollow._id)) {
//       currentUser.following = currentUser.following.filter(
//         (userId) => userId.toString() !== userToUnfollow._id.toString()
//       );
//       userToUnfollow.followers = userToUnfollow.followers.filter(
//         (userId) => userId.toString() !== currentUser._id.toString()
//       );

//       await currentUser.save();
//       await userToUnfollow.save();

//       res.status(200).json({ message: `You have unfollowed ${userToUnfollow.username}` });
//     } else {
//       res.status(400).json({ message: 'You are not following this user' });
//     }
//   } catch (error) {
//     res.status(500).json({ error: 'Error unfollowing user' });
//   }
// });

// export default router;
