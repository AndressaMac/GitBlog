import styled from "styled-components";
import cover from '../../assets/Cover.svg'


export const HeaderContainer = styled.div`

  height: 20vw;
  width:100%;
  background: url(${cover})  no-repeat center  ;

  /* Full height */
  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  img{
    margin-bottom: 5rem;

  }

`

