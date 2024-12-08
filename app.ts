import { CompanyAccount } from "./class/CompanyAccount";
import { NovaAccount } from "./class/novaAccount";
import { PeopleAccount } from "./class/PeopleAccount";

const peopleAccount: PeopleAccount = new PeopleAccount(1, "Nath", 10);
const companyAccount: CompanyAccount = new CompanyAccount("DIO", 20);
const specialAccount: NovaAccount = new NovaAccount("Nova", 30);

peopleAccount.deposit(1);
peopleAccount.getBalance();
peopleAccount.getName();
peopleAccount.withdraw(2);

companyAccount.deposit(1);
companyAccount.getBalance();
companyAccount.getName();
companyAccount.withdraw(2);
companyAccount.getLoan(100);

specialAccount.deposit(1);
specialAccount.getBalance();
specialAccount.getName();
specialAccount.withdraw(2);
specialAccount.depositSpecial(100);
