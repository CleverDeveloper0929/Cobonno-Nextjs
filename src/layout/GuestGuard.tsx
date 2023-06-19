import { FC, ReactNode } from 'react';
// project imports
import Customization from './Customization';
import GuestGuard from 'utils/route-guard/GuestGuard';
import NavMotion from './NavMotion';

interface Props {
  children: ReactNode;
}

// ==============================|| MINIMAL LAYOUT ||============================== //

const MinimalLayout: FC<Props> = ({ children }) => (
  <NavMotion>
    <GuestGuard>
      <>
        {children}
        <Customization />
      </>
    </GuestGuard>
  </NavMotion>
);

export default MinimalLayout;
