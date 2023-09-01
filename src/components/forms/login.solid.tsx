import { createForm, valiForm, type SubmitHandler, FormError } from '@modular-forms/solid';
import { type Input, email, maxLength, minLength, object, string } from 'valibot';
import { createSignal } from 'solid-js';
import { TextInput } from '../../utils/modular-form/input-components/TextInputComponent';
import { PasswordInput } from '../../utils/modular-form/input-components/PasswordInputComponent';

const LoginSchema = object({
    email: string([
        minLength(1, 'Please enter your email.'),
        email('The email address is badly formatted.'),
    ]),
    password: string()
});

type TLoginForm = Input<typeof LoginSchema>;

export default function LoginForm() {
    const [signUpForm, { Form, Field }] = createForm<TLoginForm>({
        validate: valiForm(LoginSchema),
    });

    const handleSubmit: SubmitHandler<TLoginForm> = async (values, event) => {
        event.preventDefault();

        try {
            const request = await fetch('http://127.0.0.1:8000/api/auth/token/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
            })
            const response = await request.json();

            if (response.access && response.refresh) {
                sessionStorage.setItem('access_token', response.access);
                sessionStorage.setItem('refresh_token', response.refresh);
                const expires = new Date(Date.now() + 30 * 60 * 1000); // 30 minutes
                const cookieValue = encodeURIComponent(response.access);
                document.cookie = `jwtToken=${cookieValue}; HttpOnly; Secure; SameSite=Strict; expires=${expires.toUTCString()}`;
                
                //redirect with native js
                window.location.href = '/';
            }

            if (!request.ok && response) throw new FormError<TLoginForm>('Une erreur est survenue pendant la connexion', response);
        } catch (error) {
            console.log(error)
            throw new FormError('An error occured, please try again later.');   
        }
    }

  return (
      <Form class="flex flex-col gap-3" onSubmit={handleSubmit}>
            <div class="errors">
                {signUpForm?.response && signUpForm.response.message}
            </div>
            <Field name="email">
                {(field, props) => (
                    <TextInput
                        {...props}
                        name="email"
                        type="email"
                        label="Email"
                        placeholder="Email"
                        value={field.value}
                      error={field.error}
                      autocomplete='email'
                      required
                    />
                )}
          </Field>
          <Field name="password">
                {(field, props) => (
                    <PasswordInput
                    {...props}
                    name="password"
                    label="Mot de passe"
                    value={field.value}
                    error={field.error}
                    placeholder='Mot de passe'
                      autocomplete='current-password'
                      id='current-password'
                    required
                    
                />
                )}
             </Field>
       
      <button type="submit" class="btn bg-tertiary rounded-sm p-4">S'enregistrer</button>
    </Form>
  );
}

