import React, { Component } from 'react'

class Productpanel extends Component {
    constructor(){
        super();
        this.state={
            title:'',
            sellerNumber:'',
            description:''


        }
    }
    submit()
    {
        let url="https://petswonder.co.in/petswonder/api/productUpload/findProductById?";
        let data=this.state;
        fetch(url,{
            method:'POST',
            header:{
                "Content-Type":"application/json",
                "Accept":"application/json"

            },
            body:JSON.stringify(data)
        }).then((result)=>{ result.json().then((resp)=>
            {
                console.warn("resp",resp)
                alert("Data is submitted")
            })}
        )
    }
    
    render() {
        return (
            <div className="container product-container w-75">
                <h1 className="text-center py-4 title">Products Add</h1>
                <div className="panel-border ">
                    <input type="text" value={this.state.title} name="title" className="input-txt"
                    onChange={(data)=>{this.setState({title:data.target.value})} }/> <br/> <br/>

                    <input type="text" value={this.state.sellerNumber} name="sellerNumber" className="input-txt"
                    onChange={(data)=>{this.setState({sellerNumber:data.target.value})} }/> <br/> <br/>

                    <input type="text" value={this.state.description} name="description" className="input-txt"
                    onChange={(data)=>{this.setState({description:data.target.value})} }/> <br/> <br/>

                    <button onClick={()=>{this.submit()}} className="btn btn-primary submit-btn ">Submit</button>
                </div>
            </div>
        )
    }
}
export default Productpanel;