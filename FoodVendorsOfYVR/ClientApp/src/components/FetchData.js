import React, { Component } from 'react';

export class FetchData extends Component {
  static displayName = FetchData.name;

  constructor (props) {
    super(props);
    this.state = { foodVendors: [], loading: true };

    fetch('api/FoodVendor/FoodVendors')
      .then(response => response.json())
      .then(data => {
        this.setState({ foodVendors: data, loading: false });
      });
  }

  static renderFoodVendorsTable (foodVendors) {
    return (
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Longitude</th>
            <th>Latitude</th>
          </tr>
        </thead>
        <tbody>
          {foodVendors.map(vendor =>
            <tr key={vendor.key}>
              <td>{vendor.business_name}</td>
              <td>{vendor.description}</td>
              <td>{vendor.longitude}</td>
              <td>{vendor.latitude}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render () {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
        : FetchData.renderFoodVendorsTable(this.state.foodVendors);

    return (
      <div>
        <h1>Food Vendors</h1>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
  }
}
