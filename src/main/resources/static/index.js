// oppretter et tomt array for å lagre billettene
const billetter = [];

function registrerBillett() {
   const film = document.getElementById("film").value;
   const antall = Number(document.getElementById("antall").value);
   // + validering
   const fornavn = document.getElementById("fornavn").value;
   // + validering
   const etternavn = document.getElementById("etternavn").value;
   // + validering
   const telefonnr = document.getElementById("telefonnr").value;
   // + validering
   const epost = document.getElementById("epost").value;
   // + validering

   // Legger billettene inn i et array
   const enBillett = {
      film : film,
      antall : antall,
      fornavn : fornavn,
      etternavn : etternavn,
      telefonnr : telefonnr,
      epost : epost
   };
   billetter.push(enBillett);
   visBilletter()

   // Nullstiller input-feltene
   document.getElementById("film").value="";
   document.getElementById("antall").value="";
   document.getElementById("fornavn").value="";
   document.getElementById("etternavn").value="";
   document.getElementById("telefonnr").value="";
   document.getElementById("epost").value="";
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
          + b.telefonnr + "</td><td>" + b.epost +"</td>";
   }
   document.getElementById("billetter").innerHTML = ut;
}

// Tømmer arrayet når man trykker på knappen "Slett alle billettene"
function slettBilletter(){
   billetter.length = 0;
   visBilletter();
}


