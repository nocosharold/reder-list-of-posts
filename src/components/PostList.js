import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
class PostList extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }
    render() {
        console.log(this.props.posts);

        let posts = this.props.posts.map((post) => 
        <div className="ui icon message" key={ post.id }>
            <i className="user icon"></i>
            <div className="content">
                <div className="header">{ post.title }</div>
                <p>{ post.body }</p>
            </div>
        </div>)

        return <div>
            <div className="ui container">
                { posts }
            </div>
        </div>;
    };
};
const mapStateToProps = (state) => {
    return { posts: state.posts };
};
export default connect(mapStateToProps, {
    fetchPosts
})(PostList); 
