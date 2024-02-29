import { ReactNode } from "react";
import TopNav from "../../molecules/navs/top-nav";
import "./dashboard-layout-styles.scss";
import { useTheme } from "../../../hooks/useTheme";

interface IDashboardLayoutProps {
  children: ReactNode;
}
export const DashboardLayout = ({ children }: IDashboardLayoutProps) => {
  const { setTheme } = useTheme();

  return (
    <div className="dashboard-wrapper">
      <TopNav />
      <main>{children}</main>
    </div>
  );
};
