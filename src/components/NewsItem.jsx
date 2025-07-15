import "./NewsItem.css";

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div
      className="card bg-dark text-light mg-3 d-inline-block my-2 mx-2 px-3 py-3 row-gap-3"
      style={{ maxWidth: "345px" }}
    >
      <img 
        src={src}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://via.placeholder.com/300x180?text=No+Image";
        }}
        className="card-img-top"
        alt="news"
      />

      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">{description}.</p>
        <a href={url} className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
