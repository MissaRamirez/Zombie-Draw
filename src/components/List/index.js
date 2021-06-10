import React from 'react';
import {StyledList} from './styled';

export{default as Item} from './item';
export{default as ObjectList} from './object';


const List = props => {
    const {...styles} = props;
    return(
        <StyledList {...styles}> {props.children} </StyledList>)
};

export default List;