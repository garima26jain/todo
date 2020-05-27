import React from 'react';
import './ListItems.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import FlipMove from 'react-flip-move';

function ListItems(props){
    // from app.js list is passed as attribute
    // here we are accessing the list item as props & storing in a variable  so that we can access it easily
    const items=props.items;
    //iterate over the list(array) using map function that accepts a callback(which is each and every item /element)
    const listItems=items.map(item=>{
        return <div className="list" key={item.key}>
            <p>
                <input type= 'text' value={item.text} id={item.key}
                onChange={(e)=>
                    props.setUpdate(e.target.value,item.key)
                }
                /> 
                <span>
                    <FontAwesomeIcon className='faicons' icon='trash' onClick={()=>props.deleteItem(item.key)}/>
                </span>
                   
            </p>
        </div>
    })
    return(
        //display the ListItems inside the return
        <div>
            <FlipMove duration={500} easing="ease-in-out">
                {listItems}
            </FlipMove>
        </div>
        
    )
}

export default ListItems;

