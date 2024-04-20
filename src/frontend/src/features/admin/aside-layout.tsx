import { BaseAdminStyles } from '@/shared';
import clsx from 'clsx';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AsideLayoutLink } from './interfaces';

interface AsideLayoutProps {
  backLink: AsideLayoutLink;
  links: AsideLayoutLink[];
}

export const AsideLayout: React.FC<AsideLayoutProps> = ({
  links,
  backLink,
}) => {
  const { pathname } = useLocation();

  return (
    <aside className={BaseAdminStyles.asideLayout}>
      <section className={BaseAdminStyles.asideLogotype}>
        <img src='/dev-lab-icon.svg' alt='logotype' />
        <span>DevLab</span>
      </section>
      <section className={BaseAdminStyles.linkContainer}>
        {links.map(({ link, name }) => (
          <Link
            key={link}
            to={link}
            className={clsx(
              BaseAdminStyles.adminLink,
              link === pathname ? BaseAdminStyles.active : '',
            )}
          >
            {name}
          </Link>
        ))}
      </section>
      <Link to={backLink.link} className={BaseAdminStyles.backLink}>
        {`<  ${backLink.name}`}
      </Link>
    </aside>
  );
};
