import * as Dialog from "@radix-ui/react-dialog";
import React from "react";
import Logo from "../../assets/logo.svg";
import { NewTransactionModal } from "../NewTransactionModal";
import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={Logo} alt="" />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
};
