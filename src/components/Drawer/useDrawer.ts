import { useCallback, useEffect, useRef, useState } from 'react';

import { isSSR } from '@/utils';

import type { IUseDrawer } from './types';

const createPortalRoot = () => {
  const drawerRoot = document.createElement('div');
  drawerRoot.setAttribute('id', 'drawer-root');
  return drawerRoot;
};

const useDrawer = ({ isOpen, onClose }: IUseDrawer) => {
  const [isMounted, setMounted] = useState(false);
  const portalRootRef = useRef<HTMLElement>();
  const bodyRef = useRef<HTMLElement>();

  const updatePageScroll = useCallback(() => {
    const body = bodyRef.current;
    if (body == null) {
      return;
    }

    if (isOpen) {
      body.style.overflow = 'hidden';
      return;
    }
    body.style.overflow = '';
  }, [isOpen]);

  useEffect(() => {
    updatePageScroll();
  }, [updatePageScroll]);

  useEffect(() => {
    portalRootRef.current = document?.getElementById('drawer-root') || createPortalRoot();
    bodyRef.current = document.body;
    const body = bodyRef.current;

    body.appendChild(portalRootRef.current);
    const portal = portalRootRef.current;
    setMounted(true);

    return () => {
      portal.remove();
      body.style.overflow = '';
    };
  }, []);

  const onKeyPress = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose?.();
      }
    },
    [onClose],
  );

  useEffect(() => {
    if (isSSR()) {
      return;
    }

    if (isOpen) {
      window.addEventListener('keyup', onKeyPress);
    }

    return () => {
      window.removeEventListener('keyup', onKeyPress);
    };
  }, [isOpen, onKeyPress]);

  return {
    isMounted,
    portalRootRef,
  };
};
export default useDrawer;
