import React from "react";

export default class Navbar extends React.Component {

    render() {
        return (
            <React.Fragment>
                 <div id="nav-bar" className="container-fluid">
                        <ul className="nav nav-tabs navbar-expand" >
                            <li className="nav-item">
                                <div className={"nav-link" + (this.props.activePage === "landing" ? " active" : "")} aria-current="page" onClick={() => this.props.changePage("landing")}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16">
                                        <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z" />
                                    </svg> <span className="navTitle">Home</span>
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className={"nav-link" + (this.props.activePage === "search" ? " active" : "")} aria-current="page" onClick={() => this.props.changePage("search")}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                    </svg> <span className="navTitle">Search</span>
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className={"nav-link" + (this.props.activePage === "addNew" ? " active" : "")} aria-current="page" onClick={() => this.props.changePage("addNew")}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                    </svg> <span className="navTitle">Add</span>
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className={"nav-link" + (this.props.activePage === "my" ? " active" : "")} aria-current="page" onClick={() => this.props.changePage("my")}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                    </svg> <span className="navTitle">MyListings</span>
                                </div>
                            </li>
                        </ul>
                    </div>
            </React.Fragment>
        )
    }
}