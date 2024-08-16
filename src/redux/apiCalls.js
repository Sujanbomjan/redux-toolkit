import axios from "axios";
import { updateStart, updateError, updateSuccess } from "./userSlice";
export const updateUser = async (user, dispatch) => {
  dispatch(updateStart());
  try {
    const res = await axios.post(
      "http://localhost:8800/api/users/12/update",
      user
    );
    dispatch(updateSuccess(res.data));
  } catch (err) {
    console.log("err", err);
    dispatch(updateError());
  }
};
