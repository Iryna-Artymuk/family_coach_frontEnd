export const sideBarSubMenuuList = [
  {
    title: 'Дорослі',
    link: 'price/adult',
    iconClass: 'icon-dot',
  },
  {
    title: 'Діти',
    link: 'price/kids',
    iconClass: 'icon-dot',
  },
  {
    title: 'Лекції',
    link: 'price/lecture',
    iconClass: 'icon-dot',
  },
];
export const subMenuFooter = [
  {
    title: 'Змінити пароль',
    link: 'user/changePassword',
    iconClass: 'icon-dot',
  },
  {
    title: 'Змінити дані',
    link: 'user/changeInfo',
    iconClass: 'icon-dot',
  },
  {
    title: 'Реєстрація',
    link: 'user/newAdmin',
    iconClass: 'icon-dot',
  },
];

export const sideBarList = [
  {
    title: 'Відгуки',
    link: 'feedback',
    iconClass: 'icon-feedBack',
  },
  {
    title: 'Блог',
    link: 'blog',
    iconClass: 'icon-blog',
  },

  {
    title: 'Послуги і ціни',
    link: 'price/adult',
    iconClass: 'icon-price',
    subMenu: sideBarSubMenuuList,
  },

  {
    title: 'Кваліфікація',
    link: 'qualification',
    iconClass: 'icon-qualification',
  },
  {
    title: 'Акаунт',
    link: 'user/changeInfo',
    iconClass: 'icon-person',
    subMenu: subMenuFooter,
  },
];
