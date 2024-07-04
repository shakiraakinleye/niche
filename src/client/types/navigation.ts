export type NavSubItemType = {
  title: string;
};

export type NavItemType = {
  title: string;
  subitems?: NavSubItemType[];
};

export type DashboardNavItemType = {
  title: string;
  href: string;
};
