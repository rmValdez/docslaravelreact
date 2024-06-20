import React, { lazy, useEffect } from 'react';
import { Route, Routes, } from 'react-router-dom';
import Base from '../appTools/layouts/Base';
const PageNotFound = lazy(() => import('../componentHelper/pageNotFound/PageNotFound'));
import { MEMOIZE_PAGE_LIST } from './memoizeRoutes';
import { useUserInfo } from '../states/store';
import AuthenticationPage from '../auth/AuthenticationPage';

export const ApplicationRoutes = () => {
  const [{userInfo, permissions}, { setUserInfo }] = useUserInfo();
  const PAGE_LIST = MEMOIZE_PAGE_LIST();  

  const checkUser = async () => {
      // if (location.pathname !== "/login" && !location.pathname.startsWith("/forgot-password/")) {
      //   window.location.href = "/login";
      // }
  };

  useEffect(()=>{
    if(Object.entries(userInfo ?? {}).length === 0) {
      // checkUser();
      console.log('Un-authenticated');
    }
  },[userInfo]);
  
  return (
    <Routes>
      <Route path={'/login'} element={<AuthenticationPage />} />

      <Route element={<Base/>}>
        {
          PAGE_LIST.map((page, idx) => {
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
};