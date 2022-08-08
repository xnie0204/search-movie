import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import Heading from './components/Heading';
import SearchBar from './components/SearchBar';
import { 
    Layout, 
} from 'antd';
import 'antd/dist/antd.min.css'
const { Content, Footer } = Layout;
const API_KEY = 'b1a9616f';

const App = () => {
    // hold the search result(initial is an empty array)
    const [movies,setMovies] = useState([]);

    // initial the search result(default key word is "speed")
    const[searchResult,setSearchResult] = useState('speed');

    // Get the search movie list
    const getMovie = async (searchResult) => {
        const url = `http://www.omdbapi.com/?s=${searchResult}&apikey=${API_KEY}`;
        const response = await fetch(url); 
        //convert http response to Json
        const responseJson = await response.json();
        //if search is true, then set, or empty string will make this error
        if (responseJson.Search){
            setMovies(responseJson.Search);
        }
        
    };

    // everytime searchResult is change, recall this hook.
    useEffect(() => {
        getMovie(searchResult);
    },[searchResult]);

    // fluid don't add margin
    return (
        // !! space problem
    <div className='container-fluid movieApp' >
        <Layout className='layout'>
        <div className='row d-flex align-items-center mt-4 mb-4'>
            <Heading heading = "Search Movies"/>
            <SearchBar setSearchResult = {setSearchResult}
                       searchResult = {searchResult}/>
        </div>

        <Content style={{padding: '0 50px'}}>
        <div className='row' style={{background: '#fff', padding: 24, minHeight: 280 }}>
        <MovieList movies = {movies}/>
        </div>
        </Content>

        <Footer className = 'author' style={{textAlign: 'center' }}>By Xiaomeng Nie</Footer>

        </Layout>
    </div>
    );
};

export default App;
