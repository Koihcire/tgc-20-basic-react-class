import React from "react";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Search from "./pages/Search";
import AddNew from "./pages/AddNew";
import My from "./pages/My";

export default class Main extends React.Component {

    state = {
        activePage: "Landing"
    }

    renderContent(){
        if (this.state.activePage === "Landing"){
            return <Landing />;
        }
        if (this.state.activePage === "Search"){
            return <Search />;
        }
        if (this.state.activePage === "AddNew"){
            return <AddNew />
        }
        if (this.state.activePage === "My"){
            return <My />
        }

    }

    render(){
        return (
            <React.Fragment>
                <Navbar />
                {this.renderContent()}
            </React.Fragment>
        )
    }
}