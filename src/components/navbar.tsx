import React from 'react';

interface NavbarProps {
    main_page: 'goals' | '';
}

const Navbar: React.FC<NavbarProps> = ({ main_page }) => {
  return (
        <div className='py-1 px-4'>
            <div className='text-3xl font-smallfont font-semibold cursor-pointer'
            onClick = {() => {window.location.href = `/${main_page}`}}>Goalie</div>
        </div>
  );
};

export default Navbar;
