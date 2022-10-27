import { useEffect, useState } from "react";
import { addDarkMode, removeDarkMode } from "../../src/utils/toggleDarkMode";

function Toggle() {
  const [state, setState] = useState(false);

  useEffect(() => {
    if (state) {
      addDarkMode();
    } else {
      removeDarkMode();
    }
  }, [state]);

  return (
    <label
      for="Toggle1"
      className="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100"
    >
      <span className="relative">
        <input
          id="Toggle1"
          type="checkbox"
          className="hidden peer"
          onChange={() => {
            setState(!state);
          }}
        />
        <div
          className="w-10 h-6 rounded-full shadow-inner
        bg-gray-300 dark:bg-gray-400 peer-checked:dark:bg-red-400"
        ></div>
        <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-red-400 dark:bg-gray-800"></div>
      </span>
    </label>
  );
}

export default Toggle;
