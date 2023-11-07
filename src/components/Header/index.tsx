import { HeaderContainer, HeaderContent, LogoContainer, NewTransactionButton } from "./styles";
import logo from '../../assets/dt-money.svg'

import * as Dialog from '@radix-ui/react-dialog';
import { NewTransactionModal } from "../NewTransactionModal";

export function Header(){
    return(
        <HeaderContainer>
            <HeaderContent>
                <LogoContainer>
                    <img src={logo} alt="" />
                    DT Money
                </LogoContainer>
                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <NewTransactionButton>
                            Nova Transação
                        </NewTransactionButton>
                    </Dialog.Trigger>
                    <NewTransactionModal />
                </Dialog.Root>
            </HeaderContent>
        </HeaderContainer>
    )
}