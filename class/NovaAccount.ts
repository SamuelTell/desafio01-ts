import { DioAccount } from "./DioAccount";

export class NovaAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  depositSpecial = (depositAmmount: number): boolean => {
    this.deposit(depositAmmount + 10);
    return true;
  };
}
