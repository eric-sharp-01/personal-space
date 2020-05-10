import React from 'react';

import {
    Router,
    Switch,
    Route
} from "react-router-dom";
import { connect } from 'react-redux';
import { createBrowserHistory } from "history";

import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import Home from './components/Home';
import Navbar from './components/Navbar';
import Resume from './components/Resume';

let mapStateToProps = (state) => {
    return {
        isModalOpen: state.isModalOpen,
        modalContent: state.modalContent
    }
}

let mapDispatchToProps = {
    openModal: (value) => ({type: "OPEN_MODAL", payload: value}),
    closeModal: () => ({type: "CLOSE_MODAL", payload: null})
}

let connector = connect(mapStateToProps, mapDispatchToProps);

const customHistory = createBrowserHistory();

class App extends React.Component {
    constructor(props){
        super(props);
    }

    closeModal = () => {
        this.props.closeModal();
    }

    render() {
        return (
            <Router history={customHistory}>
                <Navbar />
                <div className="main">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/resume" component={Resume} />
                    </Switch>
                </div>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={"modal"}
                    open={this.props.isModalOpen}
                    onClose={this.closeModal}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500
                    }}
                >
                    <Fade in={this.props.isModalOpen}>
                        <div className={"modal-main"}>
                            <p id="transition-modal-description">{this.props.modalContent}</p>
                        </div>
                    </Fade>
                </Modal>
            </Router>
        );
    }
}

// wrapping the component within the connect HOC and calling the default function directly

export default connector(App);