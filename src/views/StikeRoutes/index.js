import { BrowserRouter, Routes, Route } from 'react-router-dom'; //Import react router

const StikeRoutes = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<StikeHome/>}/>
                {/* <Route path="/cart" element={} /> */}
            </Routes>
        </BrowserRouter>
    );
}

export { StikeRoutes }