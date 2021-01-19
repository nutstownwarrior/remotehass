import React, { Component } from 'react';
import 'fontsource-roboto';
import SignInPage from '../SignIn/signin'
import HomePage from '../Home/home'
import { withFirebase } from '../Firebase'

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            authUser: null,
        }
    }

    componentDidMount() {
        this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
            authUser
                ? this.setState({ authUser })
                : this.setState({ authUser: null });
        });
    }

    componentWillUnmount() {
        this.listener();
    }

    render() {
        let authUser = this.state.authUser;
        return (
            <div>
                {authUser ? <HomePage /> : <SignInPage />}
            </div>
        )
    }
}

export default withFirebase(App);