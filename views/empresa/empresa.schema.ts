import { z } from 'zod';
import { FieldName, FormField } from './type';

export const createEmpresaSchema = (fields: FormField[]) => {
  const getField = (name: FieldName): FormField => {
    const field = fields.find((f) => f.name === name);

    if (!field) {
      throw new Error(`Campo "${name}" não encontrado.`);
    }

    return field;
  };

  return z.object({
    name: z
      .string()
      .trim()
      .min(1, getField('name').validation.required)
      .min(3, getField('name').validation.minLength),

    email: z
      .string()
      .trim()
      .min(1, getField('email').validation.required)
      .email(getField('email').validation.invalid),

    phone: z
      .string()
      .trim()
      .min(1, getField('phone').validation.required)
      .regex(
        /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/,
        getField('phone').validation.invalid
      ),

    company: z.string().trim().min(1, getField('company').validation.required),

    position: z
      .string()
      .trim()
      .min(1, getField('position').validation.required),

    department: z
      .string()
      .trim()
      .min(1, getField('department').validation.required),

    segment: z.string().trim().min(1, getField('segment').validation.required),

    employees: z
      .string()
      .trim()
      .min(1, getField('employees').validation.required)
      .refine((value) => /^\d+$/.test(value), {
        message: getField('employees').validation.numeric,
      })
      .refine((value) => Number(value) > 0, {
        message: getField('employees').validation.min,
      }),
  });
};
