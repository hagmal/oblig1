/* Lag en applikasjon som registrerer kjøp av kinobilletter.*/
function registrerOpplysninger() {
   const film = document.getElementById("film").value;

   const innAntall = document.getElementById("antall").value;
   const antall = Number(innAntall);

   if (isNaN(antall) || antall <= 0) {
      alert("Må skrive inn et positivt tall")
   }
   else {
      // ????
   }

   const fornavn = document.getElementById("fornavn").value;
   // + validering
   const etternavn = document.getElementById("etternavn").value;
   // + validering
   const telefonnr = document.getElementById("telefonnr").value;
   // + validering
   const epost = document.getElementById("epost").value;
   // + validering
}
/* Etter at knappen "kjøp billett" er trykket skal billetten lagres som et objekt i array.*/

/* Arrayet listes ut under "Alle billetter".*/

/* Etter at det er registrert en bestilling, skal alle inputfelt "blankes" slik at
ny billett kan registreres.*/

/* Knappen "Slett alle billettene" skal slette billettene (tømme arrayet).*/

/* Det skal også lages en input-validering som sjekker at alle inputfeltene inneholder noe.*/

