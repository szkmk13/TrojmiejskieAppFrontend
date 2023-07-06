import * as Yup from "yup";

export const addmeetingschema = Yup.object().shape({
    participants: Yup.array().min(3, "Wybierz minimum 3 osoby"),
    who_drink: Yup.array(),
    place: Yup.string(),
    date: Yup.date(),
    kasyno: Yup.boolean(),
    pizza: Yup.boolean(),
  });