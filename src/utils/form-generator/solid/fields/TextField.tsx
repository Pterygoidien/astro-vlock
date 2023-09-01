import type {Component } from "solid-js";


const TextField: Component<TextInputProps> = (props) => {
    
    return (
        <>
            <input
                type="text"
                name={props.name}
                id={props.name}
                required={props.parameters?.required || false}
                autocomplete={props.autocomplete ? props.autocomplete : "off"}
                class={props.class}
                minlength={props.parameters?.minlength}
                maxlength={props.parameters?.maxlength}
                pattern={props.parameters?.pattern}
            />
        </>
                
    )
}

interface TextInputProps  {
    name: string;
    autocomplete?: string;
    class?: string;
    parameters: {
        required?: boolean;
        minlength?: number;
        maxlength?: number;
        pattern?: string;
    }
}
export default TextField;

