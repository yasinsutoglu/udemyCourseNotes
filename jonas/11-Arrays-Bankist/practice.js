'use strict'
// Data
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
  };
  
  const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
  };
  
  const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
  };
  
  const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
  };
  
  const accounts = [account1, account2, account3, account4];

  //EXERCISES

  //1.Banka deposit toplamı
  const bankDepositSum = accounts.map(acc => acc.movements).flat().filter(mov => mov > 0).reduce((sum,cur) => sum + cur , 0)

  //const bankDepositSum = accounts.flatMap(acc => acc.movements).filter(mov => mov > 0).reduce((sum,cur) => sum + cur , 0)

  console.log(bankDepositSum)

  //2. Bankada deposit degeri 1000'den buyuk kac deger var??

  //const numDeposits1000 = accounts.flatMap(acc => acc.movements).filter(mov => mov >= 1000).length;

  const numDeposits1000 = accounts.flatMap(acc => acc.movements).reduce((count,cur) => (cur >=1000 ? ++count : count) ,0) //burada count++ yapsaydık 0 gorurduk. cunku her dongude count artırmadan 0 goruyordu. O nedenle prefix ++ ekledik.

  console.log(numDeposits1000)
  //Prefixed ++ operator
  let a = 10;
  console.log(a++)//10 gorduk
  console.log(++a);//12 gorduk

  //3. Reduce kullanarak sum of deposit ve sum of withdrawals objesi olusturma

  const {deposits, withdrawals} = accounts.flatMap(acc => acc.movements).reduce((sums , cur) => {
    //cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur)
    sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
    return sums;
  } , {deposits : 0 , withdrawals : 0}) // initial value olarak obje kullandık "{deposits : 0 , withdrawals : 0}"
   
  console.log(deposits, withdrawals)

  //4. Bir stringi Bir baslık haline getirmek icin fonksiyon yazdık
  //this is a nice title --> This Is a Nice Title
  const convertTitleCase = function (title) {
    const capitilize = str => str[0].toUpperCase() + str.slice(1);

    const exceptions = ['a', 'an' , 'and' , 'the' , 'but' , 'or' , 'on' , 'in' , 'with']

    const titleCase = title.toLowerCase().split(' ').map(word => exceptions.includes(word) ? word : capitilize(word)).join(' ');

    return capitilize(titleCase)
  };

  console.log(convertTitleCase('this is a nice title'))
  console.log(convertTitleCase('this is a LONG title but not too long'))
  console.log(convertTitleCase('and here is another title with an EXAMPLE'))

