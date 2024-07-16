export enum TFieldType {
  INPUT = "INPUT",
  TEXTAREA = "TEXTAREA",
  DATE = "DATE",
  SELECT = "SELECT",
  RADIO = "RADIO",
}

export interface TField {
  _id: string;
  label: string;
  type: TFieldType;
  required: boolean;
  options?: string[];
  defaultValue?: any;
}

export interface TForm {
  _id: string;
  title: string;
  description?: string;
  isPublic: boolean;
  fields: TField[];
  createdByUsername: string;
  updatedAt: string;
}
