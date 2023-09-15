import { useEffect } from "react";
import { useState } from "react";

const Input = ({ name, value, setValue }) => {
  const [labelTransform, setLabelTransform] = useState(false);

  // animate label when value is not null
  useEffect(() => {
    if (value) {
      setLabelTransform(true);
    }
  }, [value]);

  // animate label on input focus
  const inputFocus = () => {
    if (value) return;
    setLabelTransform(!labelTransform);
  };

  // update input value
  const changeVal = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="relative">
      <label
        className={`text-gray-400 absolute left-4  ${
          labelTransform
            ? "-top-4 text-[10px]"
            : "top-1/2 -translate-y-1/2 text-sm"
        } animate`}
      >
        {name}:
      </label>
      <input
        className="border-b border-gray-300 block w-full rounded-md px-4 py-2 outline-none relative z-10 bg-transparent"
        onFocus={inputFocus}
        onBlur={inputFocus}
        value={value}
        onChange={changeVal}
      />
    </div>
  );
};

export default Input;
