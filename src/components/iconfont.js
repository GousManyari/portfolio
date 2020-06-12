import React ,{Components} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

class Iconfont extends Components{

    render(){
        return(
            <div>
                <p>Cofee Icon</p>
                <FontAwesomeIcon Icon = {faCoffee}/>
            </div>
        )
    }
}
export default Iconfont;

