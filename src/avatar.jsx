export const Avatar = ({ url, nombre }) => {
    return (
        <div>
            <img src={url} alt={nombre} />
        </div>
    )
}