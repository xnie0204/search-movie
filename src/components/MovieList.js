import React from 'react';
import { 
    Col, 
    Card, 
} from 'antd';

import 'antd/dist/antd.css';
import Meta from 'antd/lib/card/Meta';

const MovieList = (props) => {
    return (
        <>
         {props.movies.map((movie, index) => (

            //movie image
            <Col style={{margin: '20px 0'}} className="gutter-row" span={4}>

                {/* // content display as start, marginal 3 */}
                <div className='image-container d-flex justify-content-start m-3 gutter-box'>
                <Card style = {{width:200}}
                 cover = {
                <img src = {movie.Poster} alt = 'movie' width={200} height = {300}></img>
             }>
             
               {/* movie name */}
                <Meta title = {movie.Title}
                ></Meta>


            </Card>
        </div>
        </Col>
        ))} 
           
            
        
        </>
       
    
    );
};

export default MovieList;