import React from 'react';
import {StyledItem} from './styled';

const Item = props => {
    const {...styles} = props;
    return(
        <StyledItem {...styles}> {props.children} </StyledItem>)
};

export default Item;