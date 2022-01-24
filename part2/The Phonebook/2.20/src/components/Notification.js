import React from "react";
import './Notification.css';
const Notification = ({message}) => {
if(message[0] === null){
    return null;
}else if (message[1] === "good"){
return(
    <div className="success">
        {message[0]}
    </div>
)
}else if ( message[1] === "bad") {
    return(
        <div className="danger">
            {message[0]}
        </div>
    )
}

}
export default Notification;