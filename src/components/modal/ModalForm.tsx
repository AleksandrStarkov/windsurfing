import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

import { useSpring, animated } from '@react-spring/web';
import SignIn from '../Form/SignIn';
import { logoutUser } from '../../redux/auth/authSlice';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

interface FadeProps {
  children: React.ReactElement;
  in?: boolean;
  onClick?: any;
  onEnter?: (node: HTMLElement, isAppearing: boolean) => void;
  onExited?: (node: HTMLElement, isAppearing: boolean) => void;
  ownerState?: any;
}
interface AuthProps {
  isAuth: boolean;
  checkAuth(data: boolean): void;
  isOpen: boolean;
  closeModal(data: boolean): void;
  // checkAuth(data: boolean): void;
  // closeModal(data: boolean): void;
}

const Fade = React.forwardRef<HTMLDivElement, FadeProps>(function Fade(
  props,
  ref,
) {
  const {
    children,
    in: open,
    onClick,
    onEnter,
    onExited,
    ownerState,
    ...other
  } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter(null as any, true);
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited(null as any, true);
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {React.cloneElement(children, { onClick })}
    </animated.div>
  );
});

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',

  width: '400px',
  height: '440px',
  background: '#9124e775',
  border: '2px solid rgba(255, 255, 255, 0.5)',
  borderRadius: '20px',
  backdropFilter: 'blur(20px)',
  boxShadow: '0 0 30px rgba(0, 0, 0, 0.5)',
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
};

export default function ModalForm(props: AuthProps) {
  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  const { t } = useTranslation();
  //  const classes = useStyles();

  if (!props.isOpen) {
    return null;
  }

  return (
    <Modal
      aria-labelledby="spring-modal-title"
      aria-describedby="spring-modal-description"
      open={props.isOpen}
      onClose={props.closeModal}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          TransitionComponent: Fade,
        },
      }}
    >
      <Fade in={props.isOpen}>
        <Box sx={style}>
          <SignIn checkAuth={props.checkAuth} />
        </Box>
      </Fade>
    </Modal>
  );
}
