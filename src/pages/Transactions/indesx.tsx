import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchFrom } from "./components/SearchForm";
import { PriceHighlight, TransactionTable, TransactionsContainer } from "./styles";

interface Transaction{
    id: number;
    description: string;
    type: 'income' | 'outcome';
    price: number;
    category: string;
    createdAt: string;
}

export function Transaction(){

    const [transactions, setTransaction] = useState<Transaction[]>([])

    async function loadTransaction(){
        const response = await fetch('http://localhost:3000/transactions')
        const data = await response.json();

        setTransaction(data)
    }

    useEffect(() => {
        loadTransaction();
    },[])
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
                                            R$ {transaction.price}
                                        </PriceHighlight>
                                    </td>
                                    <td>{transaction.category}</td>
                                    <td>{transaction.createdAt}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </TransactionTable>
            </TransactionsContainer>
        </div>
    )
}