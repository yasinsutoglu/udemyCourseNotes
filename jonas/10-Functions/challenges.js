'use strict'

//CHALLENGE-1
/*
const poll = {
    question: 'What is your favourite programming language?',
    options: ['0:Javascript' , '1:Python' , '2:Rust' , '3:C++'],
    answers: new Array(4).fill(0),

    //method
    registerNewAnswer(){
        let str = '';
        for(const v of this.options){
            str+=v +'\n'
        }
        const vote = Number(prompt(`${this.question}\n ${[str]}\n(write option number)`))
        if(vote>=0 && vote<4){
            switch(vote){
                case 0:
                    this.answers[0]++
                    break;
                case 1:
                    this.answers[1]++
                    break;
                case 2:
                    this.answers[2]++
                    break;
                case 3:
                    this.answers[3]++
                    break;
                default:
                    break;
            }

        }else{
            alert('wrong entry!!')
        }
        
        this.displayResults()
        this.displayResults('string')
    },

    //Shorter way of doing the above method

    // registerNewAnswer(){
    //     //Get answer
    //     const ans = Number(prompt(`${this.question}\n${this.options.join('\n')}\n(write option number)`))
    //     //Register answer
    //     typeof ans === 'number' && ans < this.answers.length && this.answers[ans]++;

    //     this.displayResults()
    //     this.displayResults('string')
    // }

    //method
    displayResults(type = 'array'){
        if(type ==='array'){
            console.log(this.answers)
        }else if(type === 'string'){
            console.log(`Poll results are ${this.answers.join(',')}`)
        }
    },
}

document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll))

//bonus case
//burada call ilk parametre olarak this keywordu icin birset beklemektedir. Biz de buraya bir property'si olan object tanımladık. Sonrasında displayResults parametresi olarak 'string'i gectik.
poll.displayResults.call({answers: [5,2,3]} , 'string')
poll.displayResults.call({answers: [1,5,3,9,6,1]} , 'string')
poll.displayResults.call({answers: [1,5,3,9,6,1]} )
*/

//CHALLENGE-2