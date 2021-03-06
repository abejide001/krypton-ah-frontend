import Home from '../pages/Home';
import SignUp from '../pages/SignUp';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import ViewArticle from '../pages/ViewArticle';
import AccountVerification from '../components/AccountVerification';
import socialAuth from '../components/socialAuth/socialAuth';
import Profile from '../pages/Profile';
import CreateArticles from '../pages/CreateArticles';

export default [
  {
    name: 'home',
    component: Home,
    exact: true,
    path: '/'
  },
  {
    name: 'auth',
    component: socialAuth,
    path: '/auth/*/callback',
    exact: false,
    strict: false
  },
  {
    name: 'login',
    component: Login,
    exact: true,
    path: '/login',
    routeType: 'unAuthenticated',
    redirectTo: '/createarticle'
  },
  {
    name: 'viewArticle',
    component: ViewArticle,
    exact: true,
    path: '/article/:title',
  },
  {
    name: 'signup',
    component: SignUp,
    exact: true,
    path: '/signup',
    routeType: 'unAuthenticated',
    redirectTo: '/'
  },
  {
    name: 'verification',
    component: AccountVerification,
    exact: true,
    path: '/verification'
  },
  {
    name: 'profile',
    component: Profile,
    exact: true,
    path: '/profile/:userId'
  },
  {
    name: 'createarticle',
    component: CreateArticles,
    exact: true,
    path: '/createarticle',
    routeType: 'authenticated',
    redirectTo: '/login'
  },
  {
    name: '404',
    component: NotFound,
    exact: true,
    path: '*'
  }
];
