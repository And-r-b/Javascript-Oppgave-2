/******************************************************************************
Funksjoner og metoder oppgave

Les oppgaveteksten NØYE. Vis noen eksempler i koden din som tester
funksjonene og metodene dine. Bruk en variasjon av pilfunksjoner (arrow functions)
og funksjoner laget med nøkkelordet `function`.

Legg til kommentarer i koden din som kort forklarer hva den gjør.

******************************************************************************/

/******************************************************************************
1.

Lag følgende funksjon:

Funksjonen skal ta inn et tall som parameter og returnere
"Oddetall" hvis tallet er et oddetall og "Partall" hvis tallet er et partall.
(PS: Funksjonen skal bruke return, du skal ikke bruke console log inni
funksjonen)

******************************************************************************/

// Skriv koden for oppgave 1 her

// klassiske funksjonen

let numbers = 6 // Her kan du skrive enten 3 eller 6
function myNumber() {
    if (numbers === 3) { //Hvis tallet er 3 så vil det retunere stringen "Oddetall"
        return "Oddetall";
    }else (numbers === 6); // Hvis tallet er 6 så vil det retunere stringen "Partall"
        return "Partall"
}

console.log(myNumber()) // Vi console logger funksjon variabelen sånn at vi kan få svaret i console på nettleseren.



/******************************************************************************
2.

Lag følgende funksjon:

Funksjonen skal ta inn en string som parameter og returnere stringen
i STORE BOKSTAVER med et utropstegn på slutten.

Eksempel: "Dette er kult" skal returnere "DETTE ER KULT!"

******************************************************************************/

// Skriv koden for oppgave 2 her

let myText = () => {
     const text = "Dette er kult!";
    return text.toUpperCase();
}

console.log(myText())

/******************************************************************************
3.

Lag følgende funksjon:

Funksjonen skal ta inn 2 parametere:

 - Et navn (string)
 - En time på døgnet (nummer)

Funksjonen skal returnere:
"Ugyldig tid" hvis timeverdien er mindre enn 0.
"God natt (mottatt navn)" hvis timeverdien er mellom 0 og 5.
"God morgen (mottatt navn)" hvis timeverdien er mellom 6 og 11.
"God dag (mottatt navn)" hvis timeverdien er mellom 12 og 17.
"God kveld (mottatt navn)" hvis timeverdien er mellom 18 og 23.
"Ugyldig tid" hvis timeverdien er større enn 23.

Hvis ingen timeverdi mottas, skal funksjonen returnere en feilmelding.

******************************************************************************/

// Skriv koden for oppgave 3 her

const myName = "Andreas";                   // Navn på Person (Tokk mitt navn som et eksempel)

function checkTime (hour) {                 // satt parameter navn for time verdien.
    if (hour >= 1 && hour <= 5) {           // Sjekker mellom timeverdi 1 og 5 og returnerer "god natt "Navn"
        return `God Natt ${myName}!`;
    }else if (hour >= 6 && hour <= 11) {    // Sjekker mellom timeverdi 6 - 11 og returnerer "God Morgen "Navn"
        return `God Morgen ${myName}!`;
    }else if (hour >= 12 && hour <= 17) {   // Sjekker mellom timeverdi 12 - 17 og returnerer "God Dag "Navn"
        return `God Dag ${myName}!`;
    }else if (hour >= 18 && hour <= 23) {   // Sjekker mellom timeverdi 18 - 23 og returnerer "God Kveld "Navn"
        return `God Kveld ${myName}!`
    }else if (hour = 0) {                   // Sjekker hvis timeverdien er 0 og returnerer med "Ugyldig tid!"
        return "Ugyldig tid!";
    }else (hour > 23); {                    // Sjekker hvis timeverdien er høyere enn 23 og returnerer med "Ugyldig tid!"
        return "Ugyldig Tid!";
    }
}

// Sjekker om tidene funker med console.log(function(Tall))
console.log(checkTime(1))
console.log(checkTime(6))
console.log(checkTime(12))
console.log(checkTime(18))
console.log(checkTime(0))
console.log(checkTime(24))


/******************************************************************************
4.

Lag følgende funksjon:

Funksjonen skal ta inn en array som parameter og returnere arrayen
med første og siste indeks fjernet.

Eksempel 1: ["Rød", "Grønn", "Blå", "Gul"] skal returnere ["Grønn", "Blå"].

Eksempel 2: ["En", "To", "Tre", "Fire", "Fem", "Seks"] skal returnere
["To", "Tre", "Fire", "Fem"].

******************************************************************************/

// Skriv koden for oppgave 4 her

let color = ["Rød", "Grønn", "Blå", "Gul"];

let parOfArray = color.slice(1, 3);
console.log(parOfArray);

