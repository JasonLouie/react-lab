export default function SearchBar({onChange}) {
    return (
        <input type="text" name="search" id="search" placeholder="Search" onChange={onChange}/>
    );
}