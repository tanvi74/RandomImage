import React, { Component } from 'react';
import axios from 'axios';
const { Picsum } = require('picsum-photos')

export default class RandomImage extends Component {
    state = {
        imageURL: ""
    }
    componentDidMount(){
        if(this.props.id!==undefined)
                this.setInfo();
        else    
                this.getURL();
            
    }

    getURL = async() =>{
        const image = await Picsum.random()
        this.setState({
            imageURL: image.download_url
        })
    }

    setInfo = async() => {
        console.log(this.props.id);
        const image = await Picsum.random()
        this.setState({
            imageURL: image.download_url
        })
        console.log(this.state.imageURL);
        const url =  `${window.apiHost}/api/image/store`;
        const data = {
            id: this.props.id,
            imageURL: this.state.imageURL
        }
        const resp = await axios.post(url,data);
        console.log(resp.data);
    }

    render() {
        return (
            <div>
                <img src = {this.state.imageURL} alt = "random" />
            </div>
        )
    }
}
