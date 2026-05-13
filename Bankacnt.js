//oops Encapsulation 

class Bankacnt
{
    #balance=5000

deposit(amt)
{
    this.#balance=this.#balance+amt
}
withdraw(addAmt)
{
    this.#balance-=addAmt
}

checkBalance()
{
    console.log(this.#balance)
}
}

let acnt=new Bankacnt()

acnt.deposit(4000)
acnt.checkBalance()
acnt.withdraw(2000)
acnt.checkBalance()
