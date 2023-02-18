import "./propertyList.css"

function PropertyList() {
  return (
    <div className="pList">
        <div className="pListItem">
            <img src="https://picsum.photos/id/10/150" alt="" className="pListImg" />
        <div className="pListTitles">
            <h1>Hotels</h1>
            <h2>233 hotels</h2>
        </div>
        </div>
        <div className="pListItem">
            <img src="https://picsum.photos/id/28/150" alt="" className="pListImg" />
        
        <div className="pListTitles">
            <h1>Resorts</h1>
            <h2>245 resorts</h2>
        </div>
        </div>
        <div className="pListItem">
            <img src="https://picsum.photos/id/11/150" alt="" className="pListImg" />
        
            <div className="pListTitles">
                <h1>Apartment</h1>
                <h2>267 apartment</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://picsum.photos/id/12/150" alt="" className="pListImg" />
        
            <div className="pListTitles">
                <h1>Villas</h1>
                <h2>109 villas</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://picsum.photos/id/13/150" alt="" className="pListImg" />
        
            <div className="pListTitles">
                <h1>Canons</h1>
                <h2>103 canons</h2>
            </div>
        </div>
        
    </div>
  )
}

export default PropertyList
