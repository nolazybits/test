//  TODO have each feature/module adding their own menu from within the module itself
export const MENU = [
  {
    path: 'home',
    data: {
      title: 'Home',
      icon: 'fa-tachometer',
      selected: false,
      order: 0
    }
  },
  {
    path: 'time-management',
    data: {
      title: 'Time Management',
      icon: 'fa-clock-o',
      selected: false,
      order: 10
    }
  },
  {
    path: 'inbox',
    data: {
      title: 'Inbox',
      icon: 'fa-inbox',
      selected: false,
      order: 20
    }
  },
  {
    path: 'calendar',
    data: {
      title: 'Calendar',
      icon: 'fa-calendar',
      selected: false,
      order: 30
    }
  },
  {
    path: 'analytics',
    data: {
      title: 'Analytics',
      icon: 'fa-line-chart',
      selected: false,
      order: 40
    }
  },
  {
    path: 'settings',
    data: {
      title: 'Settings',
      icon: 'fa-cog',
      selected: false,
      order: 50
    }
  },
];
