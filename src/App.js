import React,{useState} from 'react';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Profile';

function App()
{
    const [currentPage,setCurrentPage]=useState("About");
    const renderPage=()=>{
        if(currentPage==="About"){
            return <About />;
        }
        if(currentPage==="Portfolio"){
            return <Portfolio />;
        }
        if(currentPage==="Profile"){
            return <Profile />;
        }
        return <Contact />;
    }


const handlePageChange=(page)=>setCurrentPage(page);
return(
    <div className='body d-flex-col'>
        <Header currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
        <Footer />
    </div>
);
}

export default App;