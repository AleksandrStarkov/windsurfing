import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';

import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// interface LinkTabProps {
//   label?: string;
//   href?: string;
//   value?: any;
// }
interface AuthProps {
  isAuth: boolean;
  checkAuth(data: boolean): void;
}

// function LinkTab(props: LinkTabProps) {
//   const navigate = useNavigate();

//   const handleClick = (
//     event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
//   ) => {
//     event.preventDefault();
//     if (props.href) {
//       navigate(props.href);
//     }
//   };
//   return (
//     <Tab
//       component={NavLink}
//       to={props.href || ''}
//       onClick={handleClick}
//       {...props}
//     />
//   );
// }

export default function NavTabs(props: AuthProps) {
  const { t } = useTranslation();
  const [value, setValue] = React.useState(() => {
    const savedValue = localStorage.getItem('selectedTab');
    return savedValue ? parseInt(savedValue) : 0;
  });
  // const navigate = useNavigate();

  // const handleClick = (
  //   event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  // ) => {
  //   event.preventDefault();
  //   if (href) {
  //     navigate(href);
  //   }
  // };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  React.useEffect(() => {
    localStorage.setItem('selectedTab', value.toString());
  }, [value]);

  return (
    <Box sx={{ width: '100%', mr: '20px' }}>
      <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
        {/* <LinkTab label={t('navbar.home')!} href="/" />
        <LinkTab label={t('navbar.about')!} href="/about" />
        <LinkTab label={t('navbar.training')!} href="/training" />
        <LinkTab label={t('navbar.news')!} href="/news" />
        <LinkTab label={t('navbar.store')!} href="/store" />
        <LinkTab label={t('navbar.post')!} href="/post" /> */}
        <Link
          style={{
            textDecoration: 'none',
            color: ' #000000',
            fontFamily: ' "Roboto","Helvetica","Arial",sans-serif',
            fontWeight: '500',
            fontSize: '0.875rem',
            lineHeight: '1.75',
            letterSpacing: '0.02857em',
          }}
          to="/"
        >
          {t('navbar.home')}
        </Link>
        <Link
          style={{
            textDecoration: 'none',
            color: ' #000000',
            fontFamily: ' "Roboto","Helvetica","Arial",sans-serif',
            fontWeight: '500',
            fontSize: '0.875rem',
            lineHeight: '1.75',
            letterSpacing: '0.02857em',
          }}
          to="/about"
        >
          {t('navbar.about')}
        </Link>
        <Link
          style={{
            textDecoration: 'none',
            color: ' #000000',
            fontFamily: ' "Roboto","Helvetica","Arial",sans-serif',
            fontWeight: '500',
            fontSize: '0.875rem',
            lineHeight: '1.75',
            letterSpacing: '0.02857em',
          }}
          to="/training"
        >
          {t('navbar.training')}
        </Link>
        <Link
          style={{
            textDecoration: 'none',
            color: ' #000000',
            fontFamily: ' "Roboto","Helvetica","Arial",sans-serif',
            fontWeight: '500',
            fontSize: '0.875rem',
            lineHeight: '1.75',
            letterSpacing: '0.02857em',
          }}
          to="/news"
        >
          {t('navbar.news')}
        </Link>{' '}
        <Link
          style={{
            textDecoration: 'none',
            color: ' #000000',
            fontFamily: ' "Roboto","Helvetica","Arial",sans-serif',
            fontWeight: '500',
            fontSize: '0.875rem',
            lineHeight: '1.75',
            letterSpacing: '0.02857em',
          }}
          to="/store"
        >
          {t('navbar.store')}
        </Link>
        <Link
          style={{
            textDecoration: 'none',
            color: ' #000000',
            fontFamily: ' "Roboto","Helvetica","Arial",sans-serif',
            fontWeight: '500',
            fontSize: '0.875rem',
            lineHeight: '1.75',
            letterSpacing: '0.02857em',
          }}
          to="/post"
        >
          {t('navbar.post')}
        </Link>
      </Tabs>
    </Box>
  );
}
