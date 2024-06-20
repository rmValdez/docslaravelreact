import React, { Fragment, Suspense, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Loader } from './appTools/loaders/Loader';
import RootProvider from './providers/RootProvider';
import { ApplicationRoutes } from './routes/Routes';
// import AuthProvider from './components/providers/AuthProvider';
import { useUserInfo } from './states/store';

const queryClient = new QueryClient();

const Index = ({ auth, permission = [], role = [], department }) => {
  const [, { setUserInfo }] = useUserInfo();

  useEffect(() => {
    if (auth) {
      setUserInfo(auth, permission, role, department);
    }
  }, [auth]);

  return (
    <BrowserRouter>
      <RootProvider>
        <QueryClientProvider client={queryClient}>
          <Suspense fallback={<Loader />}>
            <ApplicationRoutes />
          </Suspense>
        </QueryClientProvider>
      </RootProvider>
    </BrowserRouter>
  );
};

const MainApp = (props) => (
  <Fragment>
    {/* <AuthProvider auth={props.auth} /> */}
    <Index {...props} />
  </Fragment>
);
export default MainApp;

if (document.getElementById('app')) {
  const container = document.getElementById('app');
  const appData = Object.assign({}, container.dataset);
  const parseInfo = new Object();
  Object.keys(appData).forEach((appKey) => {
    parseInfo[appKey] = JSON.parse(appData[appKey]);
  });
  const root = createRoot(container);
  root.render(<MainApp {...parseInfo} />);
}
