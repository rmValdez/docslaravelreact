import { useEffect ,useState} from "react";
import { fetchTest} from "../../config/apisauce";

export const useTest = () => {
const [response,setResponse] = useState({ok: false, data: {}});
const [loading,setLoading] = useState(false);

const getApiTest = async() => {
  setLoading(true);
  const res = await fetchTest();
  if(res.ok){
    setResponse({...res, error: false})
  }else{
    setResponse({...res,error: true,})
  }
  setLoading(false);
};
useEffect(()=> {
  getApiTest();
},[]);
return {...response,loading: loading}
};

export const useUserStatistics = (params) => {
  const { error } = useSnackbar();
  const [isLoading, setIsLoading] = useState(false);
  const query = useQuery({
    queryKey: ['user-statistics'],
    queryFn: async () => {
      setIsLoading(true);
      const response = await fetchUserStatistics(params);
      setIsLoading(false);
      return handleResponse(response);
    },
    onError: (data) => {
      error(data?.message || data.problem);
    },
    retry: false,
    refetchOnWindowFocus: true,
  });
  return { ...query, isLoading };
};


export const useFetchPendingStats = (params) => {
  return useQuery({
    queryKey: [...data],
    queryFn: async () => {
      const response = await fetchAttendancePending(params);
      return handleResponse(response);
    },
    onError: (data) => {
      enqueueSnackbar(data?.message || 'Unable to fetch pending stats', { variant: 'error' });
    },
    retry: false,
    refetchOnWindowFocus: false,
  });
};

export const useMutation = ({ handleSuccess = () => { } }) => {
  return useMutation({
    mutationFn: async (values) => {
      const response = await generateAttendance(values);
      return handleResponse(response);
    },
    onError: (data) => {
      enqueueSnackbar(data?.message || 'Unable to generate attendance', { variant: 'error' });
    },
    onSuccess: (data, context) => {
      enqueueSnackbar(data?.message || 'Queued.', { variant: 'success' });
      handleSuccess(data, context);
    }
  });
};

export const useCashing = (date, userID, enabled = true) => {
  return useQuery({
    queryKey: [...data],
    queryFn: async () => {
      const res = await testApi();
      return handleResponse(res);
    },
    onError: (data) => {
      enqueueSnackbar(data?.message || 'Unable to fetch schedule', { variant: 'error' });
    },
    retry: false,
    refetchOnWindowFocus: false,
    enabled: Boolean(userID && enabled),
    staleTime: 300000, // 5 minutes
    cacheTime: 300000, // 5 minutes
  });
};
