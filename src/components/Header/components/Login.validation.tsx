import * as Yup from "yup";

export const loginschema = Yup.object().shape({
    username: Yup.string().required(),
    password: Yup.string().required(),
  });