import React, { useRef } from 'react';

const useScrollBottom = () => {

  const scrollRef = useRef(null);

  const scrollToBottom = () => {
    if(!scrollRef) return;

    const timeout = setTimeout(() => {
      if(scrollRef) {
        scrollRef?.current?.lastElementChild?.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
      }
      clearTimeout(timeout);
    }, 100);
  };

  return {
    scrollRef,
    scrollToBottom
  };
}

export default useScrollBottom;
