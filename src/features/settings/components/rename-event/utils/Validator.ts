import { TValidationErrorMessage, TRenameVal } from "./Interfaces";

export const checkIsArabic = (str: string) : TValidationErrorMessage => {
  const arabicPattern = /^[\u0600-\u06FF]*$/;
  if (arabicPattern.test(str)) {
    return {
      msg: "Please enter name in English.",
      validated: false,
    };
  }
  return {
    msg: "Validated",
    validated: true,
  };
}
export const checkIsEnglish = (str: string) : TValidationErrorMessage => {
  const englishPattern = /^[a-zA-Z]*$/;
  if (englishPattern.test(str)) {
    return {
      msg: "Please enter name in Arabic.",
      validated: false,
    };
  }
  return {
    msg: "Validated",
    validated: true,
  };
}
