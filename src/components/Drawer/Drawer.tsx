import { createPortal } from 'react-dom';

import { useMountTransition } from '@/hooks';

import * as S from './styles';
import useDrawer from './useDrawer';

import type { IDrawerProps } from './types';
const Drawer = ({
  isOpen,
  children,
  className,
  onClose,
  position = 'left',
  removeWhenClosed = true,
}: IDrawerProps) => {
  const isTransitioning = useMountTransition({ isMounted: isOpen, unmountDelay: 300 });
  const { isMounted, portalRootRef } = useDrawer({ isOpen });

  if (!isMounted || !portalRootRef?.current || (!isTransitioning && removeWhenClosed && !isOpen)) {
    return null;
  }

  return createPortal(
    <S.Wrapper
      aria-hidden={isOpen}
      isOpen={isOpen}
      position={position}
      className={className}
      isTransitioning={isTransitioning}
    >
      <S.Drawer position={position} role="dialog">
        {children}
      </S.Drawer>
      <S.Backdrop onClick={onClose} />
    </S.Wrapper>,
    portalRootRef.current,
  );
};

export default Drawer;
