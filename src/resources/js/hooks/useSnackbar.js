import { enqueueSnackbar } from 'notistack';

const useSnackbar = () => {
  const showSnackbar = (message, variant = 'default') => {
    enqueueSnackbar(message, { variant });
  };

  const createSnackbar = (variant) => (message) => showSnackbar(message, variant);

  return {
    showSnackbar,
    success: createSnackbar('success'),
    error: createSnackbar('error'),
    warning: createSnackbar('warning'),
    info: createSnackbar('info'),
  };
};

export default useSnackbar;
