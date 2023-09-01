export interface IFields {
    name: string;
    type: string;
    label?: string;
    placeholder?: string;
    required?: boolean;
    help_text?: string;
    value?: string;
    options?: string[][];
    autocomplete?: string;
    validation?: {
        minlength?: number; 
        maxlength?: number;
        pattern?: string;
    }
}