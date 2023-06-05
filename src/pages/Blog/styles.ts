
import styled from "styled-components";

export const BlogContainer = styled.body`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;


`

export const PersonalContainer = styled.div`
 position: absolute;
width: 864px;
height: 212px;
left: calc(50% - 864px/2);
top: 158px;

background: ${(props) => props.theme['base-profile']};
box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
border-radius: 10px;

display: flex;
align-items: center;
justify-content: center;
padding-left:40px;
padding-top: 32px;
padding-bottom: 32px;
padding-right: 40px;
gap: 32px;

img{
width: 148px;
height: 148px;
left: 40px;
top: calc(50% - 148px/2);
border-radius: 8px;
}

.top{
display: flex;
flex-direction: row;
justify-content: space-between;
margin-bottom: 8px;
;

strong{
font-family: 'Nunito';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 130%;
color: ${(props) => props.theme['base-title']} ;
  }

a{
font-family: 'Nunito';
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 160%;
text-decoration: none;
text-transform: uppercase;
color: ${(props) => props.theme['blue']} ;
}
}

.midle{
margin-bottom: 24px;
p{
font-family: 'Nunito';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 160%;

color:${(props) => props.theme['base-text']} ;

}
}
.boton{
display: flex;
flex-direction: row;
gap: 24px;
font-family: 'Nunito';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 160%;
color:${(props) => props.theme['base-subtitle']};
span{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.375rem;
}
}
`



export const PostGrid = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
gap:32px;


`

export const Footer = styled.footer`
width: 100%;
height: 14.625rem;

`