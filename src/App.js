import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListItems from './ListItems';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faTrash} from '@fortawesome/free-solid-svg-icons';

library.add(faTrash);
//faTrash is the icon

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      //key :value
      //items list that is basically an array
      items:[],
      currentItem:{
        text:'',
        key:''
      }
    }
    //expilicit binding of this keyword if sometime lost context
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
    
 
   }

  handleInput(e){
    this.setState({
      currentItem:{
        text:e.target.value,
        key:Date.now()
      } 
    })
  }

  addItem(e){
    //when we click on a button ,the default behaviour is page reload
    //to prevent the page reload
    e.preventDefault();
    //get the current item
    const newItem=this.state.currentItem;
    console.log(newItem);
    if(newItem.text!==''){
      //forming a new list with 
      //unpacks the existing list ,  them into individual items
      //add the new item 
      //and then store the new item
      const newitems=[...this.state.items,newItem];
      //update the items list with newitems list & currentItem field is set as empty   
      this.setState({
        items:newitems,
        currentItem:{
          text:'',
          key:''
        }
      })
    }

  }

  deleteItem(key){
    //filter all the  items where key doesn't match & store it in a variable  
    const filteredItems=this.state.items.filter(item=>
    item.key!=key);
    this.setState({
      items:filteredItems
    })
  }

  setUpdate(text,key){
    //it recieves the updated value and key
    //const items is the new items list later we will set this in the state
    const items=this.state.items
    items.map(item=>{
      if(item.key==key){
        item.text=text
      }
    })
    this.setState({
      items:items
    })
  }

  render(){
    return(
      <div className="App">
        <header>
          <form id="to-do-form" onSubmit={this.addItem}>
            <input type="text" placeholder="Enter Text" value={this.state.currentItem.text} onChange={this.handleInput}/>
            <button type="submit">Add</button>
          </form>
        </header>
        <ListItems items={this.state.items} deleteItem={this.deleteItem} setUpdate={this.setUpdate}/>
      </div>
    )
  }
}
 
export default App;
