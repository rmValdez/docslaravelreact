import { PAGE_LIST_ONE } from '../routesComponents/routeComponentOne';
import { PAGE_PERMISSIONS_ONE } from '../routePermission/routePermissionOne';
import { PAGE_ICON_ONE } from '../routeIcon/routesIcon';

export const PAGE_LIST = [
  {
    title: 'Home Page',
    icon: PAGE_ICON_ONE.HOME_PAGE_ICON,
    component: PAGE_LIST_ONE.HOME_PAGE,
    permission: PAGE_PERMISSIONS_ONE.NO_PERMISSION_REQUIRED,
    path: '/',
  },
]