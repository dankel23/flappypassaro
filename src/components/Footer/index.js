import React from "react";
import './style.css'

function Footer({controlsContent}) {
    return (
        <footer>
            <strong>FLAPPY PASSARO</strong>
            <hr/>
            <div>
                {controlsContent.map(t => 
                    <p>{t}</p>
                )}
            </div>
        </footer>
    )
}

export default Footer