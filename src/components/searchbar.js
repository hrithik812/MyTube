import React, { Component } from 'react'

class Search extends Component {
    // state = {
    //     searchTerm:''
    // }
    // handleChange = (event) => {
    //     const value = event.target.value;

    //     const newState={
    //         searchTerm:value
    //     }
    //     this.setState(newState)
    //     // console.log("Value---", value);
    // }

    render() {
        const { handleChange } = this.props;
        return (
            <div style={{ margin: '20px', textAlign: 'center' }}>
                <input type="text" onChange={handleChange} style={{ width: '75%' }} />
            </div>
        );
    }
}

export default Search;