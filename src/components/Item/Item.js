export const Item = ({title, url}) => {
    return (
        <div className="col-6 col-sm-4 col-lg-2">
            <div className="card mb-4">
                <img
                    src={url}
                    className="c-results__image card-img-top"
                    alt={title}
                />
            </div>
        </div>
    )
}
