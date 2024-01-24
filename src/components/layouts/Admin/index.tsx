import { Outlet } from 'react-router-dom';

import { siteSettings } from '@/settings/siteSettings';

import MobileNavigation from '../Navigation/MobileNavigation';
import Navbar from '../Navigation/Navbar';
import SidebarItem from '../Navigation/SidebarItem';

const AdminLayout = () => {
  const SidebarItemMap = () => (
    <>
      {siteSettings.sidebarLinks.admin.map(({ href, label, icon }) => (
        <SidebarItem href={href} label={label} icon={icon} key={href} />
      ))}
    </>
  );

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col transition-colors duration-150">
      <Navbar />
      <MobileNavigation>
        <SidebarItemMap />
      </MobileNavigation>

      <div className="flex flex-1 pt-20">
        <aside className="shadow w-72 xl:w-76 hidden lg:block overflow-y-auto bg-white px-4 fixed start-0 bottom-0 h-full pt-22">
          <div className="flex flex-col space-y-6 py-3">
            <SidebarItemMap />
          </div>
        </aside>
        <main className="w-full lg:ps-72 xl:ps-76">
          <div className="p-5 md:p-8 overflow-y-auto h-full">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};
export default AdminLayout;
