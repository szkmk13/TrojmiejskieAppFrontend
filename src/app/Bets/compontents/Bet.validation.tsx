import * as Yup from "yup";

export const betschema = Yup.object().shape({
    amount: Yup.number().required().min(10),
    vote: Yup.boolean().required(),
    bet_id: Yup.number().required(),
  });