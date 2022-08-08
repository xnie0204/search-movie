import React from "react";
import { 
    Row, 
    Col, 
} from 'antd';
import 'antd/dist/antd.css';

const SearchBar = (props) => {
    return (
        <Row>
            <Col span={25} offset={6}>
            <div className="col" >
            <input clasName = "form-control" 
                   value = {props.value}
                   size="large"
                   style={{ width:"370px" }}
                   //keep the value when lose focus
                   onChange = {(event)=> props.setSearchResult(event.target.value)}
                   placeholder="Please search movie here..">

            </input>
            </div>
            </Col>
        </Row>

    )
}

export default SearchBar;