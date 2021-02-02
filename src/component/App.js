import React, { useState, useEffect } from 'react'
import Nav from "./core/Nav";
import Main from "./core/Main";
import Footer from "./core/Footer";
import app from "./app.css"

const App = () => {
    const [page, setPage] = useState(false);
    const handlePage = (action) => {
        setPage(!action);
    }
    return (
        <div>
            <Nav handleChange={handlePage}/>
            <Main pageOK={page}/>
            <Footer pageOK={page}/>
        </div>
    )
}

export default App;