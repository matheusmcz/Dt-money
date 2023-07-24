import React, { useContext } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { priceFormatter } from "../../utils/formatter";
import { SearchForm } from "./components/SearchForm";
import {
  PriceHighLight,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";

export const Transations: React.FC = () => {
  const { transactions } = useContext(TransactionsContext);

  return (
    <>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {
              transactions.map((transaction) => {
                return (
                  <tr key={transaction.id}>
                    <td width="50%">{transaction.description}</td>
                    <td>
                      <PriceHighLight variant={transaction.type}>{priceFormatter.format(transaction.price)}</PriceHighLight>
                    </td>
                    <td>{transaction.category}</td>
                    <td>{transaction.createdAt}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </>
  );
};
