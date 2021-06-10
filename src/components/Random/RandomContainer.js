import React, {PureComponent, Fragment} from "react";
import RandomDisplay from './RandomDisplay';

export default class RandomContainer extends PureComponent{
    render(){    
        return(
            <Fragment>
                <RandomDisplay/>
            </Fragment>
        )
    }
}