import Joi from "joi";
export const renameEventSchema = Joi.object({
  uiNameEn: Joi.string()
    .trim()
    .max(30)
    .required()
    .pattern(/^(?=.*[a-zA-Z])[a-zA-Z0-9\s]*$/)

    .messages({
      "string.base": "Name is required",
      "string.empty": "Name is required",
      "string.max": "Name cannot exceed {#limit} characters",
      "any.required": "Name is a required field",
      'string.pattern.base': 'Alphanumeric & Spaces allowed. Only numbers not allowed. Special characters not allowed.',
    }),
  uiNameAr: Joi.string()
    .trim()
    .max(30)
    .required()
    .pattern(/^(?=.*[\u0621-\u064A\u0660-\u0669])[\u0621-\u064A\u0660-\u06690-9\s]*$/)
    .messages({
      "string.base": "Name is required",
      "string.empty": "Name is required",
      "string.max": "Name cannot exceed {#limit} characters",
      "any.required": "Name is a required field",
      "string.pattern.base":
        "Alphanumeric & Spaces allowed. Only numbers not allowed. Special characters not allowed.",
    }),
});
