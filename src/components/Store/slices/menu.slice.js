import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    isShowMenu: true
}

const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {
        changeIsShowMenu: (state) => {
            state.isShowMenu =!state.isShowMenu
        }
    }
})
export const {
    changeIsShowMenu
} = menuSlice.actions

export default menuSlice.reducer