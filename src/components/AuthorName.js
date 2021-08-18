import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';
class AuthorName extends Component {
    componentDidMount() {
        this.props.fetchUser(this.props.userId);
    }
    render() {
        // just returning the user that we only care about
        const author = this.props.users.find(user => {
            return user.id === this.props.userId;
        });
        if( ! author ) {
            return null;
        }
        return (
            <div classname="header">
                { author.name }
            </div>
        );
    };
};
const mapStateToProps = (state) => {
    return { users: state.users };
};
export default connect(mapStateToProps, {
    fetchUser
})(AuthorName);