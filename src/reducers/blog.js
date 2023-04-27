import {
    PUT_ARTICLE_ID_IN_STATE,
    PUT_THEME_ID_IN_STATE,
    SAVE_ARTICLE,
    SAVE_ARTICLES_BLOG_HOME,
    SAVE_ARTICLES_THEME_PAGE,
    SAVE_THEMES_BLOG_HOME,
    SET_BLOG_RESPONSE_STATUS,
    SET_LOADER_ARTICLE_PAGE_TO_FALSE,
    SET_LOADER_THEME_PAGE_TO_FALSE,
    SET_LOADER_TO_FALSE,
  } from '../actions/blog';
  
  export const initialState = {
    articlesHome: [],
    articlesByTheme: [],
    themesHome: [],
    themeId: null,
    articleId: null,
    article: [],
    isLoading: true,
    isLoadingThemePage: true,
    isLoadingArticlePage: true,
    blogResponseStatus: null,
  };
  
  const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case SAVE_ARTICLES_BLOG_HOME:
        return {
          ...state,
          articlesHome: action.payload,
        };
      case SAVE_THEMES_BLOG_HOME:
        return {
          ...state,
          themesHome: action.payload,
        };
      case SAVE_ARTICLE:
        return {
          ...state,
          article: action.payload,
        };
      case SAVE_ARTICLES_THEME_PAGE:
        return {
          ...state,
          articlesByTheme: action.payload,
        };
      case SET_LOADER_TO_FALSE:
        return {
          ...state,
          isLoading: false,
        };
      case SET_LOADER_THEME_PAGE_TO_FALSE:
        return {
          ...state,
          isLoadingThemePage: false,
        };
      case SET_LOADER_ARTICLE_PAGE_TO_FALSE:
        return {
          ...state,
          isLoadingArticlePage: false,
        };
      case PUT_ARTICLE_ID_IN_STATE:
        return {
          ...state,
          articleId: action.payload,
        };
      case PUT_THEME_ID_IN_STATE:
        return {
          ...state,
          themeId: action.payload,
        };
      case SET_BLOG_RESPONSE_STATUS:
        return {
          ...state,
          blogResponseStatus: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default reducer;