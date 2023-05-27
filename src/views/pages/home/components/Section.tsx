import { Link } from "react-router-dom";
import { ReactNode } from "react";
import {
  ERROR as errorMsg,
  LOADING as loadingMsg,
} from "../../../../constants/message";

import Info from "../../../../components/common/Info";

type Props = {
  title: string;
  link: string;
  loading: boolean;
  error: boolean;
  children: ReactNode;
};

export default function Section({
  title,
  link,
  error,
  loading,
  children,
}: Props) {
  return (
    <section className="section">
      <div className="container">
        <header className="section__header">
          <h3 className="section__title">
            <Link to={link} className="section__title">
              {title}
            </Link>
          </h3>
        </header>
        <div className="section__content">
          {error && <Info message={errorMsg} />}
          {loading ? <Info message={loadingMsg} /> : children}
        </div>
      </div>
    </section>
  );
}
