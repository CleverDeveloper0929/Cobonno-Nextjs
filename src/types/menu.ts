// project import
import { NavItemType } from 'types';

// ==============================|| MENU TYPES  ||============================== //

export type MenuProps = {
  selectedItem: string[];
  selectedID: string | null;
  drawerOpen: boolean;
  error: null;
  menu: NavItemType;
};
