import * as React from 'react';
import {
  AppBar,
  Toolbar,
  Stack,
  // Link,
  Box,
  Button,
  Typography,
  Avatar,
} from '@mui/material';
import { ImgClose } from './NavBar.styled';

import wind from '../../assets/icons/Wind.png';
import NavTabs from './NavTabs';

import ModalForm from '../modal/ModalForm';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { logoutUser } from '../../redux/auth/authSlice';
import { NavLink, Link } from 'react-router-dom';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

interface AuthProps {
  isAuth: boolean;
  checkAuth(data: boolean): void;
}

function NavBar(props: AuthProps) {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    dispatch(
      logoutUser({
        login: null,
        password: null,
      }),
    );

    setIsOpen(false);
    props.checkAuth(false);
  };

  React.useEffect(() => {
    if (props.isAuth) {
      setIsOpen(false);
    }
  }, [props.isAuth]);

  return (
    <>
      <AppBar color="transparent" style={{}}>
        <Toolbar
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            minHeight: '56px',
            height: '64px',
            color: 'rgb(33, 43, 54)',
            backgroundColor: 'white',
            transition:
              'height 250ms cubic-bezier(0.4, 0, 0.6, 1) 0ms, background-color 250ms cubic-bezier(0.4, 0, 0.6, 1) 0ms',
            backdropFilter: 'blur(6px)',
            justifyContent: 'space-between',
          }}
        >
          <Link
            to="/"
            // underline="none"
            style={{ display: 'flex', flexDirection: 'row' }}
          >
            <ImgClose src={wind} alt="" />
          </Link>
          <Stack direction="row" spacing={2} style={{ alignItems: 'center' }}>
            <Box sx={{}}>
              <NavTabs isAuth={props.isAuth} checkAuth={props.checkAuth} />
            </Box>

            <LanguageSwitcher />

            {!props.isAuth ? (
              <Button variant="text" color="inherit" onClick={openModal}>
                {t('navbar.logIn')}
              </Button>
            ) : (
              <Button variant="text" color="inherit" onClick={closeModal}>
                {t('navbar.logOut')}
              </Button>
            )}
            <Box style={{ display: 'flex', alignItems: 'center' }}>
              <NavLink
                to="profile"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  border: '2px solid rgba(14, 1, 1, 0.5)',
                  borderRadius: '5px',
                  background: '#9324e746',
                  padding: '2px',
                }}
              >
                {!props.isAuth ? (
                  <Avatar alt="?" src="" />
                ) : (
                  <Avatar alt="avatar" src={wind} />
                )}
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: '12px',
                    color: '#000000',
                    fontWeight: '300',
                    textDecoration: 'none',
                  }}
                >
                  {t('navbar.profile')}
                </Typography>
              </NavLink>
            </Box>
          </Stack>
        </Toolbar>
      </AppBar>
      <ModalForm
        isOpen={isOpen}
        checkAuth={props.checkAuth}
        closeModal={closeModal}
        isAuth={props.isAuth}
      />
    </>
  );
}
export default NavBar;
