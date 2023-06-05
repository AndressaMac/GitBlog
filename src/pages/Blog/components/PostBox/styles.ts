import styled from "styled-components";

export const PostContainer = styled.div`

width: 416px;
height: 260px;
left: calc(50% - 416px/2 - 224px);
top: 631px;
padding: 32px;
border: transparent;

background: ${(props) => props.theme['base-post']};
border-radius: 10px;

display: flex;
flex-direction: column;
gap: 20px;



:hover{
  cursor: pointer;
  border: 3px white;
 //border-color: //${(props) => props.theme['base-label']};
  border-radius: 5px;
}

div{
  display: flex;
  flex-direction: row;
}

.titulo{
  display: flex;
  justify-content: space-between;
}
h1{
font-family: 'Nunito';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 160%;
color: ${(props)=> props.theme['base-title']};
text-decoration: none;


}

span{
font-family: 'Nunito';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 160%;
color: ${(props)=> props.theme['base-span']};
text-decoration: none;

}


p{
font-family: 'Nunito';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 160%;
color: ${(props)=> props.theme['base-text']};
text-decoration: none;
}

`