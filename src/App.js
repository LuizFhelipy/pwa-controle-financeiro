import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import Resume from "./components/Resume";
import Global from "./styles/global";
import Dexie from 'dexie'

const db = new Dexie('db-finance');
db.version(1).stores(
  { items: "id,desc,amount,expense" }
)

const App = () => {

  const data = localStorage.getItem("transaction");
  const [transactionsList, setTransactionsList] = useState(
    data ? JSON.parse(data) : []
  );
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const amountExpense = transactionsList
      .filter((item) => item.expense)
      .map((transaction) => Number(transaction.amount));

      const amountIncome = transactionsList
      .filter((item) => !item.expense)
      .map((transaction) => Number(transaction.amount));

    const expense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2);
    const income = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2);

    const total = Math.abs(income - expense).toFixed(2);

    setIncome(`R$ ${income}`);
    setExpense(`R$ ${expense}`);
    setTotal(`${Number(income) < Number(expense) ? "-" : ""}R$ ${total}`);
  }, [transactionsList]);

  const handleAdd = (transaction) => {
    console.log('AAAA:', transaction);
    const newArrayTransactions = [...transactionsList, transaction];

    setTransactionsList(newArrayTransactions);

    localStorage.setItem("transaction", JSON.stringify(newArrayTransactions));

    db.items.add({
      id: transaction.id,
      desc: transaction.desc,
      amount: transaction.amount,
      expense: transaction.expense
    });
  };

  return (
    <>
      <Resume income={income} expense={expense} total={total} />
      <Form handleAdd={handleAdd} transactionsList={transactionsList} setTransactionsList={setTransactionsList} database={db}/>
      <Global />
    </>
  );
};

export default App;
