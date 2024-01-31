import { useFormik } from 'formik';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';

import Alert from '@/components/ui/Alert';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import PasswordInput from '@/components/ui/PasswordInput';
import { AuthHelper } from '@/helpers';
import { useLogin } from '@/service/user';
import APP_ROUTES from '@/utils/routes';

type FormValues = {
  username: string;
  password: string;
};
const loginFormSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
});

const defaultValues = {
  username: 'mor_2314',
  password: '83r5^_',
};

const LoginForm = () => {
  const navigate = useNavigate();
  const { mutate: login, isLoading: loading } = useLogin();
  const [errorMsg, setErrorMsg] = useState('');

  function onSubmit({ username, password }: FormValues) {
    login(
      {
        username,
        password,
      },
      {
        onSuccess: (data) => {
          if (data?.token) {
            AuthHelper.setAuthCredentials(data?.token, null, {});
            navigate(APP_ROUTES.HOME);
            return;
          } else {
            setErrorMsg('Invalid Credentials');
          }
        },
        onError: () => {},
      },
    );
  }

  const { handleBlur, handleChange, handleSubmit, values, errors } = useFormik({
    onSubmit,
    initialValues: defaultValues,
    validationSchema: loginFormSchema,
  });

  return (
    <>
      <form onSubmit={handleSubmit} noValidate>
        <Input
          name="username"
          label={'Username'}
          value={values.username}
          error={errors.username}
          type="username"
          variant="outline"
          className="mb-4"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <PasswordInput
          label={'Password'}
          forgotPassHelpText={'Forgot Password?'}
          name="password"
          value={values.password}
          error={errors.password}
          variant="outline"
          className="mb-4"
          forgotPageLink="/forgot-password"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <Button className="w-full" loading={loading} disabled={loading}>
          Login
        </Button>

        {errorMsg ? (
          <Alert
            message={errorMsg}
            variant="error"
            closeable={true}
            className="mt-5"
            onClose={() => setErrorMsg('')}
          />
        ) : null}
      </form>
    </>
  );
};

export default function Login() {
  const navigate = useNavigate();
  const { token } = AuthHelper.getAuthCredentials();

  if (token) {
    //   if (isAuthenticated({ token, permissions })) {
    navigate(APP_ROUTES.HOME);
  }
  return (
    <div className="flex items-center justify-center h-screen bg-light sm:bg-gray-100">
      <div className="m-auto max-w-md w-full bg-light sm:shadow p-5 sm:p-8 rounded">
        <div className="flex justify-center mb-2">Patient Portal</div>
        <h3 className="text-center text-base italic text-body mb-6 mt-4">
          Login to your account
        </h3>
        <LoginForm />
      </div>
    </div>
  );
}
