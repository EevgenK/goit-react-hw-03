import s from "./SearchBox.module.css";

const SearchBox = ({ search }) => {
  const handleInput = (e) => {
    search(e.target.value);
  };

  return <input onChange={handleInput} className={s.search}></input>;
};

export default SearchBox;
