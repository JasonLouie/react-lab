export default function SearchBar({setInput}) {
    return (
        <input type="text" name="search" id="search" placeholder="Search" onChange={(e) => setInput(e.target.value)}/>
    );
}