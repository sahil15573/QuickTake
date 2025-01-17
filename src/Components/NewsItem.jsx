import image from '../assets/news-9994192.webp'

const NewsItem = ({title, description, src, url}) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth: "340px"}}>
  <img src={src?src:image} style={{height:"auto", width:"100%", object:"cover"}} className="card-img-top" alt="..."/>
  <div className="card-body">
  <h5 className="card-title">
  {title && title.length > 50 ? title.substring(0, 50) : title || "Headline"}
</h5>

    <p className="card-text">
  {description && description.length > 90 ? description.substring(0, 90) : description || "Article"}
</p>

    <a href={url} className="btn btn-primary">Read More</a>
  </div>
</div>
  )
}

export default NewsItem