import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Featured from "../../components/featured/Featured";
import PropertyList from "../../components/propertyList/PropertyList";
import MoreProp from "../../components/moreProp/MoreProp";
import IndianFeature from "../../components/indianFeature/IndianFeature";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import "./home.css";

const Home=()=>{
    return(
        <div>
            <Navbar/>
            <Header/>
            <div className="homeContainer">
                <Featured/>
                <h1 className="homeTitle">Browse by property type</h1>
                <PropertyList />
                <h1 className="homeTitle">Homes guests love</h1>
                <MoreProp/>
                <h1 className="homeTitle1">Explore India</h1>
                <IndianFeature/>
                <MailList/>
                <Footer/>
            </div>
        </div>
    )
}

export default Home