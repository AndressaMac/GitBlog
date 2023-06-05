import styled from "styled-components";

export const Container = styled.body`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-left: 10rem;
margin-right: 10rem;

`

export const TitleContainer = styled.div`

width: 864px;
height: 168px;

background:${(props) => props.theme['base-profile']};
box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
border-radius: 10px;
position: absolute;
 top: 208px;

.fist{
display: flex;
flex-direction: row;
justify-content: space-between;
padding-top:  32px;
padding-left:  32px;
padding-right:  32px;
margin-bottom: 1.25rem;

.link{
display: flex;
flex-direction: row;
align-items: center;
gap: 0.25rem;
font-family: 'Nunito';
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 160%;
text-decoration: none;
text-transform: uppercase;
color: ${(props) => props.theme['blue']} 

}

}
h1{
font-family: 'Nunito';
font-style: normal;
font-weight: 700;
font-size: 24px;
color: ${(props) => props.theme['base-title']};
padding-left: 32px;
margin-bottom: 0.5rem;

}

.last{
display: flex;
flex-direction: row;
padding-left: 32px;
gap: 32px;

span{
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
font-family: 'Nunito';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 160%;
color:${(props) => props.theme['base-span']} ;
margin-right: 0.5rem;
gap: 0.375rem;
  }
}


`

export const Content = styled.div`
display: flex;
flex-direction: column;
padding: 2.5rem 2rem;
width: 54rem;
gap: 24px;
margin-top: 10rem;
margin-left: 2rem;
margin-right: 2rem;
font-family: 'Nunito';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 160%;
color:${(props) => props.theme['base-text']}
`