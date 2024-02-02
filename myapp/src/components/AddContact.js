import React from 'react'; //class component 
class AddContact extends React.Component {
    state = {
        name: "",
        email:"", 
    };
    add = (e) =>{
       e.preventDefault();
       if(this.state.name =="" || this.state.email =="") {
        alert("all fills are mandatory")
        return;
       } 
       this.props.addContactHandler(this.state);
       this.setState({name:"",email:""}); //to clear the fields 
    }
    render () {
        return (
        <div classNam="main">
            <h2> Add Contact</h2>
            <form className ="form" onSubmit={this.add}>  
                <div className = "field">
                    <label>Name</label>
                    <input type="text" name ="name" placeholder="Name" value={this.state.name} onChange={ (e) => this.setState({ name:e.target.value})} /> {/*update the state*/}
                </div>
                <div className = "field">
                    <label>Email</label>
                    <input type="text" name ="email" placeholder="email"  value={this.state.email} onChange={ (e) => this.setState({ email:e.target.value})} /> 
                </div>
                <div className = "field"> 
                </div>
                <br></br>
                <button className="name">Add</button>
            </form>
        </div>
        );
    }
}
export default AddContact;

