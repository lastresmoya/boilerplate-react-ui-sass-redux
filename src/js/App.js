import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import AOS from 'aos';

import {
    activateGeod,
    closeGeod,
} from './redux';

import HomePage from './pages/HomePage';

class AppContainer extends Component {
    componentDidMount() {
        AOS.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-out-sine',
            delay: 100,
        })
    }

    render() {
        return (
            <BrowserRouter>
                <div className="text-white">
                    <Route exact path='/' component={HomePage} />
                    {/* <Route path="/clinician" render={() => <Dashboard {...{ currentDash: 'clinician' }} />} />
                    <Route path="/doctor" render={() => <Dashboard {...{ currentDash: 'doctor' }} />} /> */}

                    {/* Test Redux */}
                    {this.props.geod.title || 'hello world'}
                    {this.props.geod.title ?
                        <button onClick={this.props.closeGeod}>
                            Exit Geod
                        </button> :
                        <button onClick={() => this.props.activateGeod({ title: 'I am a geo dude!' })}>
                            Click Me!
                        </button>
                    }
                </div>
            </BrowserRouter>
        );
    }
}

// AppContainer.js
const mapStateToProps = (state, ownProps) => ({
    geod: state.geod,
});

const mapDispatchToProps = {
    activateGeod,
    closeGeod,
};

const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContainer);

export default App;