const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

const userData = [
  {
    username: 'JohnDoe',
    password: 'password123',
  },
  // Add more users if needed
];

const postData = [
  {
    title: 'My First Blog Post',
    content: 'This is the content of my first post.',
    user_id: 1,
  },
  // Add more posts if needed
];

const commentData = [
  {
    content: 'Great post!',
    user_id: 1,
    post_id: 1,
  },
  // Add more comments if needed
];

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const posts = await Post.bulkCreate(postData);
  const comments = await Comment.bulkCreate(commentData);

  process.exit(0);
};

seedDatabase();
