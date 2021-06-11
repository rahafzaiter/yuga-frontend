import React, { Component } from "react";

class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state={
          value:"hello in text",
          value1:"hello in text",
          isGoing:false,
          numberOfGuests:2
        };
      this.handleChange=this.handleChange.bind(this);
      this.handleSubmit=this.handleSubmit.bind(this);
      this.handleChangeSelect=this.handleChangeSelect.bind(this);
      this.handleSubmitSelect=this.handleSubmitSelect.bind(this);
      this.fileInput=React.createRef();
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handeSubmitCheck=this.handeSubmitCheck.bind(this);

    }
    
    handleChange(event){
        this.setState({value:event.target.value});
    }

    handleChangeSelect(event){
        this.setState({value1:event.target.value}),
        this.setState({value:event.target.value});
    }
    handleSubmit(event){
        event.preventDefault();
        alert('A name was submitted:'+
        this.state.value)  
    }

    handleSubmitSelect(event) {
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
        this.setState({value:"hello in text"});
    
      }

    handleSubmitFile(event) {
        event.preventDefault();
        alert(`Selected file - ${this.fileInput.current.files[0].name}` );
        
      }

      handleInputChange(event){
          const target=event.target;
          const value=target.type==='checkbox' ?
          target.checked:target.value;
          const name=target.name;
          this.setState({[name]:value});
      }

      handeSubmitCheck(event){
        
        alert("is Going="+this.state.isGoing+" "+"no of guests"+this.state.numberOfGuests);
        event.preventDefault();

        
        //  this.setState({isGoing:false});
        //  this.setState({numberOfGuests:2});
        
      }

render(){
    return (
        <div>

    <div>   
      <form onSubmit={this.handleSubmit}>
          <label>
              Name:
              <input type="text" value={this.state.value}
              onChange={this.handleChange}/>
               {/* <textarea value={this.state.value} onChange={this.handleChange}/> */}
          </label>
          <input type="submit" value="Submit" />
      </form>
      </div>

      <div>
      <form onSubmit={this.handleSubmitSelect}>
      <label>
      Pick your favorite flavor:
      <select  value={this.state.value} onChange={this.handleChangeSelect}>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">lime</option>
          <option value="coconut">coconut</option>
          <option value="mango">mango</option>
      </select>
      </label>
      <input type="submit" value="Submit" />
     </form>
    </div> 
    <div>
        <form onSubmit={this.handeSubmitFile}>
            <label>
            Upload file:
            <input type="file" ref={this.fileInput}/>
            </label>
            <br/>
            <button type="submit">Submit</button>
        </form>
    </div>
<br/>
    {/* two inputs */}
    <div>
        <form onSubmit={this.handeSubmitCheck}>
        <label>
          Is Going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
           </label>
            <label>
            Number of guests:
                <input 
                name="numberOfGuests"
                type="number"
                value={this.state.numberOfGuests}
                onChange={this.handleInputChange}/>
            </label>
            <p className="Dialog-message">
        Thank you for visiting our spacecraft!
      </p>
            <button type="submit" >Submit</button>
        </form>
     </div>   
   
</div>
   
    );
   }
} 
export default NameForm 
 
