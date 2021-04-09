import React from "react";
import "./SearchResults.css";
import useGoogleSearch from "../useGoogleSearch";
import { useStateValue } from "../StateProvider";
import Response from "../response";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";

function SearchResults() {
  const [{ term }, dispatch] = useStateValue();
  //LIVE API CALL
  const { data } = useGoogleSearch(term);

  /*   //Mock API CALL
  const data = Response; */
  console.log(data);
  return (
    <div className="searchResults">
      <div className="searchResults__header">
        <Link to="/">
          <img
            className="searchResults__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
            alt="googleImage"
          />
        </Link>
        <div className="searchResults__headerBody">
          <Search hideButtons />

          <div className="searchResults__options">
            <div className="searchResults__optionsLeft">
              <div className="searchResults__option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>

              <div className="searchResults__option">
                <DescriptionIcon />
                <Link to="/news">News</Link>
              </div>
              <div className="searchResults__option">
                <ImageIcon />
                <Link to="/images">Images</Link>
              </div>
              <div className="searchResults__option">
                <LocalOfferIcon />
                <Link to="/shopping">Shopping</Link>
              </div>
              <div className="searchResults__option">
                <RoomIcon />
                <Link to="/maps">Maps</Link>
              </div>
              <div className="searchResults__option">
                <MoreVertIcon />
                <Link to="/more">More</Link>
              </div>
            </div>

            <div className="searchResults__optionsRight">
              <div className="searchResults__option">
                <Link to="/settings">Settings</Link>
              </div>
              <div className="searchResults__option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {term && (
        <div className="searchPage__results">
          <p className="searchPage__resultCount">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds) for {""}
            <strong>{term}</strong>
          </p>

          {data?.items.map((item) => (
            <div className="searchPage__result">
              <a className="searchPage__resultLink" href={item.link}>
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      className="searchPage__resultImage"
                      src={
                        item.pagemap?.cse_image?.length > 0 &&
                        item.pagemap?.cse_image[0]?.src
                      }
                      alt=""
                    />
                  )}
                {item.displayLink} ▽
              </a>
              <a className="searchPage__resultTitle" href={item.link}>
                <h2>{item.title}</h2>
              </a>

              <p className="searchPage__resultSnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchResults;
