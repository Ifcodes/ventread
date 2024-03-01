import { ReactNode } from "react";
import TopNav from "../../molecules/navs/top-nav";
import "./dashboard-layout-styles.scss";

interface IDashboardLayoutProps {
  children: ReactNode;
}
export const DashboardLayout = ({ children }: IDashboardLayoutProps) => {
  return (
    <div className="dashboard-wrapper">
      <TopNav />
      <main>{children}</main>
    </div>
  );
};
