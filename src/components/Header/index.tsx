import {HeaderContainer} from '../Header/styles'
import Logo  from '../../assets/Logo.svg'
export default function Header(){
  
  return(
   <HeaderContainer>
   <img src={Logo} alt=''/>
   </HeaderContainer>
  )
}