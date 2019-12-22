import React from "react";
import "./css/searchResult.scss"
import SingleSearchResult from "./singleSearchResult";
class SearcResults extends React.Component{
    render() {
        return(
            <div className={"search-results"}>
                <div className="search-results-window">
                    <SingleSearchResult/>
                    <SingleSearchResult/>
                    <SingleSearchResult/>
                </div>
            </div>
        )
    }
}
export  default SearcResults;