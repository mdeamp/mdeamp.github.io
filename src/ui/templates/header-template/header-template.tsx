import { useEffect, useState } from 'react';

import { classes, scrollToTop } from '@helpers';
import { Avatar } from '@ui/components';

export const HeaderTemplate = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 48) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={classes(
        "fixed top-0 flex h-16 w-full items-center justify-center py-2 font-['Poppins'] text-xl font-bold",
        scrolled && 'bg-neutral-800',
      )}
    >
      <Avatar rounded />
      <button className="ml-2 text-white" onClick={scrollToTop}>
        mdeamp
      </button>
    </div>
  );
};
