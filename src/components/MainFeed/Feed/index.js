import React, {Component} from 'react';
import "./feed.scss"
import Preloader from "../../sharedComponents/Proloader";
import Icon from "../../sharedComponents/Icon";

class Feed extends Component {
    constructor() {
        super();
        this.state = {
            isLoaded: false,
            posts: [],
        };
    }

    componentDidMount() {
        const fetchData = async () => {
            await fetch("https://my-json-server.typicode.com/emin-alizada/fakeServer/posts")
                .then(result => result.json())
                .then( async posts => {
                    for (let post of posts) {
                        await fetch(`https://my-json-server.typicode.com/emin-alizada/fakeServer/users/${post.user_id}`)
                            .then(result => result.json())
                            .then(json => {
                                post.author_user = json;
                            });
                    }
                    this.setState({
                        isLoaded: true,
                        posts: posts,
                    });
                });
        };
        fetchData();
    };


    render() {
        return (
            <div className="feed">
                {this.state.isLoaded ? this.state.posts.map((item, i) => (
                        // console.log('item === ', item);

                    <div key={item.id} className="feed-post">
                        <div className="feed-post-header">
                            <img src={item.author_user.profile_photo} className="feed-post-header-pp" alt=""/>
                                <div className="feed-post-header-text">
                                    <h3 className="feed-post-header-text-username">{item.author_user.username}</h3>
                                    <p className="feed-post-header-text-date">{item.date} 09:41</p>
                                </div>
                                <Icon name={"sharePost"}/>
                                <Icon name={"options"}/>
                        </div>
                        <img src={item.img_url} className="feed-post-photo" alt=""/>
                            <div className="feed-post-footer">
                                <div className="feed-post-footer-icon"><Icon name={"likePost"}/></div>
                                <div className="feed-post-footer-icon"><Icon name={"commentPost"}/></div>
                                <div className="feed-post-footer-icon"><Icon name={"save"}/></div>
                            </div>
                        <div className="feed-post-comment-container">
                            <div className="feed-post-comment">
                                <p className="feed-post-comment-username">{item.author_user.username}</p>
                                <p className="feed-post-comment-itself">{item.description}</p>
                            </div>
                            <a className="feed-post-comment-view-all" href="#">view all Comments</a>
                            <form className="feed-post-comment-new" action="">
                                <input type="text" className="feed-post-comment-new-text"
                                       placeholder="write comment..."/>
                                    <input type="submit" value="send" className="feed-post-comment-new-submit"/>
                            </form>
                        </div>
                    </div>
                )) : <Preloader/>}
            </div>
        );
    }

    async function() {

    }
}

export default Feed;