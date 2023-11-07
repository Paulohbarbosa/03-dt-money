import * as Dialog from "@radix-ui/react-dialog";
import { CloseButton, Content, Overlay } from "./styles";
import { X } from "phosphor-react";

export function NewTransactionModal(){
    return(
        <Dialog.DialogPortal>
            <Overlay/>
            <Content>
                <Dialog.DialogTitle> Nova Transação</Dialog.DialogTitle>

                <CloseButton>
                    <X size={24}/>
                </CloseButton>

                <form action="">
                    <input type="text"  placeholder="Descrição" required />
                    <input type="number"  placeholder="Preço" required />
                    <input type="text"  placeholder="Categoria" required />

                    <button type="submit">Cadastrar</button>
                </form>

            </Content>
        </Dialog.DialogPortal>
    )
}