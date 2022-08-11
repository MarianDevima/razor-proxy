import { useCallback, useState } from 'react';

const useTreeNode = () => {
  const [show, setShow] = useState(false);

  const toggleShow = useCallback(() => {
    setShow(!show);
  }, [show]);
  return { show, toggleShow };
};

export default useTreeNode;
