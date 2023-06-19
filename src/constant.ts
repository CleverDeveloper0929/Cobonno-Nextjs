import { ReactElement } from 'react';

export const LAYOUT_CONST = {
  VERTICAL_LAYOUT: 'vertical',
  HORIZONTAL_LAYOUT: 'horizontal',
  DEFAULT_DRAWER: 'default',
  MINI_DRAWER: 'mini-drawer'
};

export const LAYOUT: any = {
  main: 'main',
  noauth: 'noauth',
  minimal: 'minimal'
};
export interface Props {
  children: ReactElement;
  variant?: 'main' | 'minimal' | 'noauth';
}
export default LAYOUT;
