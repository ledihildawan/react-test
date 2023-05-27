import "./Logo.scss";

import lwcnLogo from "./../../assets/images/logo/lwcn-50x50.png";
import lwcnLogoWithTxt from "./../../assets/images/logo/lwcn-logo.png";

type Props = {
  type?: string;
};

export default function Logo({ type }: Props) {
  if (type === "footer") {
    return (
      <img
        className="main-footer__logo"
        src={lwcnLogoWithTxt}
        alt="LWCN Logo"
      />
    );
  }

  return <img className="logo" src={lwcnLogo} alt="LWCN Logo" />;
}
