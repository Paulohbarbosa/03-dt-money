import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchFrom } from "./components/SearchForm";
import { PriceHighlight, TransactionTable, TransactionsContainer } from "./styles";

export function Transaction(){
    return(
        <div>
            <Header/>
            <Summary/>

            <TransactionsContainer>
                <SearchFrom/>
                
                <TransactionTable>
                    <tbody>
                        <tr>
                            <td>Desenvolvimento de site</td>
                            <td>
                                <PriceHighlight variant="income">
                                    R$ 12.000,00
                                </PriceHighlight>
                            </td>
                            <td>Venda</td>
                            <td>13/04/2022</td>
                        </tr>

                        <tr>
                            <td>Alimentação</td>
                            <td>
                                <PriceHighlight variant="outcome">
                                    -R$ 1.000,00
                                </PriceHighlight>
                            </td>
                            <td>Supermercado</td>
                            <td>13/04/2022</td>
                        </tr>
                    </tbody>
                </TransactionTable>
            </TransactionsContainer>
        </div>
    )
}