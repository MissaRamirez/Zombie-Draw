import React from 'react';
import List, {Item} from "../";

const ObjectList = props => {
  const {items} = props;
    return(
        <List>
        {Object.keys(items).map(i => (
          <Item key={i}>{items[i]}</Item>
          ))
        }
      </List>
      )
    };

export default ObjectList;