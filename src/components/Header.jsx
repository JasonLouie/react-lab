export default function Header({nested, title}) {
    return (
        <p className='header'>{nested && <span className="arrow arrow-heading">{"<"}</span>}{title || "No Title"}</p>
    );
}