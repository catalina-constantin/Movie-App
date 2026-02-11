import React from 'react';

import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import SearchBar from '../../components/SearchBar/SearchBar';
import CardList from '../../components/CardList/CardList';
import Footer from '../../components/Footer/Footer';

const Home = () => {
    return (
        <>
            <Navbar />
            <SearchBar />
            <CardList />
            <Footer />
        </>
    )
}

export default Home;