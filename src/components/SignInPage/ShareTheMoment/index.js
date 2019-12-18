import React from "react";
class ShareTheMoment extends React.Component{

    render() {
        return(

            <div className={"share-the-moment"}>
                <img src={require('./ShareTheMoment.svg')} alt="" className={"share-moment-img"}/>
            </div>

        )
    }

}

export default ShareTheMoment;