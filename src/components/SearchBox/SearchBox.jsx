import s from "./SearchBox.module.css";

const SearchBox = ({ value, search }) => {
  const handleInput = (e) => {
    search(e.target.value.toLowerCase());
  };

  return (
    <input value={value} onChange={handleInput} className={s.search}></input>
  );
};

export default SearchBox;