/******************************************************************************
5.

Lag følgende funksjon:

Funksjonen skal ta inn en string som parameter.

Bruk stringmetoder på stringen for å gjøre følgende:
 - Erstatt ordet "vanskelig" med "gøy".
 - Fjern mellomrom fra starten og slutten av stringen.

Returner deretter den oppdaterte stringen.

Eksempel 1: "  Javascript er vanskelig   " skal returnere "Javascript er gøy".
Eksempel 2: " Det er vanskelig å bruke metoder " skal returnere "Det er gøy å bruke metoder".
Eksempel 3: "   vanskelig        " skal returnere "gøy".

******************************************************************************/

// Skriv koden for oppgave 5 her

// Bruker eksemplene for oppgaven under

function wordChange() {
    const texting1 = "  Javascript er vanskelig  ";
    const texting2 = "Det er vanskelig å bruke metoder "
    const texting3 = "   vanskelig        " 

    //Alle har mellomrom og navn som må endres så da tar vi å bruker replace() for ordet "vanskelig" også bruker vi trim() for å fjerne mellomromene.
    console.log(texting1.replace("vanskelig", "gøy").trim());
    console.log(texting2.replace("vanskelig", "gøy").trim());
    console.log(texting3.replace("vanskelig", "gøy").trim());
}
console.log(wordChange()); // Etter at vi har gjort koden så bruker vi console.log på utsida for å få logge svaret ut.

/******************************************************************************
6.

Fullfør følgende steg for å manipulere "items"-arrayet. Hvert steg skal
fullføres ved å bruke passende array-metoder.

*******************************************************************************/

const items = ["Bok", "Penn", "Notatbok", "Viskelær", "Blyant", "Markør"];

/*******************************************************************************
Steg 1: Fjern det første elementet ("Bok") fra arrayen ved hjelp av riktig metode.

Steg 2: Finn og erstatt "Viskelær" med "Linjal" i arrayen.

Steg 3: Bruk splice-metoden til å fjerne både "Penn" og "Notatbok", og legg til "Markeringspenn" i deres plass.

Steg 4: Kombiner alle elementene i arrayen til en enkelt string ved å bruke " | " som separator.

Ekstra utfordring: Lag et nytt array som kun inkluderer elementer som inneholder bokstaven "e".

******************************************************************************/

// Skriv koden for oppgave 6 her

// Alt har blitt console.log() et føre de ble fjernet for litt finere vising i console.

// Steg 1
items.shift();

/* Steg 2: Måtte søke litt for å finne ut av at man kan ikke bruke replace inni ein array.
 så må konvertere arrayen til ein string også sette den tilbake igjen med split()
 Det ser da ut some dette.                                                              */

let joiningString = items.join(" ");
joiningString = joiningString.replace("Visklær", "Linjal")
const modifiedString = joiningString.split(" ");

// Steg 3 Splice metoden

modifiedString.splice(0, 2, "Markeringspenn");

// Steg 4
const finalized = modifiedString.join(" | ");

// Siste Steg

console.log(finalized);

// Ekstra utfordring | Tok litt søking for å finne ut et eksempel på hvordan det kan bli gjort.
//  Men skal prøve å skrive det jeg kan

const newArray = modifiedString.filter(word => word.includes("e"));

console.log(newArray);

/******************************************************************************
7.

EKSTRA UTFORDRING #1:

Dette er ikke obligatorisk, kun for de som vil ha en ekstra utfordring.

Lag følgende funksjon:

Funksjonen skal ta inn 2 parametere, en array og en string.

Sjekk om arrayen inneholder stringen. Hvis den gjør det, fjern elementet
fra arrayet og returner den oppdaterte arrayen.

Hvis arrayet ikke inneholder stringen, legg stringen til på slutten
av arrayet og returner det oppdaterte arrayet.

Eksempel 1: (["Rød", "Grønn"], "Blå") --> ["Rød", "Grønn", "Blå"]
Eksempel 2: (["Rød", "Grønn", "Blå"], "Grønn") --> ["Rød", "Blå"]
Eksempel 3: (["En", "To", "Tre"], "Fire") --> ["En", "To", "Tre", "Fire"]
Eksempel 4: (["En", "To", "Tre"], "To") --> ["En", "Tre"]

******************************************************************************/

// Skriv koden for oppgave 7 her

/******************************************************************************
8.

EKSTRA UTFORDRING #2:

Dette er ikke obligatorisk, kun for de som vil ha en ekstra utfordring.

Lag følgende funksjon:

Funksjonen skal ta inn ett parameter.

Hvis parameteret er en string:
Returner stringen med "😎" lagt til i starten og slutten.

Hvis parameteret er et tall:
Doble verdien, konverter den til en string, og returner den med "😎" lagt til i
starten og slutten.

Hvis parameteret er en boolean:
Returner "😎Ja😎" hvis parameteret er true, eller "😎Slapp av😎" hvis parameteret er false.

Hvis parameteret er en annen datatype:
Returner "😎Kun primitive verdier😎".

******************************************************************************/

// Skriv koden for oppgave 8 her