import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import logo from '../../assets/dt-money.svg'

export function Header(){
    return(
        <HeaderContainer>
            <HeaderContent>
                <img src={logo} alt="" />
                <NewTransactionButton>Nova Transação</NewTransactionButton>
            </HeaderContent>
        </HeaderContainer>
    )
}