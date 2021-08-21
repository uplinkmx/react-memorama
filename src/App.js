import './App.css';
import { useState } from 'react';


function App() {
//declarar variables con estado
const[counter,setCounter] = useState(42);

const click = function(){
  setCounter(counter+1);
};

const reset = function(){
setCounter(42);
}

const remove = function(){
  setCounter(counter - 1 );
}
//crear componentes con propiedades
const Saludos = (props) => {
  return(
<h5>hola {props.name}</h5>
  )
}

const data = {"Afganistán":"Kabul","Albania":"Tirana","Alemania":"Berlín","Andorra":"Andorra la Vieja","Angola":"Luanda","Antigua y Barbuda":"Saint John's","Arabia Saudita":"Riad","Argelia":"Argel","Argentina":"Buenos Aires","Armenia":"Ereván","Australia":"Canberra","Austria":"Viena","Azerbaiyán":"Bakú","Bahamas":"Nasáu","Baréin":"Manama","Bangladesh":"Daca","Barbados":"Bridgetown","Bélgica":"Bruselas","Belice":"Belmopán","Benín":"Porto-Novo","Bielorrusia":"Minsk","Bolivia":"Sucre","Bosnia y Herzegovina":"Sarajevo","Botsuana":"Gaborone","Brasil":"Brasilia","Brunéi":"Bandar Seri Begawan","Bulgaria":"Sofía","Burkina Faso":"Uagadugú","Burundi":"Buyumbura","Bután":"Timbu","Cabo Verde":"Praia","Camboya":"Phnom Penh","Camerún":"Yaundé","Canadá":"Ottawa","República Centroafricana":"Bangui","Chad":"Yamena","República Checa":"Praga","Chile":"Santiago de Chile","China":"Pekín","Chipre":"Nicosia","Colombia":"Bogotá","Comoras":"Moroni","República del Congo":"Brazzaville","República Democrática del Congo":"Kinsasa","Corea del Norte":"Pionyang","Corea del Sur":"Seúl","Costa de Marfil":"Yamusukro","Costa Rica":"San José","Croacia":"Zagreb","Cuba":"La Habana","Dinamarca":"Copenhague","Dominica":"Roseau","República Dominicana":"Santo Domingo","Ecuador":"Quito","Egipto":"El Cairo","El Salvador":"San Salvador","Emiratos Árabes Unidos":"Abu Dabi","Eritrea":"Asmara","Eslovaquia":"Bratislava","Eslovenia":"Liubliana","España":"Madrid","Estados Unidos":"Washington D. C.","Estonia":"Tallin","Etiopía":"Adís Abeba","Filipinas":"Manila","Finlandia":"Helsinki","Fiyi":"Suva","Francia":"París","Gabón":"Libreville","Gambia":"Banjul"};
//,"Georgia":"Tiflis","Ghana":"Acra","Granada":"Saint George's","Grecia":"Atenas","Guatemala":"Ciudad de Guatemala","Guinea":"Conakry","Guinea-Bissau":"Bissau","Guinea Ecuatorial":"Malabo","Guyana":"Georgetown","Haití":"Puerto Príncipe","Honduras":"Tegucigalpa","Hungría":"Budapest","India":"Nueva Delhi","Indonesia":"Yakarta","Irán":"Teherán","Iraq":"Bagdad","Irlanda":"Dublín","Islandia":"Reikiavik","Israel":"Jerusalén","Italia":"Roma","Jamaica":"Kingston","Japón":"Tokio","Jordania":"Amán","Kazajistán":"Astaná","Kenia":"Nairobi","Kirguistán":"Biskek","Kiribati":"Tarawa","Kuwait":"Ciudad de Kuwait","Laos":"Vientián","Lesoto":"Maseru","Letonia":"Riga","Líbano":"Beirut","Libia":"Trípoli","Liechtenstein":"Vaduz","Lituania":"Vilna","Luxemburgo":"Luxemburgo","República de Macedonia":"Skopie","Madagascar":"Antananarivo","Malaui":"Lilongüe","Malasia":"Kuala Lumpur","Maldivas":"Malé","Malí":"Bamako","Malta":"La Valeta","Marruecos":"Rabat","Islas Marshall":"Majuro","Mauricio":"Port Louis","Mauritania":"Nuakchot","México":"Ciudad de México","Micronesia":"Palikir","Moldavia":"Chisinau","Mónaco":"Mónaco","Mongolia":"Ulán Bator","Montenegro":"Podgorica","Mozambique":"Maputo","Birmania":"Naipyidó","Namibia":"Windhoek","Nauru":"Yaren","Nepal":"Katmandú","Nicaragua":"Managua","Níger":"Niamey","Nigeria":"Abuya","Noruega":"Oslo","Nueva Zelanda":"Wellington","Omán":"Mascate","Países Bajos":"Ámsterdam","Pakistán":"Islamabad","Palaos":"Melekeok","Panamá":"Panamá","Papúa Nueva Guinea":"Port Moresby","Paraguay":"Asunción","Perú":"Lima","Polonia":"Varsovia","Portugal":"Lisboa","Qatar":"Doha","Reino Unido":"Londres","Ruanda":"Kigali","Rumania":"Bucarest","Rusia":"Moscú","Islas Salomón":"Honiara","Samoa":"Apia","San Cristóbal y Nieves":"Basseterre","San Marino":"Ciudad de San Marino","Santa Lucía":"Castries","Santo Tomé y Príncipe":"Santo Tomé","San Vicente y las Granadinas":"Kingstown","Senegal":"Dakar","Serbia":"Belgrado","Seychelles":"Victoria","Sierra Leona":"Freetown","Singapur":"Singapur","Siria":"Damasco","Somalia":"Mogadiscio","Sri Lanka":"Sri Jayawardenapura Kotte","Suazilandia":"Mbabane","Sudáfrica":"Ciudad del Cabo","Sudán":"Jartum","Suecia":"Estocolmo","Suiza":"Berna","Surinam":"Paramaribo","Tailandia":"Bangkok","Tanzania":"Dodoma","Tayikistán":"Dusambé","Timor Oriental":"Dili","Togo":"Lomé","Tonga":"Nukualofa","Trinidad y Tobago":"Puerto España","Túnez":"Túnez","Turkmenistán":"Asjabad","Turquía":"Ankara","Tuvalu":"Funafuti","Ucrania":"Kiev","Uruguay":"Montevideo","Uzbekistán":"Taskent","Vanuatu":"Port Vila","Ciudad del Vaticano":"Ciudad del Vaticano","Venezuela":"Caracas","Vietnam":"Hanói","Yemen":"Saná","Yibuti":"Yibuti","Zambia":"Lusaka","Zimbabue":"Harare"};

const shuffle = function(array){
  var m = array.length, t, i;
  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);
    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
}

