import React from 'react';

interface NavbarProps {
    main_page: 'goals' | ''; //Can be 'goals' if user is logged in, or '' to send them to the landing page if they aren't   
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
