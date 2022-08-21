//Local Storage islemleri

let user = {userName: "hakanyalcinkaya", isActive: true}//bir object tanımlandı

localStorage.setItem('userInfo', JSON.stringify(user)) //JSON.stringify ile icerisndeki bilgiler object degilde string tutmasını sağladık. Kompleks veri yapilarında JSON.stringify kullanıyoruz.

let uInfo = localStorage.getItem('userInfo') // localStorage'dan bilgiyi aldık
uInfo = JSON.parse(uInfo) //JSON.parse ile storage'dan aldıgımız bilgiyi string'den geri object'e cevirdik

console.log(uInfo)

// 2. egzersiz:
let items = [1,2,3, user]
// localStorage.setItem('newItems', items) // hatali doner
localStorage.setItem('newItems', JSON.stringify(items))

let newItems = JSON.parse( localStorage.getItem('newItem') ) //JSON Parse ile localStorage icindeki bilginin cekilip kullanilmasi..