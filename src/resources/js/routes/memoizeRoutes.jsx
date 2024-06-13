import { PAGE_LIST } from './routes/routesOne';
import { useMemo } from 'react';

export function MEMOIZE_PAGE_LIST() {
  return useMemo(() => {
    const ROUTE_LIST = [ ...PAGE_LIST ];
      return ROUTE_LIST ?? [];
  }, [PAGE_LIST]);
  
}