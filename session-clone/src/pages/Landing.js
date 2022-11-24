import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"

export default class Landing extends React.Component {
    base_url = "http://localhost:8000/";
    state = {
        listings: [],
    }

    async componentDidMount(){
        try{
            let listingResponse = await axios.get(this.base_url + "listings");
            console.log(listingResponse.data);
            let listingsData = listingResponse.data;

            this.setState({
                listings: listingsData
            })
        }catch(e){
            console.log(e)
        }
    }

    render(){
        return(
            <React.Fragment>
                <h1>Landing Page. These are our listings</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Country</th>
                            <th>Brand</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.listings.map(listing => (
                            <tr>
                                <td>{listing.name}</td>
                                
                                {/* IF USING AGGREGATE */}
                                {/* <td>{listing.country[0].country}</td>
                                <td>{listing.brand[0].brandName}</td> */}

                                {/* IF USING MANUAL JOIN */}
                                <td>{listing.country}</td>
                                <td>{listing.brand}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </React.Fragment>
        )
    }
}