Potrebno je implementirati responzivnu navigaciju koja uvijek prikazuje maksimalno dostupni broj nav-itema sa obzirom na njihovu širinu i širinu dostupnog viewport-a.
Svi nav-bar itemi koji ne stanu unutar viewport-a se pomiču u dropdown menu gdje su dostupni klikom na “…”

Navigacija treba reagirati na resize browser-a i rekalkulirati se.

Par napomena I pravila:

	1.	Između svakog nav-bar itema je minimalno 10px padding-a.
	2.	Svaki nav-bar item prikazuje maksimalno 1 riječ u jednom redu, iznimka je ako je riječ manja od 3 slova.
	3.	Svi nav-bar itemi koji stanu unutar viewport-a dijele ravnomjerno dostupni slobodni prostor (kao na slikama).
	4.	Nav-bar itemi se uvijek prikazuju u jeziku koji je trenutno selected (i reagira na promjenu jezika očekivano).
	5.	Navigacija se treba rekalkulirati na promjenu jezika.
	6.	Ukoliko nije problem riješite ovaj zadatak sa React-om 
	7.	Napravite novi github projekt i commit-ajte tamo svoj rezultat (više od jednog commit-a je poželjno), kad ste gotovi pošaljite nam link na projekt

const menuItems = {
      hr: [
        "Ljepota i Vi",
        "Kuhanje na zdrav način",
        "Kampiranje na otvorenom",
        "Aktivirajte se",
        "Meditacija",
        "2 + 2 = 3",
        "Za filmofile i knjigoljupce",
        "Jučer danas sutra"
      ],
      en: [
        "Beauty and You",
        "Healthy Cooking",
        "Outdoor Camping",
        "Activate",
        "Meditation",
        "2 + 2 = 3",
        "Cinephiles' and Booklovers' Corner",
        "Yesterday Today Tomorrow"
      ]
};


Slike su u prilogu.

Lijepi pozdrav i sretno!

