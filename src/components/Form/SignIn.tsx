import React from 'react';
import { Button, TextField, Typography } from '@mui/material';
// import { Box } from '@mui/system';
import { useState } from 'react';
import { Navigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import { loginUser } from '../../redux/auth/authSlice';

interface AuthProps {
  checkAuth: (data: boolean) => void;
}

const SignIn: React.FC<AuthProps> = props => {
  const dispatch = useDispatch();

  const { t } = useTranslation();
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === 'login') {
      setLogin(value.toLocaleLowerCase().trim());
    }

    if (name === 'password') {
      setPassword(value.toLocaleLowerCase().trim());
    }
  };

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (login === 'admin' && password === '12345') {
      dispatch(
        loginUser({
          login,
          password,
        }),
      );

      props.checkAuth(true);
      setLoggedIn(true);
    } else alert(`${t('registration.error')}`);

    reset();
  }

  if (loggedIn) {
    return <Navigate to="/profile" />;
  }
  console.log(loggedIn);
  const reset = () => {
    setLogin('');
    setPassword('');
  };

  return (
    <>
      <Typography variant="h4" component="div">
        LogIn
      </Typography>
      <Typography
        variant="subtitle1"
        gutterBottom
        component="div"
        style={{ color: ' rgb(180, 184, 193)' }}
      >
        To access
      </Typography>
      <form style={{ maxWidth: '360px' }} onSubmit={handleSubmit}>
        <TextField
          type="text"
          name="login"
          label="Login"
          autoComplete="no"
          onChange={handleChange}
          fullWidth={true}
          size="small"
          margin="normal"
          // error={!!errors.login?.message}
          // helperText={errors?.login?.message}
          variant="filled"
        />

        <TextField
          type="password"
          name="password"
          id="outlined-password-input"
          label="password"
          autoComplete="no"
          onChange={handleChange}
          // value={field.value}
          fullWidth={true}
          size="small"
          margin="normal"
          // error={!!errors?.password?.message}
          // helperText={errors?.password?.message}
          variant="filled"
        />

        <Button
          type="submit"
          variant="contained"
          fullWidth={true}
          disableElevation={true}
          sx={{
            marginTop: 2,
            backgroundColor: ' #430050',
          }}
          onSubmit={() => handleSubmit}
        >
          Login
        </Button>
      </form>

      <div style={{ marginTop: '8px' }}>
        <Typography variant="subtitle1" component="span">
          Don’t have an account?
        </Typography>
        <Typography variant="subtitle1" component="span" sx={{ color: 'blue' }}>
          Get started
        </Typography>
      </div>
    </>
  );
};
export default SignIn;
