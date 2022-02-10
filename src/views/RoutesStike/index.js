import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StikeHome } from "../StikeHome";
import { SecondSection } from "../StikeHome/SecondSection";

const RoutesStike = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/stikeHome" element={<StikeHome/>}>
                    <Route path="/secondSection" element={<SecondSection/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export {RoutesStike}



