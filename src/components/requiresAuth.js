import React from 'react';
import { connect } from 'react-redux';

export default function (ComposedComponent) {
    class Authenticate extends React.Component {
        componentDidMount() {
            this.checkAndRedirect();
        }

        componentDidUpdate() {
            this.checkAndRedirect();
        }

        checkAndRedirect() {
            const { isLoaded, isAuthenticated } = this.props;

            if (isLoaded && !isAuthenticated) {
                this.props.history.push("/signin")
            }
        }

        render() {
            return (
                <React.Fragment>
                    {this.props.isAuthenticated ? <ComposedComponent {...this.props} /> : null}
                </React.Fragment>
            );
        }
    }

    const mapStateToProps = (state) => {
        return {
            isLoaded: state.firebase.auth.isLoaded,
            isAuthenticated: state.firebase.auth.uid
        };
    };

    return connect(mapStateToProps)(Authenticate);
}