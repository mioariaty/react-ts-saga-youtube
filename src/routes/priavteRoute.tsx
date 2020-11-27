import React, { FC } from 'react';
import { Redirect, Route, RouteProps, useLocation } from 'react-router-dom';

export interface ProtectedRouteProps extends RouteProps {
  isAuthenticated: boolean;
  authenticationPath: string;
  redirectPathOnAuthentication: string;
  setRedicrectPathOnAuthentication: (path: string) => void;
}

const ProtectedRoute: FC<ProtectedRouteProps> = props => {
  const { isAuthenticated, authenticationPath, redirectPathOnAuthentication, setRedicrectPathOnAuthentication } = props;
  const currentLocation = useLocation();
  let redirectPath = redirectPathOnAuthentication;

  if (!isAuthenticated) {
    setRedicrectPathOnAuthentication(currentLocation.pathname);
    redirectPath = authenticationPath;
  }

  if (redirectPath !== currentLocation.pathname) {
    const renderComponent = () => <Redirect to={{ pathname: redirectPath }} />;
    return <Route {...props} component={renderComponent} render={undefined} />;
  } else {
    return <Route {...props} />;
  }
};
export default ProtectedRoute;
