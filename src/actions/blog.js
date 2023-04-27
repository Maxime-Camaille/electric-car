/* ACTION TYPES */

//! action type for JWT token retrieval
export const GET_JWT_TOKEN = 'GET_JWT_TOKEN';

//! action types for the blog home page
export const FETCH_ARTICLES_AND_THEMES_BLOG_HOME = 'FETCH_ARTICLES_AND_THEMES_BLOG_HOME';
export const SAVE_ARTICLES_BLOG_HOME = 'SAVE_ARTICLES_BLOG_HOME';
export const SAVE_THEMES_BLOG_HOME = 'SAVE_THEMES_BLOG_HOME';

//! action types for loader
export const SET_LOADER_TO_FALSE = 'SET_LOADER_TO_FALSE';
export const SET_LOADER_THEME_PAGE_TO_FALSE = 'SET_LOADER_THEME_PAGE_TO_FALSE';
export const SET_LOADER_ARTICLE_PAGE_TO_FALSE = 'SET_LOADER_ARTICLE_PAGE_TO_FALSE';

//! action types for article page
export const PUT_ARTICLE_ID_IN_STATE = 'PUT_ARTICLE_ID_IN_STATE';
export const FETCH_ARTICLE = 'FETCH_ARTICLE';
export const SAVE_ARTICLE = 'SAVE_ARTICLE';

//! action types for blog theme page
export const PUT_THEME_ID_IN_STATE = 'PUT_THEME_ID_IN_STATE';
export const FETCH_ARTICLES_THEME_PAGE = 'FETCH_ARTICLES_FOR_THEME_PAGE';
export const SAVE_ARTICLES_THEME_PAGE = 'SAVE_ARTICLES_THEME_PAGE';

//! action types for errors
export const SET_BLOG_RESPONSE_STATUS = 'SET_BLOG_RESPONSE_STATUS';

/* ACTION CREATORS */

//! action creators for JWT token

/**
 * Action dispatched to retrieve the JWT token from the server
 * @returns {Object} action
 */
export function actionGetJwtToken() {
  return {
    type: GET_JWT_TOKEN,
  };
}

//! action creators for the blog home page

/**
 * Action dispatched on the first render of App to ask middleware
 * to fetch articles and themes for display in NosConseils
 * @returns {Object} action
 */
export function actionFetchArticlesAndThemesBlogHome() {
  return {
    type: FETCH_ARTICLES_AND_THEMES_BLOG_HOME,
  };
}

/**
 * Action dispatched by the middleware to ask the reducer to save the list of
 * articles for NosConseils in the state
 * @returns {Object} action
 * @param {Array} table containing article objects
 */
export function actionSaveArticlesBlogHome(articles) {
  return {
    type: SAVE_ARTICLES_BLOG_HOME,
    payload: articles,
  };
}

/**
 * Action dispatched by the middleware to ask the reducer to save the list of
 * themes for NosConseils in the state
 * @returns {Object} action
 * @param {Array} table containing theme objects
 */
export function actionSaveThemesBlogHome(themes) {
  return {
    type: SAVE_THEMES_BLOG_HOME,
    payload: themes,
  };
}

//! action creators for the article page

/**
 * Action dispatched to save the id of the article in question to the state
 * @param {Number} articleId
 * @returns {Object} action
 */
export function actionPutArticleIdInState(articleId) {
  return {
    type: PUT_ARTICLE_ID_IN_STATE,
    payload: articleId,
  };
}

/**
 * Action dispatched on the first render of NosConseilsArticlePage to ask middleware
 * to fetch article in question for display
 * @returns {Object} action
 */
export function actionFetchArticle() {
  return {
    type: FETCH_ARTICLE,
  };
}

/**
 * Action dispatched by the middleware to ask the reducer to save the article
 * for NosConseilsArticlePage in the state
 * @returns {Object} action
 * @param {Array} table containing article object
 */
export function actionSaveArticle(article) {
  return {
    type: SAVE_ARTICLE,
    payload: article,
  };
}

//! action creators for blog theme page

/**
 * Action dispatched to save the id of the theme in question to the state
 * @param {Number} themeId
 * @returns {Object} action
 */
export function actionPutThemeIdInState(themeId) {
  return {
    type: PUT_THEME_ID_IN_STATE,
    payload: themeId,
  };
}

/**
 * Action dispatched on the first render of NosConseilsThemePage to ask middleware
 * to fetch articles for display by theme
 * @returns {Object} action
 */
export function actionFetchArticlesThemePage(themeId) {
  return {
    type: FETCH_ARTICLES_THEME_PAGE,
    payload: themeId,
  };
}

/**
 * Action dispatched by the middleware to ask the reducer to save the list of
 * articles for NosConseilsThemePage in the state
 * @returns {Object} action
 * @param {Array} table containing article objects
 */
export function actionSaveArticlesThemePage(articles) {
  return {
    type: SAVE_ARTICLES_THEME_PAGE,
    payload: articles,
  };
}

//! action creators for the loader

/**
 * Action sent to the reducer to set isLoading to false
 * @returns {Object} action
 */
export function actionSetLoaderToFalse() {
  return {
    type: SET_LOADER_TO_FALSE,
  };
}

/**
 * Action sent to the reducer to set isLoadingThemePage to false
 * @returns {Object} action
 */
export function actionSetLoaderThemePageToFalse() {
  return {
    type: SET_LOADER_THEME_PAGE_TO_FALSE,
  };
}

/**
 * Action sent to the reducer to set isLoadingArticlePage to false
 * @returns {Object} action
 */
export function actionSetArticlePageToFalse() {
  return {
    type: SET_LOADER_ARTICLE_PAGE_TO_FALSE,
  };
}

//! action creators for errors

/**
 * Action dispatched to the reducer to set the status code
 * @param {Number} status
 * @returns {Object} action
 */
export function actionSetBlogResponseStatus(status) {
  return {
    type: SET_BLOG_RESPONSE_STATUS,
    payload: status,
  };
}