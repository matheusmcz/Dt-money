import { zodResolver } from "@hookform/resolvers/zod";
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import {
  Close,
  Content,
  Overlay,
  TransactionType,
  TransactionTypebutton,
} from "./styles";

const newTransactionFormSchema = z.object({
  desctiption: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(["income", "outcome"]),
});

type NewTransactionsFormInputs = z.infer<typeof newTransactionFormSchema>;

interface NewTransactionModalProps {
  setOpen: (props: boolean) => void;
}

export const NewTransactionModal: React.FC<NewTransactionModalProps> = ({ setOpen }) => {
  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm<NewTransactionsFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
    defaultValues: {
      type: "income",
    }
  })

  async function handleCreateNewTransaction(data: NewTransactionsFormInputs) {
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(data);
    setOpen(false)
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>

        <Close>
          <X size={24} />
        </Close>

        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input
            type="text"
            placeholder="Descrição"
            required
            data-description-field="description"
            {...register("desctiption")} />
          <input
            type="number"
            placeholder="Preço"
            required
            {...register("price", { valueAsNumber: true })}
          />
          <input
            type="text"
            placeholder="Categoria"
            required
            {...register("category")}
          />

          <Controller
            control={control}
            name="type"
            render={({ field }) => {
              return (
                <TransactionType onValueChange={field.onChange} value={field.value}>
                  <TransactionTypebutton variant="income" value="income">
                    <ArrowCircleUp size={24} />
                    Entrada
                  </TransactionTypebutton>
                  <TransactionTypebutton variant="outcome" value="outcome">
                    <ArrowCircleDown size={24} />
                    Saída
                  </TransactionTypebutton>
                </TransactionType>
              )
            }}
          />

          <button type="submit" disabled={isSubmitting}>Cadastrar</button>
        </form>
      </Content>
    </Dialog.Portal>
  );
};
