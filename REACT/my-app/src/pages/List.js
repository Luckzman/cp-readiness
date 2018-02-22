import React from 'react';

const List =props => (
        
        <ul className="list-group">
                {
                        props.items.map((item,index)=><li key={index} className="list-group-item">{item} 
                        </li>)
                }
        </ul>
        );



export default List;