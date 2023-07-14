import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import allReducers from '../src/state/manager/reducer-manager';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: "main-root",
    storage
}

const persistedReducer = persistReducer(persistConfig, allReducers)

const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

const Persistor = persistStore(store)

export {Persistor};
export default store;