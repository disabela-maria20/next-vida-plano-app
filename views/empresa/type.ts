export const fieldNames = [
  'name',
  'email',
  'phone',
  'company',
  'position',
  'department',
  'segment',
  'employees',
] as const;

export type FieldName = (typeof fieldNames)[number];

export interface Validation {
  required?: string;
  minLength?: string;
  invalid?: string;
  numeric?: string;
  min?: string;
}

export interface FormField {
  name: FieldName;
  label: string;
  placeholder: string;
  validation: Validation;
}
