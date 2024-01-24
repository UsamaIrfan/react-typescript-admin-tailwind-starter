import { motion } from 'framer-motion';

import { NavbarIcon } from '@/components/icons';
import Avatar from '@/components/ui/Avatar';
import { useUI } from '@/contexts';
import { siteSettings } from '@/settings/siteSettings';

const Navbar = () => {
  const { toggleSidebar } = useUI();

  return (
    <header className="bg-white shadow fixed w-full z-40">
      <nav className="px-5 md:px-8 py-4 flex items-center justify-between">
        {/* <!-- Mobile menu button --> */}
        <motion.button
          whileTap={{ scale: 0.88 }}
          onClick={toggleSidebar}
          className="flex p-2 h-full items-center justify-center focus:outline-none focus:text-accent lg:hidden"
        >
          <NavbarIcon />
        </motion.button>

        <div className="hidden md:flex ms-5 me-auto">
          <p className="text-xl">{siteSettings.name}</p>
        </div>

        <div className="flex items-center space-s-8">
          <Avatar src={siteSettings?.avatar?.placeholder} alt="avatar" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
