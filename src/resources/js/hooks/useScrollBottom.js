import { useRef } from 'react';

const useScrollBottom = () => {
  const scrollRef = useRef(null);

  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.lastElementChild?.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  };

  return { scrollRef, scrollToBottom };
};

export default useScrollBottom;