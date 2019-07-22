import { useEffect } from 'react';
import { withRouter } from 'react-router';

interface IProps {
  children: any;
  location: any;
}

const ScrollToTop: any = ({ children, location: { pathname } }: IProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children;
};

export default withRouter(ScrollToTop);
