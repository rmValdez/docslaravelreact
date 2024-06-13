import { PAGE_LIST_ONE } from './route/ComponentOnePage';
import { PAGE_LIST_TWO } from './route/ComponentTwoPage';
import { useMemo } from 'react';

export function MEMOIZE_PAGE_LIST() {

  return useMemo(() => {
    const ROUTE_LIST = [ ...PAGE_LIST_ONE, ...PAGE_LIST_TWO ];
      return ROUTE_LIST ?? [];
  }, [PAGE_LIST_ONE, PAGE_LIST_TWO]);
  
}