import styled from "styled-components";

export const SearchInput = styled.form`
margin-top: 12rem;
margin-bottom: 48px;
div{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 864px;
  
strong{
 
font-family: 'Nunito';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 160%;
color: ${(props) => props.theme['base-subtitle']};
 } 

p{
font-family: 'Nunito';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 160%;
color: ${(props) => props.theme['base-span']}
 }
}
input{
width: 864px;
height: 50px;
left: calc(50% - 864px/2);
top: 533px;
border: 1px solid ${(props) => props.theme['base-border']} ;
border-radius: 6px;
background: ${(props) => props.theme['base-input']};

font-family: 'Nunito';
font-style: normal;
font-weight: 400;
color:${(props) => props.theme['base-span']} ;
padding-left: 0.5rem;
&:focus,:active{
outline: none;
border:1px solid ${(props) => props.theme['blue']} ;
background-color:${(props) => props.theme['base-input']} ;

  }
}


`