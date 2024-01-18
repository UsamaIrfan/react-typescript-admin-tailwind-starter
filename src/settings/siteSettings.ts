import APP_ROUTES from '@/utils/routes';

export const siteSettings = {
  name: 'Patient',
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
    ],
  },
};
