import React, { Component } from 'react';
import axios from 'axios';
import RandomImage from './RandomImage';
import AllImages from './AllImages';

export default class GetImage extends Component {
    state = {
        status:"",
        url: "",
        id: ""
    }
    componentDidMount(){
        const id = this.props.match.params.id;
        console.log(id);
        
        if(id==="images"){
            this.setState({
                status: "all"
            })
            
        }         
        else{
            this.getInfo();
        }

        
    }

    getInfo = async() => {
        const id = this.props.match.params.id;
        this.setState({
            id: id
        })
        const url =  `${window.apiHost}/api/random_image/image/get-info`;
        const data = {
            id: id
        }
        const resp = await axios.post(url,data);
        console.log(resp.data);
        if(resp.data.status==="notFound"){
            this.setState({
                status: "true"
            })
        }else{
            this.setState({
                status:"false",
                url: resp.data.imageurl
            })
        }
    }

    

    render() {
        return (
            <div>
                { this.state.status==="all" ? <AllImages /> 
                 : this.state.status==="true" ? <RandomImage id={this.state.id}/> : <><img src={this.state.url} alt="random"/></>

                }
            </div>
        )
    }
}

