
import { createStore, createHook, createSubscriber } from 'react-sweet-state';

const Store = createStore({
  initialState: {
    userInfo: {},
    myDepartment: {},
    permissions: [],
    contentBoxHeight: 670,
    contentBoxWidth: 1254,
    tableHeight: 650,
    role: '',
    loaderState: false,
    showTransition: false,
    desktopMode: true,
    theme: 'light',
    drawerMode: 'open',
    currentBreakPoint: 'desktop',
    jobTitlesList: [],
    jobTypesList: [],
    jobStatusList: [],
    departmentList: [],
    employmentStatusList: [],
    employeeList: [],
  },
  actions: {
    hasPermission: (permission) => ({ getState }) => {
      return getState().permissions.includes(permission);
    },
    setCurrentBreakPoint: (breakpoint) => ({ setState }) => (
      setState({
        currentBreakPoint: breakpoint
      })
    ),
    setContentBoxHeight: (newHeight = 600) => ({ setState }) => (
      setState({
        contentBoxHeight: newHeight
      })),
    setContentBoxWidth: (newWidth) => ({ setState }) =>
      (
        setState({
          contentBoxWidth: newWidth,
        })
      ),
    setTableHeight: (height) => ({ setState }) => (setState({tableHeight: height,})),
    openLoader: () => ({ setState }) => {
      setState({ loaderState: true });
    },
    closeLoader: () => ({ setState }) => {
      setState({ loaderState: false });
    },

    logoutUser: () => async ({ setState }) => {
      setState({
        userInfo: {},
        permissions: [],
        role: '',
        myDepartment: {}
      });
    },
    setTheme: (value) => ({ setState }) => {
      setState({ theme: value });
    },
    setUserInfo: (info, permission, role, myDepartment) => ({ setState }) => {
      setState({
        userInfo: info,
        permissions: permission,
        role: role,
        myDepartment: myDepartment,
      });
    },
    setDrawerMode: (value) => ({ setState }) => {
      setState({ drawerMode: value });
    },
    setTransition: (transi) => ({ setState }) => {
      setState({ showTransition: transi });
    },
    setJobTitlesList: (jobTitle) => ({ setState }) => {
      setState({ jobTitlesList: jobTitle });
    },
    setJobTypesList: (jobType) => ({ setState }) => {
      setState({ jobTypesList: jobType });
    },
    setJobStatusList: (jobStatus) => ({ setState }) => {
      setState({ jobStatusList: jobStatus });
    },
    setEmploymentStatusList: (employmentStatus) => ({ setState }) => {
      setState({ employmentStatusList: employmentStatus });
    },
    setDepartmentList: (department) => ({ setState }) => {
      setState({ departmentList: department });
    },
    setEmployeeList: (employees) => ({ setState }) => {
      setState({ employeeList: employees });
    },
  }
});

const useStore = createHook(Store);

export const getUserInfo = (state) => ({
  userInfo: state.userInfo,
  permissions: state.permissions,
  role: state.role,
  myDepartment: state.myDepartment
});

export const getUIStore = (state) => ({
  loader: state.loaderState,
  theme: state.theme,
  contentBoxHeight: state.contentBoxHeight,
  contentBoxWidth: state.contentBoxWidth,
  tableHeight: state.tableHeight,
  drawerMode: state.drawerMode,
  currentBreakPoint: state.currentBreakPoint
});

export const getJobInfo = (state) => ({
  jobTitlesList: state.jobTitlesList,
  jobTypesList: state.jobTypesList,
  jobStatusList: state.jobStatusList,
  departmentList: state.departmentList,
  employmentStatusList: state.employmentStatusList
});

export const getGlobalList = (state) => ({
  departmentList: state.departmentList,
  employeeList: state.employeeList
});

export const getTransition = (state) => ({
  showTransition: state.showTransition
});

export const useUIStore = createHook(Store, {
  selector: getUIStore,
});

export const useUserInfo = createHook(Store, {
  selector: getUserInfo,
});

export const useTransition = createHook(Store, {
  selector: getTransition,
});

export const useJobInfo = createHook(Store, {
  selector: getJobInfo
});

export const useGlobalList = createHook(Store, {
  selector: getGlobalList
});

export const UIStore = createSubscriber(Store, {
  selector: getUIStore,
  displayName: 'UISizing'
});

export const userInfo = createSubscriber(Store, {
  selector: getUserInfo,
  displayName: 'userInfo'
});

export default useStore;