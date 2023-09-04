import * as Yup from "yup";

export const betschema = Yup.object().shape({
    amount: Yup.number().required().min(1),
    vote: Yup.boolean().required(),
    id: Yup.number().required(),
  });