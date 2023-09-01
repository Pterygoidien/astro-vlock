import { For, type Component } from "solid-js"


const SelectField: Component<SelectInputProps> = (props) => {

    const { name, options, class: className } = props;
    
    return (
        <select name={name} id={name} class={className}>
            <For each={options}>{(option, index) => (
                <option value={option[0]}>{option[1]}</option>
            )}</For>
        </select>
    )
}

interface SelectInputProps {
    name: string;
    options: string[][];
    class?: string;
}

export default SelectField;