const Memoria = (props) => {
  const data = props.data;
  const paises = Object.keys(props.data);
  const capitales = Object.values(props.data);
  const sp = shuffle(paises);
  const sc = shuffle(capitales);
  console.log(sp)
  console.log(sc)
  
  let x = ''
  let y = ''
  let find = false;
    const clickbutton = (event) => {
      //change to color red
      
      document.getElementById(event.target.id).classList.add('myButtonred');
      document.getElementById(event.target.id).classList.remove('myButton');

        if(x === ''){
          x = event.target.id;
          console.log(x)
        }else{
          y = event.target.id;
          document.getElementById(event.target.id).disabled = true;
        
          for (const [key, value] of Object.entries(data)) {
            console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
            if(x === key && y === value ){
              find = true;
              console.log('ya encontramos un pais y su capital');
              break
            }
            if(y === key && x === value ){
              find = true;
              console.log('ya encontramos un pais y su capital');
              break
            }

          }
          if(find){
            
            document.getElementById(x).style.display = "none";
            document.getElementById(y).style.display = "none";
            x = ''
            y = ''
          }else{
            document.getElementById(x).disabled = false;
            document.getElementById(y).disabled = false;
            document.getElementById(x).classList.add('myButton');
            document.getElementById(y).classList.add('myButton');
            document.getElementById(x).classList.remove('myButtonred'); 
            document.getElementById(y).classList.remove('myButtonred'); 
            x = ''
            y = ''
          }
        }
    }
  return(
  <>
  <div className="col-6">
    <h1>paises</h1>
    {paises.map(pais => <button className="myButton"  key={pais} id={pais} onClick={clickbutton}>{pais}</button>)}
  </div>
  <div className="col-6">
    <h1>Capitales</h1>
    {capitales.map(capital => <button className="myButton" key={capital} id={capital} onClick={clickbutton}>{capital}</button>)}
  </div>
  </>
  )
}

  return (
    <>
    <div className="container-fluid text-center">
   <h1> Memorama paises </h1>
    <div className="row">
        <Memoria data={data} />
        </div>
    </div>
<div className="App">
<header className="App-header">
         <h1>{counter}</h1>
<button href="#" onClick={click}>add number</button>
<button href="#" onClick={reset}>reset number to 42</button>
<button href="#" onClick={remove}>rm number</button>

<Saludos name="rene" />


      </header>
      
    </div>
    </>
  );
}

export default App;
