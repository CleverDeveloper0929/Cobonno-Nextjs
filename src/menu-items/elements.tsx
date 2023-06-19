// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconBrush, IconTools } from '@tabler/icons';
import { NavItemType } from 'types';

// constant
const icons = {
  IconBrush,
  IconTools
};

// ==============================|| UI ELEMENTS MENU ITEMS ||============================== //

const elements: NavItemType = {
  id: 'ui-element',
  title: <FormattedMessage id="ui-element" />,
  icon: icons.IconBrush,
  type: 'group',
  children: [
    {
      id: 'basic',
      title: <FormattedMessage id="basic" />,
      caption: <FormattedMessage id="basic-caption" />,
      type: 'collapse',
      icon: icons.IconBrush,
      children: [
        {
          id: 'accordion',
          title: <FormattedMessage id="accordion" />,
          type: 'item',
          url: '/ui-element/basic/accordion',
          breadcrumbs: false
        },
        {
          id: 'avatar',
          title: <FormattedMessage id="avatar" />,
          type: 'item',
          url: '/ui-element/basic/avatar',
          breadcrumbs: false
        },
        {
          id: 'badges',
          title: <FormattedMessage id="badges" />,
          type: 'item',
          url: '/ui-element/basic/badges',
          breadcrumbs: false
        },
        {
          id: 'breadcrumb',
          title: <FormattedMessage id="breadcrumb" />,
          type: 'item',
          url: '/ui-element/basic/breadcrumb'
        },
        {
          id: 'cards',
          title: <FormattedMessage id="cards" />,
          type: 'item',
          url: '/ui-element/basic/cards',
          breadcrumbs: false
        },
        {
          id: 'chip',
          title: <FormattedMessage id="chip" />,
          type: 'item',
          url: '/ui-element/basic/chip',
          breadcrumbs: false
        },
        {
          id: 'list',
          title: <FormattedMessage id="list" />,
          type: 'item',
          url: '/ui-element/basic/list',
          breadcrumbs: false
        },
        {
          id: 'tabs',
          title: <FormattedMessage id="tabs" />,
          type: 'item',
          url: '/ui-element/basic/tabs',
          breadcrumbs: false
        }
      ]
    },
    {
      id: 'advance',
      title: <FormattedMessage id="advance" />,
      type: 'collapse',
      icon: icons.IconTools,
      children: [
        {
          id: 'alert',
          title: <FormattedMessage id="alert" />,
          type: 'item',
          url: '/ui-element/advance/alert',
          breadcrumbs: false
        },
        {
          id: 'dialog',
          title: <FormattedMessage id="dialog" />,
          type: 'item',
          url: '/ui-element/advance/dialog',
          breadcrumbs: false
        },
        {
          id: 'pagination',
          title: <FormattedMessage id="pagination" />,
          type: 'item',
          url: '/ui-element/advance/pagination',
          breadcrumbs: false
        },
        {
          id: 'progress',
          title: <FormattedMessage id="progress" />,
          type: 'item',
          url: '/ui-element/advance/progress',
          breadcrumbs: false
        },
        {
          id: 'rating',
          title: <FormattedMessage id="rating" />,
          type: 'item',
          url: '/ui-element/advance/rating',
          breadcrumbs: false
        },
        {
          id: 'snackbar',
          title: <FormattedMessage id="snackbar" />,
          type: 'item',
          url: '/ui-element/advance/snackbar',
          breadcrumbs: false
        },
        {
          id: 'skeleton',
          title: <FormattedMessage id="skeleton" />,
          type: 'item',
          url: '/ui-element/advance/skeleton',
          breadcrumbs: false
        },
        {
          id: 'speeddial',
          title: <FormattedMessage id="speeddial" />,
          type: 'item',
          url: '/ui-element/advance/speeddial',
          breadcrumbs: false
        },
        {
          id: 'timeline',
          title: <FormattedMessage id="timeline" />,
          type: 'item',
          url: '/ui-element/advance/timeline',
          breadcrumbs: false
        },
        {
          id: 'toggle-button',
          title: <FormattedMessage id="toggle-button" />,
          type: 'item',
          url: '/ui-element/advance/toggle-button',
          breadcrumbs: false
        },
        {
          id: 'treeview',
          title: <FormattedMessage id="treeview" />,
          type: 'item',
          url: '/ui-element/advance/treeview',
          breadcrumbs: false
        }
      ]
    }
  ]
};

export default elements;
