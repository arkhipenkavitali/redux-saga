import React from 'react';
import {connect} from "react-redux";
import Post from "./Post";

const Posts = ({syncPosts}) => {
    return (
        <div>
            {!syncPosts.length ? <p>No POSTS</p> : syncPosts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        syncPosts: state.posts.posts
    }
}

export default connect(mapStateToProps, null)(Posts);