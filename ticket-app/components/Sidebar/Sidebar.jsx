import LanguageButton from './LanguageButton';
import MainLinks from './MainLinks';
import OptionsButton from './OptionsButton';
import SearchBlock from './SearchBlock';
import SecondaryLinks from './SecondaryLinks';
import SettingsButton from './SettingsButton';

const Sidebar = (props) => {
  return (
    <aside
      className="fixed top-0 left-0 z-40 w-64 h-screen pt-14 transition-transform -translate-x-full bg-white border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
      aria-label="Sidenav"
      id="drawer-navigation"
    >
      <div className="overflow-y-auto py-5 px-3 h-full bg-white dark:bg-gray-800">
        <SearchBlock />
        <MainLinks />
        <SecondaryLinks />
      </div>
      <div className="hidden absolute bottom-0 left-0 justify-center p-4 space-x-4 w-full lg:flex bg-white dark:bg-gray-800 z-20">
        <OptionsButton />
        <SettingsButton />
        <LanguageButton />
      </div>
    </aside>
  );
};

export default Sidebar;
