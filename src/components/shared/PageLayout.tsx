import React from 'react';
import pageLayoutStyles from 'styles/pageLayoutStyles';

export interface PageLayoutProps {
children: React.ReactChild| React.ReactChild[]
}
const PageLayout = ({
  children
}: PageLayoutProps) => {
  const classes = pageLayoutStyles();

  return (
    <div>
      {/* Page Layout */}
      <div
        className={classes.pageCardRoot}
      >
        {children}
      </div>
    </div>
  );
};
export default PageLayout;
