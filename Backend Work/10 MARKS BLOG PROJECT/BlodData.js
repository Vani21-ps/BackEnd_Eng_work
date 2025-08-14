const mongoose = require('mongoose');
const Blog = require('./models/user');

mongoose.connect('mongodb://127.0.0.1:27017/blogspa')
  .then(async () => {
    await Blog.deleteMany({}); // Clear existing blogs

    await Blog.insertMany([
      {
        title: 'Digital Transformation',
        content: 'Exploring how digital transformation is changing industries. From automation to cloud computing, businesses are evolving faster than ever. This shift enhances customer experience and operational efficiency. Companies must adapt or risk being left behind in the digital race.',
        image: 'https://media.istockphoto.com/id/535168027/photo/india-goa-palolem-beach.jpg?s=612x612&w=0&k=20&c=iGV1Ue0Efj87dQirWnUpZVG1dNobUjfVvMGdKHTJ7Qg='
      },
      {
        title: 'Productivity Tips',
        content: 'Boosting productivity is all about the right mindset and tools. Prioritize your daily tasks and avoid multitasking. Use tools like Pomodoro timers to stay focused. Don’t forget to take breaks – rest fuels efficiency.',
        image: 'https://images.pexels.com/photos/209428/pexels-photo-209428.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=400'
      },
      {
        title: 'Creative Morning Routines',
        content: 'Your morning sets the tone for your entire day. Start with a short walk, journaling, or mindful meditation. Avoid screens for the first 30 minutes. These habits boost mental clarity and creative flow throughout the day.',
        image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=400'
      },
      {
        title: 'The Power of Mindfulness',
        content: 'Mindfulness encourages you to live in the present. It reduces stress and improves emotional regulation. Practicing just 10 minutes daily can sharpen focus and build resilience. A calm mind is a powerful mind.',
        image: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=400'
      }
    ]);

    console.log('Sample blogs added!');
    mongoose.connection.close();
  })
  .catch(err => console.error('Error:', err));
