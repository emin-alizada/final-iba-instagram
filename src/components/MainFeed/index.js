import React, {Component} from 'react';
import Feed from "./Feed";
import MainFeedProfile from "./MainFeedProfile";

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