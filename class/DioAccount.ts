export abstract class DioAccount {
  private readonly name: string;
  private readonly accountNumber: number;
  private balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  getName = (): string => {
    return this.name;
  };

  deposit = (depositAmmount: number, isLoan: boolean = false): boolean => {
    if (this.validateStatus()) {
      this.balance = this.balance + depositAmmount;
      if (!isLoan) {
        console.log(`Você depositou ${depositAmmount}`);
      }
      return true;
    }
    return false;
  };

  withdraw = (withdrawAmmount: number): void => {
    if (this.validateStatus() && this.balance > withdrawAmmount) {
      this.balance = this.balance - withdrawAmmount;
      console.log(`Voce sacou ${withdrawAmmount}`);
    }
  };

  getBalance = (): void => {
    console.log(this.balance);
  };

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error("Conta inválida");
  };
}
