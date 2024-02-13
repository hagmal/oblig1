/* Lag en applikasjon som registrerer kjøp av kinobilletter.*/
function velgFilm(){
   //hvor skal den skrives ut til??
   let film = document.getElementById("film").value;
   // + noe som gjør at man ikke kan velge "velg film her"
}
function velgAntall() {
   let antall = document.getElementById("antall").value;
   // + noe som gjør at man ikke kan velge negative tall
}
/* Etter at knappen "kjøp billett" er trykket skal billetten lagres som et objekt i array.*/
const filmRegister = [];

function register(){
   //lage array
   const kjøp = {
      film : film,
      antall : antall,
      // ++++
   }
}

/* Arrayet listes ut under "Alle billetter".*/
function visFilmRegister(){
   //???? for å få ut arrayet
}
/* Etter at det er registrert en bestilling, skal alle inputfelt "blankes" slik at
ny billett kan registreres.*/

/* Knappen "Slett alle billettene" skal slette billettene (tømme arrayet).*/

/* Det skal også lages en input-validering som sjekker at alle inputfeltene inneholder noe.*/

