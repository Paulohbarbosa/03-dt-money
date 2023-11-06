import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import logo from '../../assets/dt-money.svg'

import * as Dialog from '@radix-ui/react-dialog';

export function Header(){
    return(
        <HeaderContainer>
            <HeaderContent>
                <img src={logo} alt="" />
                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <NewTransactionButton>
                            Nova Transação
                        </NewTransactionButton>
                    </Dialog.Trigger>
                    <Dialog.DialogPortal>
                        <Dialog.Overlay/>
                        <Dialog.DialogContent>
                            <Dialog.DialogTitle> Nova Transação</Dialog.DialogTitle>
                            <Dialog.Close/>
                        </Dialog.DialogContent>
                    </Dialog.DialogPortal>
                </Dialog.Root>
            </HeaderContent>
        </HeaderContainer>
    )
}