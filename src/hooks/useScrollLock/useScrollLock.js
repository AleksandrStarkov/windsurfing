const useScrollLock = () => {
  const lockScroll = () => (document.body.style.overflow = 'hidden');
  const UnlockScroll = () => (document.body.style.overflow = '');

  return { lockScroll, UnlockScroll };
};

export default useScrollLock;
