require('dotenv').config();

const {
  LOCAL_MONGO_URI,
  SESSION_SECRET,
  DUMMY_PASSWORD,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
} = process.env;

module.exports = {
  /* Route prefixes */
  apiPrefix: '/',
  registerPrefix: '/register',
  loginPrefix: '/login',
  logoutPrefix: '/logout',
  profilePrefix: '/profile',
  googleAuthPrefix: '/auth/google',
  googleAuthCallbackPrefix: '/auth/google/callback',

  /* Database  */
  localMongoUri: LOCAL_MONGO_URI,
  sessSecret: SESSION_SECRET,

  /* Test Fixture Data */
  dummyPassword: DUMMY_PASSWORD,

  /* Google Authentication */
  googleAuth: {
    clientId: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackUrl: '/auth/google/redirect',
  },
};
