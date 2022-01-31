import React from "react";
import "./Styles/Content.css"
import video from "../Shared/Videos/LoadingBackground.mp4"

function Loader(props)  {
    return(
        <div className="Loader">

            <video autoPlay muted loop id="backgroundVideo" width="100%">
                <source src={video} type="video/mp4"></source>
            </video>
            <div className="loaderAnim">
                <h1>Loading</h1>
                <div className="lds-ellipsis">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>

    )
}

export default Loader;