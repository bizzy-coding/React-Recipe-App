import styled from "styled-components";
import {useState} from "react";
import { FaSearch } from "react-icons/fa";

function Search() {
    return (
        <FormStyle>
            <div>
                <FaSearch></FaSearch>
            <input type="text" />
            </div>
            
        </FormStyle>
    )
}

const FormStyle = styled.form`
margin: 0rem 20rem;
position: relative;

div {
    width: 100%;

}


input{
    border: none;
    background: grey;
    font-size: 1.5rem;
    color: #ffff;
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem;
    outline: none;
  }
  
  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: (100%, -50%);
    color: white;
  }
`

export default Search;