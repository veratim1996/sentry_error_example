import { createAction } from "redux-actions";

const namespace = "main";

export const fetchData = createAction(`@@${namespace}/FETCH_DATA`);
