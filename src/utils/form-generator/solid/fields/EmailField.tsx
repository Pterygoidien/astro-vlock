import type {Component } from "solid-js";


const EmailField: Component<EmailInputProps> = (props) => {
    
    return (
        <>
            <input
                    
                type="email"
                name={props.name || "email"}
                id={props.name || "email"}
                required={props.parameters?.required || false}
                autocomplete={props.autocomplete ? props.autocomplete : "email"}
                class={props.class}
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            />
        </>
                
    )
}

interface EmailInputProps  {
    name: string;
    autocomplete?: string;
    class?: string;
    parameters: {
        required?: boolean;
    }
}
export default EmailField;

