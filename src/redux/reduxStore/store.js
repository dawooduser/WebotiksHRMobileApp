import { configureStore } from '@reduxjs/toolkit';
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE, } from 'redux-persist';
import rootReducer from '../combineReducers';
import reduxMMKVStorage from '../mmkvStorage/mmkvStorage'
import { encryptTransform } from 'redux-persist-transform-encrypt';


const persistConfig = {
    key: 'root',
    version: 1,
    storage: reduxMMKVStorage,
};


const persistedReducer = persistReducer(persistConfig, rootReducer);


const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
        immutableCheck: false,
        serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
export default store;
// store.subscribe(() => {
//     console.log("current state", store.getState());
//   });
