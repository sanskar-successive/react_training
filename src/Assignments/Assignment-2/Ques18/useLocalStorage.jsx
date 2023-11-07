// 18.Design a custom hook named useLocalStorage to interact with local storage.
// Create a useLocalStorage hook that allows storing and retrieving data from local storage.
// Implement methods for setting, getting, and removing data using the hook.
// Utilize the localStorage API within the hook to manage data.
// Develop a component that uses the useLocalStorage hook to manage user preferences.

const useLocalStorage = () => {
  const setUser = (user) => {
    localStorage.setItem(user.name, JSON.stringify(user));
  }
  const getUser = (key) => {
    return JSON.parse(localStorage.getItem(key));
  }
  const removeUser = (key) => {
    localStorage.removeItem(key);
  }

  return { setUser, getUser, removeUser };
};

export default useLocalStorage;
