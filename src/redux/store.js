import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { contactsReducer } from "./contactsSlice";
import { filtersReduser } from "./filtersSlice";


const persistConfig = {
    key: "contacts",
    storage,
    whitelist: ["items"],
};

const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);

export const store = configureStore({
    reducer: {
        contacts: persistedContactsReducer,
        filters: filtersReduser,
    },
    devTools: true,
});

export const persistor = persistStore(store);