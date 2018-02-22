import React, {Component} from 'react';
import Jumbotron from './Jumbotron.jsx';
import List from './List.js';

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
          term : '',
          items : []
        };
      }
    
      onChange = (event) =>{
        this.setState({ term:event.target.value})
      }
    
      onSubmit = (event) =>{
        event.preventDefault();
        this.setState({
          term:'',
          items:[...this.state.items,this.state.term]
        });
      }   


      
     
    render(){
        return (
            <div>
                <Jumbotron/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mx-auto">
                            <form  onSubmit={this.onSubmit}>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Enter Todo Items Here" value={this.state.term} onChange={this.onChange}/>
                                    <div class="input-group-append">
                                        <button className="btn btn-outline-secondary" type="submit">Add Todos</button>
                                    </div>
                                </div>
                            </form>
                            <List items={this.state.items}/>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Home;