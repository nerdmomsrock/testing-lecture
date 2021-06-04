import { faToiletPaperSlash } from "@fortawesome/free-solid-svg-icons";
import bankAccount, { depositMoney } from "../bankAccount";

function inAscOrder(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

describe("inAscOrder", () => {
  test(" `inAscOrder` should return boolean", () => {
    //description and then arrow function callback
    const returnValue = inAscOrder([]);
    expect(typeof returnValue).toBe("boolean"); //use expect to see if test passes

    const returnValue2 = inAscOrder([1, 2, 3]);
    expect(returnValue2).toBe(true);
  });

  test("Expect true to be truthy", () => {
    expect(true).toBeTruthy();
  });
});
//checking an array contains an item
let names = ["John", "Ariel", "Zach"];
//let names = [{id: 1, name: John}]

describe("names", () => {
  test("Names contains Ariel", () => {
    expect(names).toContain("Ariel");
    //expect(names.includes('Ariel)).toBe(true)
    //expect(names).not.toContain("Ariel") to verify that array does not have that name
  });
});

describe("bankAccount", () => {
  beforeEach(() => {
    bankAccount.balance = 1000;
  });

//   afterEach(() => { //runs after each test if we need it

// //   })

// before(() => {
//     runs before all of the testing, not each individual
// })

// after(() => {
//     runs after all testing, not each individual
// })

  test("balance should be a number", () => {
    expect(typeof bankAccount.balance).toBe("number"); //typeof checks kind of data
  });
  test("balance defaults to 1000", () => {
    expect(bankAccount.balance).toEqual(1000);
  });
  test("`depositMoney` should increase balance by X amount", () => {
    bankAccount.depositMoney(500);
    expect(bankAccount.balance).toBe(1500);
  });
  test("`withdrawMoney` should decrease the balance by X amount", () => {
    bankAccount.withdrawMoney(500);
    expect(bankAccount.balance).toBe(500);
  });
});
