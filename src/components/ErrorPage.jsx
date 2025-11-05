import Header from "./Header";

export default function ErrorPage({title, message, nested}) {
    return (
        <div className="page">
            <Header title={title} nested={nested} />
            <p>{message}</p>
        </div>
    )
}