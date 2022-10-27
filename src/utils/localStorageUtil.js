const darkModeKey = 'my-dark-mode';

const addDarkInLs = () => {
  localStorage.setItem(darkModeKey,true)
}
const removeDarkInLs = () => {
  localStorage.setItem(darkModeKey,false)
} 

const getDarkInLs = () => {
  return localStorage.getItem(darkModeKey)
}

export { darkModeKey,addDarkInLs,removeDarkInLs,getDarkInLs };
