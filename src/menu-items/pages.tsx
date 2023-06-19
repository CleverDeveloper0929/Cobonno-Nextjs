// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconKey, IconReceipt2, IconBug, IconBellRinging, IconPhoneCall, IconQuestionMark, IconShieldLock } from '@tabler/icons';
import { NavItemType } from 'types';

// constant
const icons = {
  IconKey,
  IconReceipt2,
  IconBug,
  IconBellRinging,
  IconPhoneCall,
  IconQuestionMark,
  IconShieldLock
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages: NavItemType = {
  id: 'pages',
  title: <FormattedMessage id="pages" />,
  caption: <FormattedMessage id="pages-caption" />,
  icon: icons.IconKey,
  type: 'group',
  children: [
    {
      id: 'authentication',
      title: <FormattedMessage id="authentication" />,
      type: 'collapse',
      icon: icons.IconKey,
      children: [
        {
          id: 'authentication1',
          title: (
            <>
              <FormattedMessage id="authentication" /> 1
            </>
          ),
          type: 'collapse',
          children: [
            {
              id: 'login1',
              title: <FormattedMessage id="login" />,
              type: 'item',
              url: '/pages/authentication/auth1/login',
              target: true
            },
            {
              id: 'register1',
              title: <FormattedMessage id="register" />,
              type: 'item',
              url: '/pages/authentication/auth1/register',
              target: true
            },
            {
              id: 'forgot-password1',
              title: <FormattedMessage id="forgot-password" />,
              type: 'item',
              url: '/pages/authentication/auth1/forgot-password',
              target: true
            },
            {
              id: 'check-mail1',
              title: <FormattedMessage id="check-mail" />,
              type: 'item',
              url: '/pages/authentication/auth1/check-mail',
              target: true
            },
            {
              id: 'reset-password1',
              title: <FormattedMessage id="reset-password" />,
              type: 'item',
              url: '/pages/authentication/auth1/reset-password',
              target: true
            },
            {
              id: 'code-verification1',
              title: <FormattedMessage id="code-verification" />,
              type: 'item',
              url: '/pages/authentication/auth1/code-verification',
              target: true
            }
          ]
        },
        {
          id: 'authentication2',
          title: (
            <>
              <FormattedMessage id="authentication" /> 2
            </>
          ),
          type: 'collapse',
          children: [
            {
              id: 'login2',
              title: <FormattedMessage id="login" />,
              type: 'item',
              url: '/pages/authentication/auth2/login',
              target: true
            },
            {
              id: 'register2',
              title: <FormattedMessage id="register" />,
              type: 'item',
              url: '/pages/authentication/auth2/register',
              target: true
            },
            {
              id: 'forgot-password2',
              title: <FormattedMessage id="forgot-password" />,
              type: 'item',
              url: '/pages/authentication/auth2/forgot-password',
              target: true
            },
            {
              id: 'check-mail2',
              title: <FormattedMessage id="check-mail" />,
              type: 'item',
              url: '/pages/authentication/auth2/check-mail',
              target: true
            },
            {
              id: 'reset-password2',
              title: <FormattedMessage id="reset-password" />,
              type: 'item',
              url: '/pages/authentication/auth2/reset-password',
              target: true
            },
            {
              id: 'code-verification2',
              title: <FormattedMessage id="code-verification" />,
              type: 'item',
              url: '/pages/authentication/auth2/code-verification',
              target: true
            }
          ]
        },
        {
          id: 'authentication3',
          title: (
            <>
              <FormattedMessage id="authentication" /> 3
            </>
          ),
          type: 'collapse',
          children: [
            {
              id: 'login3',
              title: <FormattedMessage id="login" />,
              type: 'item',
              url: '/pages/authentication/auth3/login',
              target: true
            },
            {
              id: 'register3',
              title: <FormattedMessage id="register" />,
              type: 'item',
              url: '/pages/authentication/auth3/register',
              target: true
            },
            {
              id: 'forgot-password3',
              title: <FormattedMessage id="forgot-password" />,
              type: 'item',
              url: '/pages/authentication/auth3/forgot-password',
              target: true
            },
            {
              id: 'check-mail3',
              title: <FormattedMessage id="check-mail" />,
              type: 'item',
              url: '/pages/authentication/auth3/check-mail',
              target: true
            },
            {
              id: 'reset-password3',
              title: <FormattedMessage id="reset-password" />,
              type: 'item',
              url: '/pages/authentication/auth3/reset-password',
              target: true
            },
            {
              id: 'code-verification3',
              title: <FormattedMessage id="code-verification" />,
              type: 'item',
              url: '/pages/authentication/auth3/code-verification',
              target: true
            }
          ]
        }
      ]
    },
    {
      id: 'price',
      title: <FormattedMessage id="pricing" />,
      type: 'collapse',
      icon: icons.IconReceipt2,
      children: [
        {
          id: 'price1',
          title: (
            <>
              <FormattedMessage id="price" /> 01
            </>
          ),
          type: 'item',
          url: '/pages/price/price1'
        },
        {
          id: 'price2',
          title: (
            <>
              <FormattedMessage id="price" /> 02
            </>
          ),
          type: 'item',
          url: '/pages/price/price2'
        }
      ]
    },
    {
      id: 'maintenance',
      title: <FormattedMessage id="maintenance" />,
      type: 'collapse',
      icon: icons.IconBug,
      children: [
        {
          id: 'error',
          title: <FormattedMessage id="error-404" />,
          type: 'item',
          url: '/pages/maintenance/error',
          target: true
        },
        {
          id: 'coming-soon',
          title: <FormattedMessage id="coming-soon" />,
          type: 'collapse',
          children: [
            {
              id: 'coming-soon1',
              title: (
                <>
                  <FormattedMessage id="coming-soon" /> 01
                </>
              ),
              type: 'item',
              url: '/pages/maintenance/coming-soon/coming-soon1',
              target: true
            },
            {
              id: 'coming-soon2',
              title: (
                <>
                  <FormattedMessage id="coming-soon" /> 02
                </>
              ),
              type: 'item',
              url: '/pages/maintenance/coming-soon/coming-soon2',
              target: true
            }
          ]
        },
        {
          id: 'under-construction',
          title: <FormattedMessage id="under-construction" />,
          type: 'item',
          url: '/pages/maintenance/under-construction',
          target: true
        }
      ]
    },
    {
      id: 'landing',
      title: <FormattedMessage id="landing" />,
      type: 'item',
      icon: icons.IconBellRinging,
      url: '/pages/landing',
      target: true
    },
    {
      id: 'contact-us',
      title: <FormattedMessage id="contact-us" />,
      type: 'item',
      icon: icons.IconPhoneCall,
      url: '/pages/contact-us',
      target: true
    },
    {
      id: 'faqs',
      title: <FormattedMessage id="faqs" />,
      type: 'item',
      icon: icons.IconQuestionMark,
      url: '/pages/faqs',
      target: true
    },
    {
      id: 'privacy-policy',
      title: <FormattedMessage id="privacy-policy" />,
      type: 'item',
      icon: icons.IconShieldLock,
      url: '/pages/privacy-policy',
      target: true
    }
  ]
};

export default pages;
