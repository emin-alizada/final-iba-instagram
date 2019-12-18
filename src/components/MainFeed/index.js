import React, {Component} from 'react';
import Feed from "./Feed";
import MainFeedProfile from "./MainFeedProfile";
import Navbar from "../sharedComponents/Navbar";

class MainFeed extends Component {
    render() {
        return (
            <div>
                {/*<Feed/>*/}
                <MainFeedProfile/>
            </div>
        );
    }
}

export default MainFeed;