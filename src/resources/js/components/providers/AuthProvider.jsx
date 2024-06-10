import React, { Fragment, useEffect } from 'react';

const AuthProvider = ({ auth }) => {

  useEffect(() => {
    if (auth) {
      setUserInfo(auth);
    }
  }, [auth]);

  return (
    <Fragment />
  );
};

export default AuthProvider;