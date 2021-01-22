import { createStore, combineReducers, applyMiddleware } from "redux";
import { createForms } from "react-redux-form";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { Campsites } from "./campsites";
import { Comments } from "./comments";
import { Partners } from "./partners";
import { Promotions } from "./promotions";
import { InitialFeedback } from "./forms";
import { composeWithDevTools } from "redux-devtools-extension";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      campsites: Campsites,
      comments: Comments,
      partners: Partners,
      promotions: Promotions,
      ...createForms({
        feedbackForm: InitialFeedback,
      }),
    }),
    composeWithDevTools(applyMiddleware(thunk))
  );

  return store;
};
