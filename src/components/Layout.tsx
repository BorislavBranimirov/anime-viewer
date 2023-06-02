import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="min-h-screen min-w-full bg-zinc-900 text-white pb-1">
      <header className="border-b border-zinc-700 py-3">
        <div className="w-4/5 max-w-screen-2xl mx-auto flex justify-around gap-5">
          <NavLink
            to="/top"
            className={({ isActive }) =>
              `${
                isActive ? 'font-bold underline' : ''
              } text-white hover:underline`
            }
          >
            Top Anime
          </NavLink>
          <NavLink
            to="/season"
            className={({ isActive }) =>
              `${
                isActive ? 'font-bold underline' : ''
              } text-white hover:underline`
            }
          >
            Seasonal Anime
          </NavLink>
          <NavLink
            to="/search"
            className={({ isActive }) =>
              `${
                isActive ? 'font-bold underline' : ''
              } text-white hover:underline`
            }
          >
            Search
          </NavLink>
        </div>
      </header>
      <Outlet />
    </div>
  );
};

export default Layout;
