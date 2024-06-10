import { enqueueSnackbar } from 'notistack';

const useSnackbar = () => {

  const showSnackbar = (message, variant = 'default') => {
    enqueueSnackbar(message, { variant });
  };

  const success = (message) => {
    showSnackbar(message, 'success');
  };

  const error = (message) => {
    showSnackbar(message, 'error');
  };

  const warning = (message) => {
    showSnackbar(message, 'warning');
  };

  const info = (message) => {
    showSnackbar(message, 'info');
  };

  return {
    success,
    error,
    warning,
    info,
    showSnackbar,
  };
};

export default useSnackbar;
