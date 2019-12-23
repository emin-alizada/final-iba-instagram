import React from "react";
import './css/singleSearchResult.scss'
class SingleSearchResult extends React.Component{
    render() {
        return (
            <div className={"single-search-result"}>
                <div className="search-result-user">
                    <img src={require("../../postComment/img/laura-comment.png")} alt="" className="search-result-img"/>
                    <p className="search-result-username">laura.nigger</p>
                </div>
                <button className="search-result-sub-btn">Follow</button>
            </div>
        );
    }
}

export default SingleSearchResult;