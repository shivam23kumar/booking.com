import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img src="https://picsum.photos/id/13/250/200" alt="no img available" className="featuredImg"/>
        <div className="featuredTitles">
            <h1>Dublin</h1>
            <h2>123 Properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://picsum.photos/id/18/250/200" alt="no img available" className="featuredImg"/>
        <div className="featuredTitles">
            <h1>Reno</h1>
            <h2>542 Properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://picsum.photos/id/15/250/200" alt="no img available" className="featuredImg"/>
        <div className="featuredTitles">
            <h1>Austin</h1>
            <h2>243 Properties</h2>
        </div>
      </div>
    </div>
  )
}

export default Featured

