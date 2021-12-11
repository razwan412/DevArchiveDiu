import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import http from 'http';
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import path from 'path';
import { Server } from 'socket.io';
import connectDB from './config/db.js';
import { errorHandler, notFound } from './middleware/errorMiddleware.js';
import Conversation from './models/ConversationModel.js';
import Developer from './models/DeveloperModel.js';
import articleRoutes from './routes/ArticleRoutes.js';
import chatRoutes from './routes/ChatRoutes.js';
import circularRoutes from './routes/CircularRoutes.js';
import { corsWithOptions } from './routes/cors.js';
import developerRoutes from './routes/DevloperRoutes.js';
import oauthRoutes from './routes/OAuthRoutes.js';
import projectRoutes from './routes/ProjectRoutes.js';
import questionRoutes from './routes/QuestionRoutes.js';
import recruiterRoutes from './routes/RecruiterRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';
import { addUser, getUser } from './socket/chat.js';



dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// set cors preflight options
// const corsOptions ={
//   origin:'http://localhost:3000', 
//   credentials:true,            //access-control-allow-credentials:true
//   optionSuccessStatus:200
// }
// app.use(cors(corsOptions));
app.options('*', cors());
app.use(corsWithOptions);

const server = http.createServer(app);
export const io = new Server(server, {
  cors: {
    origin: [
      'http://localhost:5000',
      'http://localhost:3000',
      'https://devarchivediu.netlify.app',
      'https://devarchivediu.vercel.app/',
      'https://devarchivediu-i9bz8j499-razwan412.vercel.app/',
    ],
    methods: ['GET', 'POST'],
    credentials: true,
  },
});
io.on('connection', (socket) => {
  socket.on('join', ({ name, room }) => {
    const { user } = addUser({ id: socket.id, name, room });
    socket.join(user.room);
  });

  // send message
  socket.on('sendMessage', async (message, callback) => {
    const user = getUser(socket.id);
    if (user) {
      await Conversation.create({
        room: user.room,
        user: user.id,
        userName: user.name,
        text: message,
      });
      io.to(user.room).emit('message', {
        room: user.room,
        user: user.id,
        userName: user.name,
        text: message,
      });
    }
    callback();
  });

  // get conversations
  socket.on('getMessages', async (room) => {
    const conversationMessages = await Conversation.find({ room: room });
    io.to(room).emit('returnMessages', { conversationMessages });
  });
});

// passport strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: `https://devarchivediu.herokuapp.com/auth/google/callback`,
    },
    async function (accessToken, refreshToken, profile, cb) {
      const userExist = await Developer.findOne({ googleId: profile.id });
      if (!userExist || userExist === 'null') {
        const newUser = await Developer.create({
          googleId: profile.id,
          full_name: profile.name,
          email: profile.emails[0].value,
        });
        if (newUser) {
          return cb(null, newUser);
        } else {
          return cb('Failed to register user!', null);
        }
      } else {
        return cb(null, profile);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

// passport initilize
app.use(passport.initialize());

// Routes
app.get('/', (req, res) => {
  res.end('Backend server is running...');
});
app.use('/api/dev', developerRoutes);
app.use('/upload', uploadRoutes);
app.use('/api/article', articleRoutes);
app.use('/api/question', questionRoutes);
app.use('/api/recruiter', recruiterRoutes);
app.use('/api/project', projectRoutes);
app.use('/api/circular', circularRoutes);
app.use('/api/chat', chatRoutes);
app.use('/auth', oauthRoutes);

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  '/server/uploads',
  express.static(path.join(__dirname, '/server/uploads'))
);

// Middleware
app.use(notFound);
app.use(errorHandler);




// Server listening
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

const io = require('socket.io')(server, {
  cors: {
    origin: '*',
  }
});
