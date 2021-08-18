const Post = (props) => {
    let { title, body } = this.props.posts;
    
    return (
        <>
            <i className="user icon"></i>
            <div className="content">
                <div className="header">{ title }</div>
                <p>{ body }</p>
            </div>
        </>
    );
};
export default Post;