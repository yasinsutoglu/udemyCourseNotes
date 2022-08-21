'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2022-06-02T17:01:17.194Z',
    '2022-06-06T23:36:17.929Z',
    '2022-06-08T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
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

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

//------------------------------------------


//Computing/creating username
const createUserNames = function(accs){ //accs --> objeler arrayi parametre olacak.
  accs.forEach(function(acc){
      acc.username = acc.owner.toLowerCase().split(' ').map( name =>name[0] ).join(''); //herbir account objenin owner property'sinin value'suna islem yaptık sonra objeye username adında yeni property'ye attık.
  })
}

createUserNames(accounts) //account objelerinin yer aldıgı accounts arrayini parametre gectik.

//Date Format
const formatMovementDate = function(date , locale){

  const calcDaysPassed = (date1 ,date2) => Math.round(Math.abs((date2 - date1) / (1000 * 60 * 60 * 24))) 
  
  const daysPassed = calcDaysPassed(new Date() , date)

  if(daysPassed === 0) return 'today';
  if(daysPassed === 1) return 'yesterday';
  if(daysPassed <= 7) return `${daysPassed} days ago`
  
  // const day = `${date.getDate()}`.padStart(2 , 0)
  // const month = `${date.getMonth() + 1}`.padStart(2 , 0);
  // const year = date.getFullYear(); 
  //return `${day}/${month}/${year}` 
  
  return new Intl.DateTimeFormat(locale).format(date);
}


//Currency Format
const formatCur = function(value, locale , currency){
  return new Intl.NumberFormat(locale , {
    style: 'currency',
    currency: currency,}).format(value)
}



//adding movements row
const displayMovements = function(acc , sort = false){
  containerMovements.innerHTML = ''; //containerMovements div'inin icini tamamen bosalttık

  const movs = sort ?acc.movements.slice().sort((a,b) => a-b) : acc.movements;

    movs.forEach(function(mov,i){
      const type = mov > 0 ? 'deposit' : 'withdrawal';

      const date = new Date(acc.movementsDates[i])
      const displayDate = formatMovementDate(date , acc.locale)

      const formattedMov = formatCur(mov , acc.locale , acc.currency)

      const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i+1} ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov}</div>
      </div>
      `;
      
      //MDN'den insertAdjacentElement() methoduna bakabiliriz. İki parametre alır. İlki parent elementde nereye yerlestirilecegi, ikincisi yerlestirilecek element degiskeni.
      containerMovements.insertAdjacentHTML('afterbegin' , html) // burada beforeend deseydik elementleri tam tersi sıralardı.
    })
}



//Calculating balance

const calcDisplayBalance = function(acc){
    const balance = acc.movements.reduce((acc , mov) => acc + mov , 0);
    acc.balance = balance; //ilgili objeye yeni property tanımlamıs ve deger atamıs olduk

    labelBalance.textContent = formatCur(acc.balance , acc.locale , acc.currency)
}



//Calculating Display Summary
const calcDisplaySummary = function(acc){
  const incomes = acc.movements.filter(mov => mov > 0).reduce((acc , mov) => acc + mov,0)
  //labelSumIn.textContent = `${incomes.toFixed(2)}€`
  labelSumIn.textContent = formatCur(incomes , acc.locale , acc.currency)
  

  const out = acc.movements.filter(mov => mov < 0).reduce((acc,mov) => acc + mov , 0)
  //labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`
  labelSumOut.textContent = formatCur(Math.abs(out) , acc.locale , acc.currency)

  const interest = acc.movements.filter(mov => mov > 0).map(deposit => (deposit * acc.interestRate/100)).filter((int,i,arr)=>{
    //console.log(arr);
    return int>=1 //interest 1'den buyuk olanları filtreledik
  }).reduce((acc,int) => acc + int, 0)
  //labelSumInterest.textContent = `${interest.toFixed(2)}€`
  labelSumInterest.textContent = formatCur(interest , acc.locale , acc.currency)
}


//UPDATE UI
const updateUI = function(acc){

    //Display movements
    displayMovements(acc)

    //Display balance
    calcDisplayBalance(acc)

    //Display Summary
    calcDisplaySummary(acc)

}

