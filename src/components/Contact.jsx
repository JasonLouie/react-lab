export default function Contact({type, info}) {
    return (
        <div className='contact'>
            <div>
                <h3 className='type'>{type || "Contact Method"}</h3>
                <p className='number gray'>{info || "Contact Info"}</p>
            </div>
            <div>
                <p className="arrow">{">"}</p>
            </div>
        </div>
    );
}