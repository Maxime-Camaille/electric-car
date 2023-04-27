import axios from 'axios';
import {
  actionSaveArticle,
  actionSaveArticlesBlogHome,
  actionSaveArticlesThemePage,
  actionSaveThemesBlogHome,
  actionSetArticlePageToFalse,
  actionSetBlogResponseStatus,
  actionSetLoaderThemePageToFalse,
  actionSetLoaderToFalse,
  FETCH_ARTICLE,
  FETCH_ARTICLES_AND_THEMES_BLOG_HOME,
  FETCH_ARTICLES_THEME_PAGE,
  GET_JWT_TOKEN,
} from '../actions/blog';

const blogMiddleware = (store) => (next) => (action) => {
  let urlAPI;
  if (process.env.NODE_ENV === 'development') {
    urlAPI = process.env.REACT_APP_API_URL_DEV;
  }
  else if (process.env.NODE_ENV === 'production') {
    urlAPI = process.env.REACT_APP_API_URL_PROD;
  }

  // if the action is GET_JWT_TOKEN,
  // the middleware will make a request to retrieve a JWT token from the server
  switch (action.type) {
    case GET_JWT_TOKEN:
      axios.post(
        `${urlAPI}/api/login_check`,
        {
          username: 'ayesha@oclock.io',
          password: 'ayesha',
        },
      )
        .then((response) => {
          // the JWT token is stored in Local Storage
          localStorage.setItem('token', response.data.token);
        })
        .catch((error) => {
          console.log(error);
        });
      break;

    // if the action is FETCH_ARTICLES_AND_THEMES_BLOG_HOME,
    // the middleware will look for the articles and themes for the blog home page
    case FETCH_ARTICLES_AND_THEMES_BLOG_HOME:
      axios.all([
        // request sent to : ${urlAPI}/api/articles
        axios.get(`${urlAPI}/api/articles`),
        // request sent to : ${urlAPI}/api/articles/themes
        axios.get(`${urlAPI}/api/articles/themes`),
      ])
        .then(axios.spread((response1, response2) => {
          // action dispatched to save the articles to the state
          store.dispatch(actionSaveArticlesBlogHome(response1.data));

          // action dispatched to save the themes to the state
          store.dispatch(actionSaveThemesBlogHome(response2.data));
        }))
        .catch((error) => {
          // action dispatched to save the error code to the state
          store.dispatch(actionSetBlogResponseStatus(error.response.status));
        })
        .finally(() => {
          // action dispatched to set the loader to false
          store.dispatch(actionSetLoaderToFalse());
        });
      break;

    case FETCH_ARTICLES_THEME_PAGE: {
      // retrieving the entire state of the blog reducer and then
      // selection of the theme id in axios request
      const { blog } = store.getState();

      // request sent to : ${urlAPI}/api/articles/themes/${id}
      axios.get(`${urlAPI}/api/articles/themes/${blog.themeId}`)
        .then((response) => {
          // action dispatched to save the articles to the state
          store.dispatch(actionSaveArticlesThemePage(response.data));
        })
        .catch((error) => {
          // action dispatched to save the error code to the state
          store.dispatch(actionSetBlogResponseStatus(error.response.status));
        })
        .finally(() => {
          // action dispatched to set the loader to false
          store.dispatch(actionSetLoaderThemePageToFalse());
        });
      break;
    }

    case FETCH_ARTICLE: {
      // retrieving the entire state of the blog reducer and then
      // selection of the article id in axios request
      const { blog } = store.getState();

      // request sent to : ${urlAPI}/api/articles/${id}
      axios.get(`${urlAPI}/api/articles/${blog.articleId}`)
        .then((response) => {
          // action dispatched to save the article to the state
          store.dispatch(actionSaveArticle(response.data));
        })
        .catch((error) => {
          // action dispatched to save the error code to the state
          store.dispatch(actionSetBlogResponseStatus(error.response.status));
        })
        .finally(() => {
          // action dispatched to set the loader to false
          store.dispatch(actionSetArticlePageToFalse());
        });
      break;
    }

    default:
      break;
  }

  // the action is passed to the following middleware/reducer
  next(action);
};

export default blogMiddleware;