import React, { lazy } from 'react';
import { Route, Routes, } from 'react-router-dom';
import Base from '../appTools/layouts/Base';
const PageNotFound = lazy(() => import('../appTools/PageNotFound'));
import { MEMOIZE_PAGE_LIST } from './memoizeRoutes';

export const ApplicationRoutes = () => {
  const PAGE_LIST = MEMOIZE_PAGE_LIST();
  return (
    <Routes>
      <Route element={<Base />}>
        {
          PAGE_LIST.map((page, idx) => {
            console.log('page?.component', page?.component);
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
      {/* <Route path='*' element={<PageNotFound />} /> */}
    </Routes>
  );
};