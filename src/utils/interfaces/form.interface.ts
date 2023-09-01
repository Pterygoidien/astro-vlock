export interface IAPIForm {
  model?: string;
  fields: IAPIField[];
}

export interface IAPIField {
  name: string;
  type: string;
  label: string;
  help_text?: string;
  required?: boolean;
  widget?: string;
  widget_attrs?: {
    maxlength?: number;
    minlength?: number;
    autofocus?: boolean;
    autocomplete?: string;
    placeholder?: string;
  };
  choices?: string[][];
}
