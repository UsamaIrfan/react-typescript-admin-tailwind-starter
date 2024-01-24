import Drawer from '@/components/ui/Drawer';
import DrawerWrapper from '@/components/ui/DrawerWrapper';
import { useUI } from '@/contexts';

const MobileNavigation: React.FC<{ children: JSX.Element | JSX.Element[] }> = ({
  children,
}) => {
  const { displaySidebar, closeSidebar } = useUI();

  return (
    <Drawer open={displaySidebar} onClose={closeSidebar} variant="left">
      <DrawerWrapper onClose={closeSidebar}>
        <div className="flex flex-col space-y-6 p-5">{children}</div>
      </DrawerWrapper>
    </Drawer>
  );
};
export default MobileNavigation;