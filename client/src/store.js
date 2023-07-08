import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./slices/UserSlice";
export default configureStore({
  reducer: {
    userStoreData: todoSlice,
  },
});
