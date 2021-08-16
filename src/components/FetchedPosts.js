import React from 'react';
import Post from "./Post";
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts} from "../redux/postsReducer";
import {showLoader} from "../redux/loaderReducer";
import Loader from "./Loader";

const FetchedPosts = () => {
    const posts = useSelector(state => state.posts.fetchedPosts)
    const loader = useSelector(state => state.loader.loader)
    const dispatch = useDispatch()

    const showPostsFromServer = () => {
        dispatch(fetchPosts());
    }

    if(loader){
        return <Loader/>
    }

    if(!posts.length) {
        return <button className="btn btn-primary" onClick={showPostsFromServer}>Загрузить</button>
    }

    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

// const mapStateToProps = state => {
//     return {
//         readyPosts: state.posts.fetchedPosts
//     }
// }
//
// const mapDispatchToProps = {
//     fetchPosts
// }

// export default connect(mapStateToProps, mapDispatchToProps)(FetchedPosts);
export default FetchedPosts;