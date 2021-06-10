import React, {PureComponent, Fragment} from "react";
import MainWrapperDisplay from './MainWrapperDisplay';

export default class MainwrapperContainer extends PureComponent{
    render(){    
        return(
            <Fragment>
                <MainWrapperDisplay/>
            </Fragment>
        )
    }
}