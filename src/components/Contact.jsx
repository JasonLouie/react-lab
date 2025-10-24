export default function Contact(props) {
    return (
        <div className='contact'>
            <div>
                <h3 className='type'>{props.type || "Contact Method"}</h3>
                <p className='number gray'>{props.info || "Contact Info"}</p>
            </div>
            <div>
                <p className="arrow">{">"}</p>
            </div>
        </div>
    );
}