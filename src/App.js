import React,{ useEffect } from "react";
import alanBtn from '@alan-ai/alan-sdk-web'

const alanKey = '';

const App = () => {

    useEffect(() => {
         alanBtn({
            key: alanKey,
         })
    }, [])

    return (
        <div>
          <h1>Alan AI News Application</h1>
        </div>
    );
}

export default App;