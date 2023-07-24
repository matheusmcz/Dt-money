import * as Dialog from "@radix-ui/react-dialog";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import React from "react";
import {
  Close,
  Content,
  Overlay,
  TransactionType,
  TransactionTypebutton,
} from "./styles";

export const NewTransactionModal: React.FC = () => {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>

        <Close>
          <X size={24} />
        </Close>

        <form action="">
          <input
            type="text"
            name=""
            placeholder="Descrição"
            required
            data-description-field="description"
          />
          <input type="number" name="" placeholder="Preço" required />
          <input type="text" name="" placeholder="Categoria" required />

          <TransactionType>
            <TransactionTypebutton variant="income" value="income">
              <ArrowCircleUp size={24} />
              Entrada
            </TransactionTypebutton>
            <TransactionTypebutton variant="outcome" value="outcome">
              <ArrowCircleDown size={24} />
              Saída
            </TransactionTypebutton>
          </TransactionType>

          <button type="submit">Cadastrar</button>
        </form>
      </Content>
    </Dialog.Portal>
  );
};
