import { addDarkInLs, removeDarkInLs } from './localStorageUtil';

const addDarkMode = () => {
  addDarkInLs();
  document.documentElement.classList.add('dark');
};
const removeDarkMode = () => {
  removeDarkInLs();
  document.documentElement.classList.remove('dark');
};

export { addDarkMode, removeDarkMode };
