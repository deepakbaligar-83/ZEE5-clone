import React, { useState, useRef, useEffect  } from "react";
import "./Navbar.css";
import AppsIcon from "@mui/icons-material/Apps";
import SearchIcon from "@mui/icons-material/Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars} from "@fortawesome/free-solid-svg-icons";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import CheckBoxOutlineBlankOutlinedIcon from "@mui/icons-material/CheckBoxOutlineBlankOutlined";

const languages = [
  { id: 1, name: "Hindi", native: "हिंदी" },
  { id: 2, name: "English", native: "English" },
  { id: 3, name: "Kannada", native: "ಕನ್ನಡ" },
  { id: 4, name: "Marathi", native: "मराठी" },
  { id: 5, name: "Telugu", native: "తెలుగు" },
  { id: 6, name: "Tamil", native: "தமிழ்" },
  { id: 7, name: "Malayalam", native: "മലയാളം" },
];

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedLanguages, setSelectedLanguages] = useState([1, 2, 3]); 

  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const [isSearchActive, setIsSearchActive] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchActive(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }

   
    document.addEventListener("mousedown", handleClickOutside);
    
   
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  
  const toggleLanguage = (id) => {
    setSelectedLanguages((prev) =>
      prev.includes(id) ? prev.filter((lang) => lang !== id) : [...prev, id]
    );
  };

  return (
    <>
      <nav>
        <div className="nav-logo">
          <div className="img-logo">
            <img
              src="https://www.zee5.com/images/ZEE5_logo.svg?ver=4.17.0"
              title="ZEE5 Logo"
              alt="ZEE5 Logo"
            />
          </div>
          <div className="nav-links">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Shows</a></li>
              <li><a href="#">Movies</a></li>
              {/* <li><a className="App-icon" href="#"><AppsIcon /></a></li> */}
              <li className="dropdown" ref={dropdownRef}>
              <li className="dropdown-btn" onClick={() => setShowDropdown(!showDropdown)}>
                <AppsIcon />
              </li>

            {showDropdown && (
              <ul className="dropdown-menu">
                <li><a href="#">TV Shows</a></li>
                <li><a href="#">Sports</a></li>
                <li><a href="#">Web Series</a></li>
                <li><a href="#">Rent</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Live TV</a></li>
                <li><a href="#">Kids</a></li>
              </ul>
            )}
          </li>
            </ul>
          </div>
        </div>

        <div className="right-section">
          <div className="search-wrapper" ref={searchRef}>
            {/* <input
              id="search"
              type="text"
              placeholder="Search for Movies, Shows, Channels etc."
            /> */}
               <SearchIcon
                  className="search-icon"
                  onClick={() => setIsSearchActive(true)}
                />

                
                <input
                  type="text"
                  className={`search-input ${isSearchActive ? "active" : ""}`}
                  placeholder="Search for Movies, Shows, Channels..."
                />
          </div>

          {/* Language Selector Button */}
          <div className="language-btn" data-tooltip="Change Language" onClick={() => setShowModal(true)}>
            <span className="btn-eng">A</span>
            <span className="btn-hin">अ</span>
          </div>

          <div className="loginWrapper">
            <a href="/login">
              <button className="lgn-btn">LOGIN</button>
            </a>
          </div>

          <div className="premium-btn">
            
            <a href="/premium">
            
              <button className="premium">
              <svg fill="#ffffff" viewBox="-2 -4 24 24" 
              xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin"
              class="jam jam-crown-f"><g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round">
              </g><g id="SVGRepo_iconCarrier"><path d="M2.049 1.802L5.854 5.15 9.244.976a1 1 0 0 1 1.565.017l3.235 4.156 3.928-3.396a1 1 0 0 1 1.643.9L18.115 13H1.922L.399 2.7a1 1 0 0 1 1.65-.898zM2 14h16v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z">
              </path></g></svg>
                BUY PLAN</button>
            </a>
          </div>

          <div className="burger-menu">
            <button className="burger">
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        </div>
      </nav>

     
      {showModal && (
        <div className="language-modal" >
          <div className="modal-content" >
            <div className="modal-header" >
              <span>Content Language</span>
              <span>Display Language</span>
            </div>


              <div className="language-options"  >
                {languages.map((lang) => (
                  <div key={lang.id} className="language-option" onClick={() => toggleLanguage(lang.id)}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
                     
                      <span>{lang.native} {lang.name}</span>

                      
                      {selectedLanguages.includes(lang.id) ? (
                        <CheckBoxOutlinedIcon style={{ color: "#8230c6" }} />
                      ) : (
                        <CheckBoxOutlineBlankOutlinedIcon style={{ color: "#8230c6" }} />
                      )}
                    </div>
                  </div>
                ))}
              </div>


            <button className="apply-btn" onClick={() => setShowModal(false)}>APPLY</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
