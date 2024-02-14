// oppretter et tomt array for å lagre billettene
const billetter = [];


function registrerBillett() {
   document.getElementById("feilAntall").innerHTML = "";
   document.getElementById("feilFornavn").innerHTML = "";
   document.getElementById("feilEtternavn").innerHTML = "";
   document.getElementById("feilTelefonnr").innerHTML = "";
   document.getElementById("feilEpost").innerHTML = "";

   const film = document.getElementById("film").value;
   const antall = Number(document.getElementById("antall").value);
   const fornavn = document.getElementById("fornavn").value;
   const etternavn = document.getElementById("etternavn").value;
   const telefonnr = document.getElementById("telefonnr").value;
   const epost = document.getElementById("epost").value;

   if (isNaN(antall) || antall <= 0) {
      document.getElementById("feilAntall").innerHTML = "Må være et tall større enn 0";
   }
   if (fornavn.length === 0 || !isNaN(fornavn)) {
      document.getElementById("feilFornavn").innerHTML = "Må skrive inn et fornavn";
   }
   if (etternavn.length === 0 || !isNaN(etternavn)) {
      document.getElementById("feilEtternavn").innerHTML = "Må skrive inn et etternavn";
   }
   if (isNaN(telefonnr) || telefonnr.length !== 8){
      document.getElementById("feilTelefonnr").innerHTML = "Telefonnummeret må ha 8 siffer";
   }
   if (!/\S+@\S+\.\S+/.test(epost)) {
      document.getElementById("feilEpost").innerHTML = "Ikke gyldig e-postadresse";
   }
   else {
      // Legger billettene inn i et array
      const enBillett = {
         film: film,
         antall: antall,
         fornavn: fornavn,
         etternavn: etternavn,
         telefonnr: telefonnr,
         epost: epost
      };
      billetter.push(enBillett);
      visBilletter()

      // Nullstiller input-feltene
      document.getElementById("film").value = "";
      document.getElementById("antall").value = "";
      document.getElementById("fornavn").value = "";
      document.getElementById("etternavn").value = "";
      document.getElementById("telefonnr").value = "";
      document.getElementById("epost").value = "";
   }
}
// Hvordan arrayet listes ut under "Alle billetter"
function visBilletter(){
   let ut = "<table><tr>" +
       "<th> Film </th> <th> Antall </th> <th> Fornavn </th> " +
       "<th> Etternavn </th> <th> Telefonnr </th> " +
       "<th> E-post </th></tr>";
   for (let b of billetter) {
      ut += "<tr>";
      ut += "<td>" + b.film + "</td><td>" + b.antall
          + "</td><td>" + b.fornavn + "</td><td>" + b.etternavn + "</td><td>"
          + b.telefonnr + "</td><td>" + b.epost +"</td></tr>";
   }
   document.getElementById("billetter").innerHTML = ut;
}

// Tømmer arrayet når man trykker på knappen "Slett alle billettene"
function slettBilletter(){
   billetter.length = 0;
   visBilletter();
}


