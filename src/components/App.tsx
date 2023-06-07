// import { createTheme, ThemeProvider } from '@mui/material';
import { Routes, Route, Navigate } from 'react-router-dom';
// import CssBaseline from '@mui/material/CssBaseline';
import * as React from 'react';

import Hero from './test/Hero';
import Training from './test/Training';
import About from './test/About';
import Store from './test/Store';

import Post from './test/Post';
import News from './test/News';
import { useState } from 'react';
import NavBar from './NavBar/NavBar';
import Profile from './test/Profile';

// const darkTheme = createTheme({
//   palette: {
//     mode: 'light',
//   },
// });

const App: React.FC = () => {
  const [isAuth, setIsAuth] = useState<boolean>(false);

  const checkAuth = (data: boolean) => {
    setIsAuth(data);
  };

  React.useEffect(() => {
    const auth = JSON.parse(localStorage.getItem('persist:auth') || '');

    if (auth.login !== 'null') {
      setIsAuth(true);
    }
  }, []);

  return (
    <>
      {/* <ThemeProvider theme={darkTheme}> */}
      {/* <CssBaseline /> */}
      <NavBar isAuth={isAuth} checkAuth={checkAuth} />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="About" element={<About />} />
        <Route path="Training" element={<Training />} />
        <Route path="News" element={<News />} />
        <Route path="Store" element={<Store />} />
        <Route path="Post" element={<Post />} />

        {isAuth && <Route path="profile" element={<Profile />} />}

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      {/* </ThemeProvider> */}
    </>
  );
};

export default App;

// const [mode, setMode] = useState('light');
// const darkTheme = createTheme({
//   palette: {
//     mode: mode,
//   },
// });
// const [mode, setMode] = React.useState<'light' | 'dark'>('light');
// const colorMode = React.useMemo(
//   () => ({
//     // The dark mode switch would invoke this method
//     toggleColorMode: () => {
//       setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
//     },
//   }),
//   [],
// );
