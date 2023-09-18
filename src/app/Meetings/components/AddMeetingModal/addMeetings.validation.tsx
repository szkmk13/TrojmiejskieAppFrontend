import * as Yup from "yup";

export const addmeetingschema = Yup.object().shape({
    participants: Yup.array().min(3, "Wybierz minimum 3 osoby"),
    who_drank: Yup.array(),
    place: Yup.string(),
    other_place: Yup.string().test(
      'not-jakie',
      'The value must be different from "jakie?"',
      function(value) {
        return value !== 'jakie?';
      }
    ),
    date: Yup.date(),
    kasyno: Yup.boolean(),
    pizza: Yup.boolean(),
  });

