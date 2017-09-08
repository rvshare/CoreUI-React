export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: 'NEW'
      }
    },
    {
      title: true,
      name: 'UI elements',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Components',
      url: '/components',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Alerts',
          url: '/components/alerts',
          icon: 'icon-puzzle'
        },
        {
          name: 'Badges',
          url: '/components/badges',
          icon: 'icon-puzzle'
        },
        {
          name: 'Breadcrumbs',
          url: '/components/breadcrumbs',
          icon: 'icon-puzzle'
        },
        {
          name: 'Buttons',
          url: '/components/buttons',
          icon: 'icon-puzzle'
        },
        {
          name: 'Button Groups',
          url: '/components/button-groups',
          icon: 'icon-puzzle'
        },
        {
          name: 'Cards',
          url: '/components/cards',
          icon: 'icon-puzzle'
        },
        {
          name: 'Carousels',
          url: '/components/carousels',
          icon: 'icon-puzzle'
        },
        {
          name: 'Dropdowns',
          url: '/components/dropdowns',
          icon: 'icon-puzzle'
        },
        {
          name: 'Forms',
          url: '/components/forms',
          icon: 'icon-puzzle'
        },
        {
          name: 'Input Groups',
          url: '/components/input-groups',
          icon: 'icon-puzzle'
        },
        {
          name: 'Jumbotrons',
          url: '/components/jumbotrons',
          icon: 'icon-puzzle'
        },
        {
          name: 'List Groups',
          url: '/components/list-groups',
          icon: 'icon-puzzle'
        },
        {
          name: 'Modals',
          url: '/components/modals',
          icon: 'icon-puzzle'
        },
        {
          name: 'Navs',
          url: '/components/navs',
          icon: 'icon-puzzle'
        },
        {
          name: 'Navbars',
          url: '/components/navbars',
          icon: 'icon-puzzle'
        },
        {
          name: 'Paginations',
          url: '/components/paginations',
          icon: 'icon-puzzle'
        },
        {
          name: 'Popovers',
          url: '/components/popovers',
          icon: 'icon-puzzle'
        },
        {
          name: 'Progress Bars',
          url: '/components/progress-bars',
          icon: 'icon-puzzle'
        },
        {
          name: 'Social Buttons',
          url: '/components/social-buttons',
          icon: 'icon-puzzle'
        },
        {
          name: 'Switches',
          url: '/components/switches',
          icon: 'icon-puzzle'
        },
        {
          name: 'Tables',
          url: '/components/tables',
          icon: 'icon-puzzle'
        },
        {
          name: 'Tabs',
          url: '/components/tabs',
          icon: 'icon-puzzle'
        },
        {
          name: 'Tooltips',
          url: '/components/tooltips',
          icon: 'icon-puzzle'
        },
      ]
    },
    {
      name: 'Icons',
      url: '/icons',
      icon: 'icon-star',
      children: [
        {
          name: 'Font Awesome',
          url: '/icons/font-awesome',
          icon: 'icon-star',
          badge: {
            variant: 'secondary',
            text: '4.7'
          }
        },
        {
          name: 'Simple Line Icons',
          url: '/icons/simple-line-icons',
          icon: 'icon-star'
        }
      ]
    },
    {
      name: 'Widgets',
      url: '/widgets',
      icon: 'icon-calculator',
      badge: {
        variant: 'info',
        text: 'NEW'
      }
    },
    {
      name: 'Charts',
      url: '/charts',
      icon: 'icon-pie-chart'
    },
    {
      divider: true
    },
    {
      title: true,
      name: 'Extras'
    },
    {
      name: 'Pages',
      url: '/pages',
      icon: 'icon-star',
      children: [
        {
          name: 'Login',
          url: '/login',
          icon: 'icon-star'
        },
        {
          name: 'Register',
          url: '/register',
          icon: 'icon-star'
        },
        {
          name: 'Error 404',
          url: '/404',
          icon: 'icon-star'
        },
        {
          name: 'Error 500',
          url: '/500',
          icon: 'icon-star'
        }
      ]
    }
  ]
};
