import { useId } from "react";
import s from "./SearchBox.module.css";

const SearchBox = ({ value, search }) => {
  const searchFieldId = useId();
  const handleInput = (e) => {
    search(e.target.value.toLowerCase());
  };

  return (
    <label className={s.label} htmlFor={searchFieldId}>
      Find contacts by name or number
      <input
        id={searchFieldId}
        value={value}
        onChange={handleInput}
        className={s.search}
      ></input>
    </label>
  );
};

export default SearchBox;
