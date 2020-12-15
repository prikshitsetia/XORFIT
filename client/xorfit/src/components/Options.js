import React, { Component } from 'react'
import yoga from '../yoga1.jpg'

export default class Options extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             time:'',
             option:'meditation'
        }
    }
    

    handleSubmit=async (e)=>{
        e.preventDefault();

        console.log(this.state)
       
    }

    render() {
        return (
            <div>
                <br/><br/>
                <div className="row">
                    

                    <div className="col-md-6">
                        <img src={yoga} className="imageAnim" />
                    </div>

                    
                    <div className="col-md-6" >
                        <br/>

                        <div className="container" style={{width:"550px",background:"black",borderRadius:"8px",marginRight:"280px",marginTop:"70px"}}>

                            <form onSubmit={this.handleSubmit} className="OptionForm" style={{}}> 
                            <br/>
                            <h1 style={{fontFamily:"Catamaran"}}></h1>

                            <div className="form-group m-1">

                                <label style={{float:"left"}}>How much time do you have?</label>
                                <input  
                                    placeholder="time" 
                                    onChange={(e)=>{this.setState({time:e.target.value})}}
                                    className="form-control"
                                />

                                </div>

                                <div className="form-group m-1">

                                    <label style={{float:"left"}}>Which activity would you preffer?</label>
                                    <select className="form-control" value={this.state.option} 
                                    onChange={(e)=>{this.setState({option:e.target.value})}}>

                                    <option value="meditation">Meditation</option>
                                    <option value="yoga">Yoga</option>
                                        
                                    </select> 


                                </div>

                                <br/>
                                <button className="btn btn-primary  btn-block m-2" type="submit" style={{border:"none",color:"white",background:"#a30a3a"}}>
                                    Submit

                                </button>

                                <br/>


                            
                            </form> 

                        </div>

                        

                    </div>

                </div>


                
            </div>
        )
    }
}
