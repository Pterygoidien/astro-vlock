import type {Component, JSX } from "solid-js";
import PasswordField from "./fields/PasswordField";



const PasswordInput= (props:any) => {
    return (
        <FieldWrapper label={props.label}>
            <PasswordField
                name={props.name}
                autocomplete={props.autocomplete}
                class={props.class}
                parameters={props.parameters}
            />
        </FieldWrapper>
    )
}


const FieldWrapper:Component<FieldWrapperProps> = (props) => {

    return (
        <>
            <fieldset>
                <legend>{props.label}</legend>
                {props.children}
            </fieldset>
        </>
    )

}

interface FieldWrapperProps {
    label: string;
    children?: JSX.Element;
}