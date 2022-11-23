import React from "react";
import axios from "axios";

export default class AddNew extends React.Component {
    base_url = "http://localhost:8000/";

    state = {
        name: "",
        countryId: "",
        brandId: "",

        countries: [],
        brands: []
    }

    async componentDidMount() {
        let brandsResponse = await axios.get(this.base_url + "brands");
        // console.log(brandsResponse.data);
        let countriesResponse = await axios.get(this.base_url + "countries");
        // console.log(countriesResponse.data);

        this.setState({
            countries: countriesResponse.data,
            brands: brandsResponse.data
        })
    }

    render() {
        return (
            <React.Fragment>
                <h1>Add a new tool here</h1>
                <input ></input>
            </React.Fragment>
        )
    }
}