import React from "react";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Search from "./pages/Search";
import AddNew from "./pages/AddNew";
import My from "./pages/My";

export default class Main extends React.Component {

    state = {
        activePage: "landing"
    }

    renderContent(){
        if (this.state.activePage === "landing"){
            return <Landing />;
        }
        if (this.state.activePage === "search"){
            return <Search />;
        }
        if (this.state.activePage === "addNew"){
            return <AddNew />
        }
        if (this.state.activePage === "my"){
            return <My />
        }
    }

    changePage(active){
        this.setState({
            activePage: active
        })
    }

    render(){
        return (
            <React.Fragment>
                <Navbar changePage={this.changePage.bind(this)}
                activePage={this.state.activePage}/>
                {this.renderContent()}
            </React.Fragment>
        )
    }
}