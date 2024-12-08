import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  getLoan = (loanAmmoun: number): void => {
    if (this.deposit(loanAmmoun, true)) {
      console.log(`Você pegou um empréstimo de ${loanAmmoun}`);
    }
  };
}
