const socialMediaElements = [
  {
    name: 'facebook f',
    key: 'facebook'
  },
  {
    name: 'twitter',
    key: 'twitter'
  },
  {
    name: 'instagram',
    key: 'instagram'
  }
];

const CLOUDINARY_UPLOAD_PRESET = 'b19rkup8';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dx0nauane/image/upload';

const articleDetails = {
  className: 'description',
  description: 'placeholder descritption',
  title: 'placeholder title',
  image: 'https://res.cloudinary.com/ah-krypton/image/upload/v1550010452/widget.png'
};

const advertimage = 'https://res.cloudinary.com/ah-krypton/image/upload/v1548328425/mm17kbfqf7sjrw2w45rq.png';

const socialMediaLoginIcons = [
  {
    text: 'Facebook',
    iconName: 'facebook official',
    key: 1,
    url: process.env.FACEBOOK_URL
  },
  {
    text: 'Google',
    iconName: 'google plus square',
    key: 2,
    url: process.env.GOOGLE_URL
  },
  {
    text: 'Linkedin',
    iconName: 'linkedin',
    key: 3,
    url: process.env.LINKEDIN_URL
  },
  {
    text: 'Twitter',
    iconName: 'twitter square',
    key: 4,
    url: process.env.TWITTER_URL
  }
];

const { API_BASE_URL } = process.env;
const { BASE_URL_CB } = process.env;

const authentication = 'authentication';
const twitterPath = '/auth/twitter/callback';
const networkErrorResponse = 'Network error! kindly try again later';
const callbackUrl = 'https://krypton-ah-fe-stage.herokuapp.com/verification';
const activationResponse = {
  data: {
    message: 'Your account has been successfully activated! You can begin sharing your ideas.'
  }
};

const alreadyActivatedResponse = {
  data: {
    message: 'Your account is already activated! kindly login to continue'
  }
};

const accountCreated = 'Account successfully created, kindly check your email to activate';

const options = {
  headers: {
    authorization: localStorage.getItem(authentication)
  }
};

export const { CLOUDINARY_API_KEY } = process.env;
export const { CLOUDINARY_UPLOAD_PRESET } = process.env;

export {
  socialMediaElements,
  articleDetails,
  advertimage,
  socialMediaLoginIcons,
  API_BASE_URL,
  BASE_URL_CB,
  authentication,
  twitterPath,
  networkErrorResponse,
  CLOUDINARY_UPLOAD_URL,
  CLOUDINARY_UPLOAD_PRESET,
  callbackUrl,
  activationResponse,
  alreadyActivatedResponse,
  options,
  accountCreated
};
