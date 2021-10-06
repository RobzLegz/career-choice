import axios from "axios"
import { setThemes } from "../../redux/slices/themeSlice";
import { THEME_BASE } from "../api/apiRoutes";

export const getThemes = (dispatch: any) => {
    axios.get(THEME_BASE).then((res) => {
        dispatch(setThemes(res.data));
    }).catch((err) => {
        console.log(err);
    });
};