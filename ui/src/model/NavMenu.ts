export interface NavLink {
  title: string;
  link: string;
};

export interface NavMenu {
  title: string;
  link: string;
  children: NavLink[];
}
