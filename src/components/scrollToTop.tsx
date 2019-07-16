import React, { useEffect } from 'react';
import { withRouter } from 'react-router';

type Props = {
  children: any,
  location: any
};

const ScrollToTop: any = ({ children, location: { pathname } }: Props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children;
};

export default withRouter(ScrollToTop);
