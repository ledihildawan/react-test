import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { selectApp } from "../../store/slices/appSlice";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MobileNavigationMenu from "../../components/MobileNavigationMenu";
import MobileSearch from "../../components/MobileSearch/MobileSearch";

type Props = {
  children: ReactNode;
};

export default function MainLayout({ children }: Props) {
  const appState = useSelector(selectApp);

  return (
    <>
      <Header />

      <main>{children}</main>

      <Footer />

      {appState.showMenuMobile && <MobileNavigationMenu />}
      {appState.showSearchMobile && <MobileSearch />}
    </>
  );
}
