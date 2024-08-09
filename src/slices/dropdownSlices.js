import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isOpen: false,
    dropdownValue: null
}

export const dropdownSlice = createSlice({
    name: 'dropdownValue',
    initialState,
    reducers: {
        setOpen: (state, action) => {
            state.isOpen = action.payload;
        },
        setDropdownValue: (state, action) => {
            state.dropdownValue = action.payload;
        }
    }
});

export const { setDropdownValue, setOpen } = dropdownSlice.actions;
export default dropdownSlice.reducer;