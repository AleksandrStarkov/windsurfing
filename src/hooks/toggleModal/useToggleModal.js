import { useState } from 'react';

export default function useToggleModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFooterOpen, setIsFooterOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const openFooterModal = () => {
    setIsFooterOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const closeFooterModal = () => {
    setIsFooterOpen(false);
  };

  const toggleModal = () => {
    setIsOpen(isOpen => !isOpen);
  };

  const toggleFooterModal = () => {
    setIsFooterOpen(isFooterOpen => !isFooterOpen);
  };

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      setIsOpen(() => {
        closeModal();
      });
      setIsFooterOpen(() => {
        closeModal();
      });
    }
  };

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      setIsOpen(() => {
        closeModal();
      });
      setIsFooterOpen(() => {
        closeModal();
      });
    }
  };

  return {
    isFooterOpen,
    isOpen,
    openModal,
    openFooterModal,
    closeModal,
    closeFooterModal,
    toggleModal,
    toggleFooterModal,
    handleKeyDown,
    handleBackdropClick,
  };
}
