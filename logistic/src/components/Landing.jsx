import React from 'react';
import styled from 'styled-components';
import BackPic from '../img/warehouse-distribution.jpeg'

const StyledBody = styled.div`
  background: url('${BackPic}');
  background-size: cover;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
`;

export default class Landing extends React.Component {
    constructor(){
        super()
    }
    
    render(){
        return(
            <StyledBody>
                <div className="overlay">
                    <div id="landing-text">
                        Moving done right
                    </div>
                <button id="login-button">Login</button>
                <button id="signup-button">Signup</button>
                </div>
            </StyledBody>
        )
    }
}