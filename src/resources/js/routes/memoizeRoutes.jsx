import { PAGE_LIST_ONE } from './route/ComponentOnePage';
import { PAGE_LIST_TWO } from './route/ComponentTwoPage';
import { useMemo } from 'react';

const ROUTE_LIST = [ ...PAGE_LIST_ONE, ...PAGE_LIST_TWO];

export default MEMOIZE_ROUTES = useMemo(()=> {
  return (
        <Routes>
          <Route element={<Base />}>
            {
              ROUTE_LIST.map((page, idx) => {
                if (!page?.component) return;
                  return (
                    <Route
                      key={`${page.key}-${idx}`}
                      path={page.path}
                      element={page.component}
                    />
                  );
              })
            }
          </Route>
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      );

},[ROUTE_LIST]);