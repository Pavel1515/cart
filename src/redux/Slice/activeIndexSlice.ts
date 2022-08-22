import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type CartSlise = {
    act: boolean;
    imageBig: number;
    active: number;
    count: number;
};

const initialState: CartSlise = {
    act: false,
    imageBig: 0,
    active: 0,
    count: 1,
};

export const activateIndexSlice = createSlice({
    name: "active",
    initialState,
    reducers: {
        setImageBig: (state, action: PayloadAction<number>) => {
            state.imageBig = action.payload;
        },
        setActive: (state, action: PayloadAction<number>) => {
            state.active = action.payload;
        },
        setCaount: (state, action: PayloadAction<number>) => {
            state.count = action.payload;
        },
        setAct: (state, action) => {
            state.active = action.payload;
        }
    },
});

export const {setImageBig, setActive, setCaount,setAct} = activateIndexSlice.actions;

export default activateIndexSlice.reducer;
