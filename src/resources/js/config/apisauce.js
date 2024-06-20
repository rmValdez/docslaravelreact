import { create } from 'apisauce';

const apiSauce = create({
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
  },
});

// Authentication
export const login = (params) => apiSauce.post(`auth/login`, params);
export const logout = () => apiSauce.get(`auth/logout`);
export const confirmUserPassword = (params) => apiSauce.post(`/api/v1/auth/confirm-action-with-user-password`, params);
export const getSettings = () => apiSauce.get(`/api/v1/auth/get-settings`);
export const resetPasswordSendEmail = (params) => apiSauce.post('/api/v1/password/reset-send-email', params);
export const setNewPasswordForUser = (params) => apiSauce.post('/api/v1/password/set-new', params);
export const checkUserStatus = () => apiSauce.get('/api/v1/auth/check-user-status');
export const getUserPlatformAccessStatus = (params) => apiSauce.post('/api/v1/auth/get-user-platform-access-status', params);
export const getMinimumPasswordLength = () => apiSauce.get('/api/v1/auth/get-minimum-password-length');
export const requestAccessOnPlatform = (params) => apiSauce.post('/api/v1/auth/request-access-on-platform', params);
export const queryIsKeyValid = (params) => apiSauce.post('/forgot-password/is-key-valid', params);

// Platforms
export const fetchPlatformsList = () => apiSauce.get('api/v1/platforms/list');
export const myPlatforms = (id) => apiSauce.get(`api/v1/platforms/my-platfrom/${id}`);
export const fetchUsersPlatforms = (params) => apiSauce.get('api/v1/platforms/show-list-for-user', params);
export const createPlatform = (params) => apiSauce.post('api/v1/platforms/create-platform', params);
export const updatePlatform = (params) => apiSauce.post('api/v1/platforms/update-platform', params);
export const fetchPlatforms = (params) => apiSauce.get('api/v1/platforms/show-list', params);

// Company Email Settings
export const fetchCompanyEmail = () => apiSauce.get('/api/v1/email');
export const upsertCompanyEmail = (id = null, params) => apiSauce.put(`/api/v1/email/upsert/${id}`, params);
export const statusCompanyEmail = (id) => apiSauce.put(`/api/v1/email/status/${id}`);
// Roles and Permissions
export const fetchPermissions = () => apiSauce.get('api/v1/roles-permission/permissions');
export const fetchRoles = () => apiSauce.get('api/v1/roles-permission/roles');
export const fetchRolesHasPermission = () => apiSauce.get('api/v1/roles-permission/rolesHasPermission');
export const createPermission = (params) => apiSauce.post('api/v1/roles-permission/create-permission', params);
export const updatePermission = (params) => apiSauce.post('api/v1/roles-permission/update-permission', params);
export const deletePermission = (params) => apiSauce.post('api/v1/roles-permission/delete-permission', params);
export const createRole = (params) => apiSauce.post('api/v1/roles-permission/create-role', params);
export const updateRole = (params) => apiSauce.post('api/v1/roles-permission/update-role', params);
export const deleteRole = (params) => apiSauce.post('api/v1/roles-permission/delete-role', params);
export const removePermissionToRole = (params) => apiSauce.post('api/v1/roles-permission/removePermissionToRole', params);
export const addPermissionToRole = (params) => apiSauce.post('api/v1/roles-permission/addPermissionToRole', params);
export const fetchUsersByRole = (params) => apiSauce.get('api/v1/roles-permission/role-users', params);

/**
 * AuthUserController
 * group endpoint "api/v1/accounts"
 *
 */
export const fetchMyInfo = () => apiSauce.get('api/v1/accounts');
export const showMyApps = (params) => apiSauce.get('api/v1/accounts/show/accounts', params);
export const updateMyInfo = (id, params) => apiSauce.patch(`api/v1/accounts/update/${id}`, params);
export const updatePassword = (params) => apiSauce.patch('api/v1/accounts/update-password', params);
export const userSetNewPassword = (params) => apiSauce.patch('user/set-password', params);

// User Management
export const mySessions = (page) => apiSauce.get(`api/v1/sessions?page=${page}`);
export const getDeviceRecentActivity = (params) => apiSauce.get(`api/v1/sessions/device-info`, params)
export const revokeDeviceSession = (id) => apiSauce.post(`api/v1/sessions/device/${id}`);

/**
 * UserManagementController
 * group endpoint "api/v1/accounts/management"
 *
*/

export const createUser = (params) => apiSauce.post(`api/v1/accounts/management/store`, params);
export const revokeAllUserDeviceSession = (id) => apiSauce.post(`api/v1/sessions/logout-all-device/${id}`);
export const getMyPlatforms = (params) => apiSauce.post('api/v1/accounts/management/user-platforms', params);
export const getMyDevices = (params) => apiSauce.post('api/v1/accounts/management/user-devices', params);
export const fetchUsers = (params) => apiSauce.post('api/v1/accounts/management', params);
export const updateUserInfo = (id, params) => apiSauce.put(`api/v1/accounts/management/update/${id}`, params);
export const updateUserRole = (params) => apiSauce.post('api/v1/accounts/management/update/role', params);
export const fetchUsersEmail = () => apiSauce.get('api/v1/accounts/management/emails');

// Notification Management
export const fetchNotification = (params) => apiSauce.get('/api/v1/notification', params);
export const readAtNotification = (id) => apiSauce.put(`/api/v1/notification/read-at/${id}`);
// Mail Management
export const mailSend = (params) => apiSauce.post('/api/v1/mail/send', params);
// Control Panel
export const revokeAllTokens = () => apiSauce.post('/api/v1/control-panel/revoke-all-tokens');
export const generateMasterPassword = () => apiSauce.post('/api/v1/control-panel/generate-master-password');
export const getMasterPasswordLimit = () => apiSauce.get('/api/v1/control-panel/get-master-password-limit');

/**
 * Roles 
 * group endpoint "api/v1/roles"
 */
export const fetchApiRoles = (userId) => apiSauce.get('api/v1/roles', userId)


/** DEVELOPER TOOLS */
export const maintenanceMode = (params) => apiSauce.post('api/v1/maintenance/mode', params)
export const maintenanceStatus = () => apiSauce.get('api/v1/maintenance/status')