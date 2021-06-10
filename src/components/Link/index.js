import React from 'react';
import {StyledLink} from './styled';

const Link = props => {
    const {text, to, separator, styles} = props;
    return(
        <StyledLink to={to} {...styles}>
            {text} {separator}
        </StyledLink>
    );

}

export default Link;