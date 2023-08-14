// type and interface both tells us about shape of an object

type Student = {
    name:string,
    class:number
}

interface Transaction {

   payerAccountNumber:number,
   payeeAccountNumber:number;

}

interface BankAccount {

    accountNumber:number;
    accountHolder:string;
    isActive:boolean;
    transactions:Transaction[];
}

const bankAccount1:BankAccount = {

    accountNumber:9379813,
    accountHolder:"harshit",
    isActive:false,
    transactions:
    [
        {payerAccountNumber:777,payeeAccountNumber:777},
        {payerAccountNumber:888,payeeAccountNumber:888},
        {payerAccountNumber:999,payeeAccountNumber:999}
    ]

}

console.log(bankAccount1);