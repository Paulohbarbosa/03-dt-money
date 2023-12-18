import { useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchFrom } from "./components/SearchForm";
import { PriceHighlight, TransactionTable, TransactionsContainer } from "./styles";
import { TransactionsContext } from "../../contexts/Transactionscontext";
import { dateFormatter, priceFormatter } from "../../utils/formatter";

export function Transaction(){
    const { transactions } = useContext(TransactionsContext)

    return(
        <div>
            <Header/>
            <Summary/>

            <TransactionsContainer>
                <SearchFrom/>
                
                <TransactionTable>
                    <tbody>
                        {transactions.map(transaction =>{
                            return(
                                <tr key={transaction.id}>
                                    <td width="50%">{transaction.description}</td>
                                    <td>
                                        <PriceHighlight variant={transaction.type}>
                                            {transaction.type === 'outcome' && '- '}
                                           {priceFormatter.format(transaction.price)}
                                        </PriceHighlight>
                                    </td>
                                    <td>{transaction.category}</td>
                                    <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </TransactionTable>
            </TransactionsContainer>
        </div>
    )
}