import APP_ROUTES from '@/utils/routes';

export const siteSettings = {
  name: 'Patient Portal',
  description: '',
  logo: {},
  collapseLogo: {},
  defaultLanguage: 'en',
  sidebarLinks: {
    admin: [
      {
        href: APP_ROUTES.HOME,
        label: 'Home',
        icon: 'DashboardIcon',
      },
      {
        href: APP_ROUTES.PRODUCTS,
        label: 'Products',
        icon: 'DashboardIcon',
      },
      {
        href: APP_ROUTES.ORDERS,
        label: 'Orders',
        icon: 'DashboardIcon',
      },
    ],
  },
  avatar: {
    placeholder: '/avatar-placeholder.svg',
  },
};
