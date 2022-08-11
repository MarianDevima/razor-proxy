import { useEffect, useState } from 'react';

import type { IUseMountTransition } from './types';
const useMountTransition = ({ isMounted, unmountDelay }: IUseMountTransition) => {
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (isMounted && !isTransitioning) {
      setIsTransitioning(true);
    }
    if (!isMounted && isTransitioning) {
      timeoutId = setTimeout(() => setIsTransitioning(false), unmountDelay);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isMounted, isTransitioning, unmountDelay]);

  return isTransitioning;
};

export default useMountTransition;
