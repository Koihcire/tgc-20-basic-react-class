import React from "react";
import axios from "axios";

export default class AddNew extends React.Component {
    base_url = "http://localhost:8000/";

    state = {
        name: "",
        countryId: "",
        brandId: "",

        countries: [],
        brands: [],

        newCountry: ""
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

    updateFormField = (e) => {
        if (e.target.type === "checkbox") {
            let currentValues = this.state[e.target.name];
            let modifiedValues;
            if (!currentValues.includes(e.target.value)) {
                modifiedValues = [...currentValues, e.target.value];
            } else {
                modifiedValues = currentValues.filter((element) => {
                    return element !== e.target.value
                })
            }
            this.setState({
                [e.target.name]: modifiedValues
            })
        } else {
            this.setState({
                [e.target.name]: e.target.value
            })
        }
    }

    async submit(){
        //initialise the attributes
        let name = this.state.name;
        let countryId = this.state.countryId;
        let brandId = this.state.brandId;

        //if other country is selected, then create the entry for the country first
        if (countryId === "other"){
            let response = await axios.post(this.base_url + "create-country" ,{
                country: this.state.newCountry
            })
            console.log(response);
            countryId = response.data.insertedId;
        }

        let response = await axios.post(this.base_url + "create-listing", {
            name,
            countryId,
            brandId
        })

        console.log(response);

        this.props.changePage("landing");

    }

    render() {
        return (
            <React.Fragment>
                <h1>Add a new tool here This is a test this</h1>

                <h4>Listing Name</h4>
                <input name="name" type="text" className="form-control" value={this.state.name} onChange={this.updateFormField}></input>

                <h4>Country</h4>
                <select className="form-select" name="countryId" onChange={this.updateFormField}>
                    <option selected>Select One</option>
                    {this.state.countries.map(country => (
                        <React.Fragment>
                            <option value={country._id}>{country.country}</option>
                        </React.Fragment>
                    ))}
                    <option value="other">Other</option>
                </select>
                {/* conditionally render an input box for user to key in country name, if they select other */}
                {this.state.countryId === "other" ?
                    <div>
                        <input name="newCountry" type="text" className="form-control" value={this.state.newCountry} onChange={this.updateFormField} placeholder="Add New Country"></input>
                    </div> : ""
                }

                <h4>Brand</h4>
                <select className="form-select" name="brandId" onChange={this.updateFormField}>
                    <option selected>Select One</option>
                    {this.state.brands.map(brand => (
                        <React.Fragment>
                            <option value={brand._id}>{brand.brandName}</option>
                        </React.Fragment>
                    ))}
                </select>
                <button className="btn btn-primary" onClick={this.submit.bind(this)}>Submit</button>
            </React.Fragment>
        )
    }
}
