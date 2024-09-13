import React, { useContext } from "react";
import { LanguageContext } from "./newcontext";
export default function Greeting(){
    const {language,newLanguage} = useContext(LanguageContext);

    return(
        <div onClick={newLanguage}>
            {language == "tamil" && <h1>Vanakam</h1>}
            {language == "english" && <h1>Hello</h1>}
        </div>
    )
}
