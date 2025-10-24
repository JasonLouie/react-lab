export default function Header(props) {
    return (
        <p className='header'>{props.nested && <span className="arrow arrow-heading">{"<"}</span>}Employee{!props.nested && " Directory"}</p>
    );
}