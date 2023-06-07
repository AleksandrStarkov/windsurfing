// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';

// import { useNavigate, NavLink } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';

// interface LinkProp {
//   label?: string;
//   href?: string;
//   value?: any;
//   to?: string;
// }
// interface AuthProps {
//   isAuth: boolean;
//   checkAuth(data: boolean): void;
// }

// function LinkTab(props: LinkProp) {
//   const navigate = useNavigate();

//   // const location = useLocation();

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
//       value={props.href || ''}
//       // aria-selected={location.pathname === (props.href || '')}
//       {...props}
//     />
//   );
// }

// export default function NavTabs(props: AuthProps) {
//   const { t } = useTranslation();
//   const [value, setValue] = React.useState(() => {
//     const savedValue = localStorage.getItem('selectedTab');
//     return savedValue ? parseInt(savedValue) : 0;
//   });

//   const handleChange = (event: React.SyntheticEvent, newValue: number) => {
//     setValue(newValue);
//   };

//   React.useEffect(() => {
//     localStorage.setItem('selectedTab', value.toString());
//   }, [value]);

//   return (
//     <Box sx={{ width: '100%', mr: '20px' }}>
//       <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
//         <LinkTab label={t('navbar.home')!} href="/" />
//         <LinkTab label={t('navbar.about')!} href="/about" />
//         <LinkTab label={t('navbar.training')!} href="/training" />
//         <LinkTab label={t('navbar.news')!} href="/news" />
//         <LinkTab label={t('navbar.store')!} href="/store" />
//         <LinkTab label={t('navbar.post')!} href="/post" />
//       </Tabs>
//     </Box>
//   );
// }

import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface LinkTabProps {
  label?: string;
  to?: any;
  component: React.ElementType; // Добавлено свойство component
}

interface AuthProps {
  isAuth: boolean;
  checkAuth(data: boolean): void;
}

function LinkTab(props: LinkTabProps) {
  const { component: Component, ...rest } = props; // Извлекаем свойство component

  return (
    <Tab
      component={Component} // Используем извлеченное свойство component
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
      }}
      {...rest} // Передаем остальные свойства
    />
  );
}

export default function NavTabs(props: AuthProps) {
  const [value, setValue] = React.useState(0);
  const { t } = useTranslation();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  React.useEffect(() => {
    localStorage.setItem('selectedTab', value.toString());
  }, [value]);

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
        {/* <LinkTab label="Page One" to="/drafts" component={NavLink} />
        <LinkTab label="Page Two" to="/trash" component={NavLink} />
        <LinkTab label="Page Three" to="/spam" component={NavLink} /> */}
        <LinkTab label={t('navbar.home')!} to="/" component={NavLink} />
        <LinkTab label={t('navbar.about')!} to="/about" component={NavLink} />
        <LinkTab
          label={t('navbar.training')!}
          to="/training"
          component={NavLink}
        />
        <LinkTab label={t('navbar.news')!} to="/news" component={NavLink} />
        <LinkTab label={t('navbar.store')!} to="/store" component={NavLink} />
        <LinkTab label={t('navbar.post')!} to="/post" component={NavLink} />
      </Tabs>
    </Box>
  );
}
