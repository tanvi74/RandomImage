import React, { Component } from 'react';
import axios from 'axios';

export default class AllImages extends Component {
    state={
        imageData : []
    }
    componentDidMount(){
        this.getInfo();
    }
    getInfo = async() =>{
        const url =  `${window.apiHost}/api/image/all-images`;
        const apiKey = "asdfghjkl1234567890";
        const data = {apiKey}
        const resp = await axios.post(url,data);
        console.log(resp.data);
        this.setState({
            imageData: resp.data
        })
        

    }
    render() {
        var flag = 0;
        if(this.state.imageData.length!==0){
            var imagedisplay = this.state.imageData.imageURL.map((item,i)=>{   
                console.log(item.urlofimage);
                flag=1;
                return(
                    <div key={i}>
                        <h4>/{item.id}</h4>
                        <img src={item.urlofimage} alt="Random"/> 
                    </div>  
                )
            }); 
        }
        
        return (
            <div>
             { flag ? imagedisplay : <><h1>Images</h1></>}
            </div>
        )
    }
}
