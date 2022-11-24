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


            //JOIN AT REACT METHOD TO COMBINE MULTIPLE COLLECTIONS AT REACT SIDE
            // let brandsResponse = await axios.get(this.base_url + "brands");
            // console.log(brandsResponse.data);
            // let countriesResponse = await axios.get(this.base_url + "countries");
            // console.log(countriesResponse.data);

            // for (let listing of listingsData){
            //     for (let brand of brandsResponse.data){
            //         if (listing.brandId === brand._id){
            //             listing.brand = brand.brandName;
            //             break;
            //         }
            //     }
            //     for (let country of countriesResponse.data){
            //         if (listing.countryId === country._id){
            //             listing.country = country.country;
            //             break;
            //         }
            //     }
            // }

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
                                <td>{listing.country[0].country}</td>
                                <td>{listing.brand[0].brandName}</td>
                                {/* <td>{listing.country}</td>
                                <td>{listing.brand}</td> */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </React.Fragment>
        )
    }
}