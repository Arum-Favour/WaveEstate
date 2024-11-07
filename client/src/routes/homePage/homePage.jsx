import { useContext } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";
import { AuthContext } from "../../context/AuthContext";

function HomePage() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
          <p>
<<<<<<< HEAD
            WaveEstate is a sophisticated real estate listing platform that
            streamlines the process of connecting buyers, sellers, and renters
            with premium properties. Featuring advanced search capabilities,
            interactive mapping, and a seamless user experience, WaveEstate is
            designed to make property discovery and transactions efficient,
            secure, and straightforward.
=======
           WaveEstate is a sophisticated real estate listing platform that streamlines the process of connecting buyers, sellers, and renters with premium properties. Featuring advanced search capabilities, interactive mapping, and a seamless user experience, WaveEstate is designed to make property discovery and transactions efficient, secure, and straightforward.!
>>>>>>> e57e3b9eb5092d1c10f2773dfc1dc43dada60d4c
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>2000+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
