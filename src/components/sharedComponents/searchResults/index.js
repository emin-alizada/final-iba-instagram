import React from "react";
import "./css/searchResult.scss"
import './css/searchResults-media.scss'
import SingleSearchResult from "./singleSearchResult";


class SearcResults extends React.Component{
    render() {
        console.log(this.props.location.state.response);
        return(
            <div className={"search-results"} onClick={event=>{
                if(event.target===event.currentTarget){
                    this.props.history.goBack();
                }
            }}>
                <div className="search-results-window">
                    {this.props.location.state.response.map((singleSearch, i ) => <SingleSearchResult historyProps={this.props.history} data={singleSearch} key={i}/>)}
                </div>
            </div>
        )
    }
}
export  default SearcResults;