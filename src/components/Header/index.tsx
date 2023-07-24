import * as Dialog from "@radix-ui/react-dialog";
import React, { useState } from "react";
import Logo from "../../assets/logo.svg";
import { NewTransactionModal } from "../NewTransactionModal";
import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";

export const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={Logo} alt="" />
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal setOpen={setOpen} />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
};
