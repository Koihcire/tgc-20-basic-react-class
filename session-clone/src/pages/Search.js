import React from "react";
import "../index.css"

export default class Search extends React.Component {


    state = {
        isDropboxOpen: false //CUSTOM DROPDOWN WITH TRANSITION
    }

    // CUSTOM DROPDOWN WITH TRANSITION
    toggleDropbox() {
        if (!this.state.isDropboxOpen) {
            this.setState({
                isDropboxOpen: true
            })
        }
        if (this.state.isDropboxOpen) {
            this.setState({
                isDropboxOpen: false
            })
        }
    }

    render() {
        return (
            <React.Fragment>
                <h1>This is the Search Page</h1>

                {/* CUSTOM DROPDOWN WITH TRANSITION */}
                <div className="container">
                    <h4>Click to see drop down box with transition</h4>
                    <button className="btn btn-primary btn-sm" onClick={this.toggleDropbox.bind(this)}>Click</button>
                    <div id="dropboxContainer">
                        <div id="dropbox" className={this.state.isDropboxOpen ? "showDropbox" : "hideDropbox"}></div>
                    </div>
                </div>


            </React.Fragment>
        )
    }
}