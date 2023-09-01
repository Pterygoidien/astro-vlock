import {Component, createSignal } from "solid-js";

const PasswordField: Component<PasswordInputProps> = (props) => {
    
    const [showPassword, setShowPassword] = createSignal(false);
    return (
        <div class={props.class || "flex flex-col"}>
        <input
            type={showPassword() ? "text" : "password"}
            name={props.name || "password"}
            id={props.name || "password"}
            minlength={props.parameters?.minlength || 5}
            maxlength={props.parameters?.minlength || 90}
            required={props.parameters?.required || false}
            autocomplete={props.autocomplete? props.autocomplete : "new-password"}
            class="flex-1"

            />
            <button type="button" onClick={() => setShowPassword(!showPassword())}>
                {showPassword() ? <svg class="_ufjrdd" viewBox="0 0 48 48" role="img" aria-labelledby="Eye58a22615-3dd6-4988-9030-7dc0a420568c Eye58a22615-3dd6-4988-9030-7dc0a420568cDesc" xmlns="http://www.w3.org/2000/svg" style="fill: rgb(54, 59, 66); height: 24px; width: 24px;"><title id="Eye58a22615-3dd6-4988-9030-7dc0a420568c">Eye</title><g transform="translate(0.000000, 9.000000)" role="presentation"><path d="M2.45946122,15 C4.52737959,17.618 13.3868082,28 23.7459918,28 C34.1061551,28 42.9655837,17.618 45.033502,15 C42.9655837,12.382 34.1061551,2 23.7459918,2 C13.3868082,2 4.52737959,12.382 2.45946122,15 M23.7459918,30 C10.9554612,30 0.849991837,16.181 0.426808163,15.593 L-0.000293877551,15 L0.426808163,14.407 C0.849991837,13.819 10.9554612,0 23.7459918,0 C36.537502,0 46.6429714,13.819 47.0661551,14.407 L47.4932571,15 L47.0661551,15.593 C46.6429714,16.181 36.537502,30 23.7459918,30"></path><path d="M23.7464816,9 C20.5050122,9 17.8689306,11.692 17.8689306,15 C17.8689306,18.308 20.5050122,21 23.7464816,21 C26.987951,21 29.6240327,18.308 29.6240327,15 C29.6240327,11.692 26.987951,9 23.7464816,9 M23.7464816,23 C19.425502,23 15.9097469,19.411 15.9097469,15 C15.9097469,10.589 19.425502,7 23.7464816,7 C28.0674612,7 31.5832163,10.589 31.5832163,15 C31.5832163,19.411 28.0674612,23 23.7464816,23"></path></g></svg>
              : <svg class="_ufjrdd" viewBox="0 0 52 48" role="img" aria-labelledby="Hidden0aa9e6d7-f8d1-4fd4-f1a7-408bba4fa870 Hidden0aa9e6d7-f8d1-4fd4-f1a7-408bba4fa870Desc" xmlns="http://www.w3.org/2000/svg" style="fill: rgb(54, 59, 66); height: 24px; width: 24px;"><title id="Hidden0aa9e6d7-f8d1-4fd4-f1a7-408bba4fa870">Hidden</title><path d="M16.977 29.629A9 9 0 0 1 29.63 16.978l5.684-5.685a22.562 22.562 0 0 0-1.378-.583C31.133 9.626 27.935 9 24 9c-6.693 0-12.34 2.35-16.616 6.292C4.14 18.282 2 22.069 2 24c0 2.612 3.755 8.537 8.858 11.748l6.12-6.119zm1.425-1.425l9.803-9.801a7 7 0 0 0-9.802 9.801zM36.814 9.792l7.498-7.5a1 1 0 0 1 1.415 1.415L30.66 18.777 18.774 30.66 3.727 45.707a1 1 0 1 1-1.415-1.414l7.099-7.098C3.95 33.586 0 27.262 0 24c0-2.577 2.411-6.846 6.029-10.18C10.664 9.55 16.789 7 24 7c4.188 0 7.63.673 10.657 1.845.78.302 1.37.564 2.157.947zm11.185 14.24c-.02 2.581-2.425 6.828-6.028 10.147C37.336 38.45 31.211 41 24 41c-2.56 0-5.246-.368-7.287-1.016a1 1 0 1 1 .605-1.906C19.151 38.66 21.634 39 24 39c6.693 0 12.34-2.35 16.616-6.291C43.86 29.719 46 25.932 46 24v-.025c-.015-1.962-1.793-5.448-4.695-8.254a1 1 0 1 1 1.39-1.438C45.97 17.45 48 21.443 48 24v.033zm-16.997-.094a1 1 0 1 1 1.996.125 9.55 9.55 0 0 1-8.936 8.935 1 1 0 0 1-.124-1.996 7.55 7.55 0 0 0 7.064-7.064z" role="presentation"></path></svg>   
           }
             </button>
        </div>
    )
}

interface PasswordInputProps  {
    name: string;
    parameters?: {
        minlength?: number;
        maxlength?: number;
        required?: boolean;
    };
    autocomplete?: string;
    class?: string;
}

export default PasswordField;