import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [
      { id: "id-1", name: "John Smith", number: "052-139-45-12" },
      { id: "id-2", name: "Emily Johnson", number: "053-123-14-78" },
      { id: "id-3", name: "Michael Brown", number: "054-365-85-96" },
      { id: "id-4", name: "Sarah Davis", number: "052-523-12-59" },
    ],
    },
    reducers: {
        addContact: (state, { payload }) => {
            state.items = [...state.items, payload];
        },
        deleteContact: (state, { payload }) => {
            state.items = state.items.filter(
                (contact) => contact.id !== payload
            );
        },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
export const selectContacts = (state) => state.contacts.items;