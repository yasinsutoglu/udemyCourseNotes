'use strict';


//Parent Class
class Workout {
    date = new Date();
    id = (Date.now() + '').slice(-10) //Date'i string'e cevirerek id olusturma yaptık
    clicks = 0;

    constructor(coords, distance, duration){
        this.coords = coords; // [lat , lng]
        this.distance = distance; //in km
        this.duration = duration; //in minutes
        
    }

    _setDescription(){
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${months[this.date.getMonth()]}${this.date.getDate()}`
    }

    click(){
        this.clicks++;
    }
}

//Child Classes
class Running extends Workout {
    type = 'running';

    constructor(coords, distance , duration ,cadence){
        super(coords, distance, duration);
        this.cadence = cadence;
        this.calcPace();
        this._setDescription();
    }

    calcPace() {
        // min/km
        this.pace = this.duration / this.distance;
        return this.pace;
    }
}   

class Cycling extends Workout {
    type = 'cycling';

    constructor(coords, distance , duration ,elevationGain){
        super(coords, distance, duration);
        this.elevationGain = elevationGain;
        this.calcSpeed();
        this._setDescription();
    }

    calcSpeed() {
        //km/h
        this.speed = this.distance / (this.duration / 60);
        return this.speed;
    }
}

// const run1 = new Running([39 , -12] , 5.2 , 23 , 178)
// const cycling1 = new Cycling([39 , -12] , 27 , 95 , 523)
// console.log(run1, cycling1)

////////////////////////////////////////////////////////////
//APPLICATION ARCHITECTURE
const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

class App{
    #map;
    #mapZoomLevel = 13;
    #mapEvent;
    #workouts = [];

    constructor(){
       //Get user's position 
       this._getPosition();

       //Get data form localStorage
       this._getLocalStorage();

       //Handling Form Submit Event
        form.addEventListener('submit' , this._newWorkout.bind(this))
        //Handling InputType change Event
        inputType.addEventListener('change' , this._toggleElevationField)
        containerWorkouts.addEventListener('click', this._moveToPopup.bind(this))

    }

    _getPosition(){
        //getCurrentPosition() --> iki fonksiyon parametre alır. Biri positon parametresi ile islem yapıldıgı , digeri hata durumu fonksiyonudur.
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(this._loadMap.bind(this) , function(){
            alert('Could not get your position')
        })
    }
}

    _loadMap(position){
       
        //console.log(position)
        const {latitude} = position.coords;
        const {longitude} = position.coords;
        //console.log(`https://www.google.com/maps/@${latitude},${longitude}`)  
        
        const coords = [latitude , longitude]
        
        //LEAFLET LIBRARY'deki ornekten baz alındı
        this.#map = L.map('map').setView(coords, this.#mapZoomLevel); // buradaki map('map')'i benim html kod kısmında <div id="map"></div> seklinde gectigi icin kullandım direkt.
        L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.#map);
    

        //Handling clicks on map
        this.#map.on('click' , this._showForm.bind(this))  
        
        this.#workouts.forEach(work => {
            this._renderWorkoutMarker(work);
           })
    }

    _showForm(mapE) {
        this.#mapEvent = mapE; //protected variable "mapEvent'e" burada atama yaptık ve form submit event'de _newWorkout methodunda kullandık.
        form.classList.remove('hidden')
        inputDistance.focus()
    }

    _hideForm(){
        //empty inputs
        inputDistance.value = inputCadence.value = inputDuration.value = inputElevation.value = '';

        form.style.display = 'none'
        form.classList.add('hidden')
        setTimeout(() => form.style.display='grid' , 1000)
    }

    _toggleElevationField() {
        inputElevation.closest('.form__row').classList.toggle('form__row--hidden')
        inputCadence.closest('.form__row').classList.toggle('form__row--hidden')
    }

    _newWorkout(e) {

        const validInputs = (...inputs) => inputs.every(inp => Number.isFinite(inp)) //helper func.
        const allPositive = (...inputs) => inputs.every(inp => inp > 0) //helper func.

        e.preventDefault();
        
        //Get data from the form
        const type = inputType.value;
        const distance = Number(inputDistance.value);
        const duration = +inputDuration.value; // +'yı Number'a donusturmek icin yaptık
        const {lat , lng} = this.#mapEvent.latlng;
        let workout;
        
        //If workout running, create running object
        if(type === 'running'){            
            const cadence = +inputCadence.value;

            // Check if data is valid
            //if(!Number.isFinite(distance) || !Number.isFinite(duration) || !Number.isFinite(cadence)) return alert('Inputs have to be positive nums');

            //Alternative Way with helper func.
            if(!validInputs(distance , duration , cadence) || !allPositive(distance , duration , cadence)) return alert('Inputs have to be positive nums');

            workout = new Running([lat , lng] , distance , duration , cadence)
            
        }
        //If workout cycling, create cycling object
        if(type === 'cycling'){
            const elevation = +inputElevation.value;

            // Check if data is valid
            if(!validInputs(distance , duration , elevation) || !allPositive(distance , duration)) return alert('Inputs have to be positive nums');

            workout = new Cycling([lat , lng] , distance , duration , elevation)
        }

        //Add new object to workout array
        this.#workouts.push(workout);
        

        //Render workout on map as marker       
        this._renderWorkoutMarker(workout)
        
        //Render workout on List
        this._renderWorkout(workout)

        //Hide form + Clear Input Fields
        this._hideForm()
        
        //Set loacal storage to all workouts
        this._setLocalStorage()
              
    }

    _renderWorkoutMarker(workout){
        //map'e marker ekleme islemi
        L.marker(workout.coords).addTo(this.#map).bindPopup(L.popup({
            maxWidth: 250, 
            minWidth: 100, 
            autoClose: false,
            closeOnClick: false,
            className: `${workout.type}-popup`,
        })).setPopupContent(`${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️' } ${workout.description}`).openPopup();    
    }

    _renderWorkout(workout){
        let html = `
        <li class="workout workout--${workout.type}" data-id="${workout.id}">
        <h2 class="workout__title">${workout.description}</h2>
        <div class="workout__details">
          <span class="workout__icon">${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️' }</span>
          <span class="workout__value">${workout.distance}</span>
          <span class="workout__unit">km</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">⏱</span>
          <span class="workout__value">${workout.duration}</span>
          <span class="workout__unit">min</span>
        </div>
        `

        if(workout.type === 'running'){
            html += ` 
          <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.pace}</span>
            <span class="workout__unit">min/km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">🦶🏼</span>
            <span class="workout__value">${workout.cadence}</span>
            <span class="workout__unit">spm</span>
          </div>
        </li> `
       }

       if(workout.type === 'cycling'){
            html += ` 
        <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.speed}</span>
            <span class="workout__unit">km/h</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⛰</span>
            <span class="workout__value">${workout.elevationGain}</span>
            <span class="workout__unit">m</span>
          </div>
        </li>
       `
      }

      form.insertAdjacentHTML('afterend' , html)
    }

    _moveToPopup(e){
        const workoutEl = e.target.closest('.workout');
        

        if(!workoutEl) return; //guard clause

        const workout = this.#workouts.find(work => work.id === workoutEl.dataset.id)
        

        this.#map.setView(workout.coords , this.#mapZoomLevel , {animate : true, pan: { duration:1, }})

        //using the public interface
        // workout.click();
    }

    _setLocalStorage(){
        //JSON.stringify() --> object'i stringe cevirir.
        //localStorage'da key--> string , value--> string formattadır.
        //localStorage'da large amount data bulundurulamaz.
        localStorage.setItem('workouts' , JSON.stringify(this.#workouts))
    }

    _getLocalStorage(){
        //JSON.parse() --> string'i object'e geri cevirir.
       const data = JSON.parse(localStorage.getItem('workouts'))
       console.log(data)

       if(!data) return;

       this.#workouts = data;

       this.#workouts.forEach(work => {
         this._renderWorkout(work);
        })
    }

    reset(){
        localStorage.removeItem('workouts')
        location.reload(); // loaction --> browser'ın localStorage gibi bize sundugu bir object
    }
}


const app = new App();



//En son localStorage'dan map'e yukledikten sonra list'e tıklayınca workout.click() methodunda hata veriyor. Cunku localStorage'a set ederken ve get ederken string -> object , object -> string donusumunde prototype chain bozulur ve bizim parent'dan turettigimiz child object artık parent class methodlarına erisemez olmustur. Bu durum Object Oriented ile LocalStorage kullanımında yasanabilmektedir. 


