
import style from './search-bar.module.css'


const SearchBar = () => {
    return (
        <div className={style.search}>
            <input placeholder="Search any things here"></input>
            <button>Search</button>
        </div>
    )
};
export default SearchBar;