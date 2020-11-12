import React, { CSSProperties, ReactNode } from 'react';
import { Link, Route } from 'react-router-dom';

export interface NavLinkCustomProps {
  to: string;
  activeOnlyWhenExtract: boolean;
  children: ReactNode;
  className: string;
  style: CSSProperties;
}

const NavLinkCustom = ({ activeOnlyWhenExtract, className, children, to }: NavLinkCustomProps) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExtract}
      children={({ match }) => (
        <div className={match ? className : ''}>
          <Link to="/">{children}</Link>
        </div>
      )}
    />
  );
};
export default NavLinkCustom;