const startLogOutTimer = function(){

  const tick = function(){
    const min = String(Math.trunc(time / 60)).padStart(2 , 0);
    const sec = String(time % 60).padStart(2 , 0);

    //In each callback function call, print the remaining time to UI
    labelTimer.textContent = `${min}:${sec}`;

      
      //when 0 seconds, stop timer and log out user
      if(time === 0){
        clearInterval(timer)
        labelWelcome.textContent = `Login to get started` 
        containerApp.style.opacity = 0;
      }

       //decrease 1 sn
       time--; 
  }

  //Set time to 3 minutes
  let time = 30;

  //call the timer every second
  const timer = setInterval( tick ,1000) 

  return timer;
}


//LOGIN ISSUES
let currentAccount , timer; // bircok yerden erismek isteyecegimiz icin globalde tanımladık.

//Fake always logged in
// currentAccount = account1;
// updateUI(currentAccount)
// containerApp.style.opacity = 100;


// Login
btnLogin.addEventListener('click' , function(e){
  
    e.preventDefault()//prevent form from immediate submitting

    currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value)
    //console.log(currentAccount)

      //currentAccount?.pin --> optional chaining kullandık
   if(currentAccount?.pin === Number(inputLoginPin.value)){

      //Display UI and message
      labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}` //burada obje owner property'sinde gecen uzun ismin ilk kelimesini aldık.
      containerApp.style.opacity = 100;

      //Current Date and Time
      const now = new Date();
      const options = {
        hour: 'numeric',
        minute: 'numeric',
        day: 'numeric',
        month: 'numeric', // long ve 2-digit'de baska bir secenek
        year: 'numeric', //2-digit'de baska bir secenek
        //weekday: 'long'
      }

      //labelDate.textContent = new Intl.DateTimeFormat('tr-TR', options).format(now)

      // const locale = navigator.language;      
      // labelDate.textContent = new Intl.DateTimeFormat(locale, options).format(now)

      labelDate.textContent = new Intl.DateTimeFormat(currentAccount.locale, options).format(now)

      //"Date icin --> daha angarya yontem"
      //const now = new Date();
      // // padStart ile 8/8/2020 yerine 08/08/2020 yapısı yapıldı.
      // const day = `${now.getDate()}`.padStart(2 , 0) 
      // const month = `${now.getMonth() + 1}`.padStart(2 , 0);
      // const year = now.getFullYear();
      // const hour = `${now.getHours()}`.padStart(2 , 0);
      // const min = `${now.getMinutes()}`.padStart(2 , 0);
      // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

      //Clear the input fields
      inputLoginUsername.value = inputLoginPin.value = '';
      inputLoginPin.blur();

      //Set Timer
      if(timer) clearInterval(timer)
      timer = startLogOutTimer();

      //update UI
      updateUI(currentAccount);
   } 
});

//TRANSFER ISSUES
btnTransfer.addEventListener('click' , function(e){
  e.preventDefault();

  const amount = Number(inputTransferAmount.value)
  const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);

  //clear the input fields
  inputTransferAmount.value = inputTransferTo.value = '';

  //checking some conditions
  if(amount > 0 && receiverAcc && currentAccount.balance >= amount && receiverAcc?.username !== currentAccount.username){
    //doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    //Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    //update UI
    updateUI(currentAccount);

    //Reset Timer
    clearInterval(timer)
    timer = startLogOutTimer();
  }
})


//LOAN MONEY --> girilen miktarın %10'u movements icerisinde varsa loan islemi yapılır.
btnLoan.addEventListener('click' , function(e){
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if(amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)){

    setTimeout(function(){
      //add movement
    currentAccount.movements.push(amount);

    //Add loan date
    currentAccount.movementsDates.push(new Date().toISOString());

    //update UI
    updateUI(currentAccount)

    //Reset Timer
    clearInterval(timer)
    timer = startLogOutTimer();

    }, 2500);
  }

  inputLoanAmount.value = '';
})



//CLOSING AN ACCOUNT
btnClose.addEventListener('click' , function(e){
    e.preventDefault();

    if(inputCloseUsername.value === currentAccount.username && Number(inputClosePin.value)===currentAccount.pin){
        const index = accounts.findIndex(acc => acc.username === currentAccount.username)

        //console.log(index)

        //Delete account
        accounts.splice(index,1)

        //Hide UI
        containerApp.style.opacity = 0;
    }
    //clear closing inputs
    inputCloseUsername.value = inputClosePin.value = '';
})

//SORTING THE MOVEMENTS
let sorted = false;

btnSort.addEventListener('click' , function(e){
  e.preventDefault();

  displayMovements(currentAccount , !sorted);
  sorted = !sorted;
})

