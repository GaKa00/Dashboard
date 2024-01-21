Dashboard Project.
Byggt av: Gabriel Kassarp.

Starta upp:


Krav:
-Vite
-Axios
- API nyckel för:
    https://openweathermap.org
    https://zenquotes.io 
    https://unsplash.com/developers 



    Funktionalitet:


    Favorit Länkar


    To-Do/Resolve:
        Vid sidrefresh, återgår de sparade länkarna till normalt.



    Dashboarden kan skapa favoritiserade länkar, via de tre knappar under "Favoriter" Kortet. Knapparna beskriver lätt funktionaliteten. Trots detta kommer den förklarar vidare i denna fil.

    -Skapa Länk.
            1. Tryck på knappen "+ Add link"
            2. Skriv in namnet på sidan du vill besöka ex. Google, Facebook osv i prompt rutan som dyker upp.
           


    -Ändra Länk.
            1. Tryck på knappen " Change link"
            2. Tryck på det kortet med den länken du vill ändra.
            3. Kopiera in länken som du vill byta ut mot (Notera att hela länken måste klistras in) Tryck sedan ok.
            4. Skriv in namnet på vad Länken ska kallas (Ex. My courses, My YT channel etc.)

        
    -Ta bort Länk.   
            1. Tryck på knappen " Remove link"
            2. Tryck på det kortet med den länken du vill ta bort.


    Lokal väder prognos

     To-Do/Resolve:


     När du laddar in sidan, finner du en lokal väder prognos för  den nuvarande plats. Dashboarden visar väder samt temperatur för idag, imorgon och i övermorgon.



    Dagligt Citat

     To-Do/Resolve:


    När du laddar in sidan, finner du ett dagligt citat.



    Antecknigar
         To-Do/Resolve:


    I "Notes" sektionen av Dashboarden, kan du skriva in valfria anteckningar, som sparas efter du skrivigt i anteckningsfältet.

    Namnbyte av Dashboard

         To-Do/Resolve:

    Likt anteckningsfältet, kan du även byta namn på dashboardens titel, genom att trycka på titeln, och sedan skriva in dess nya namn.


    Byte av bakgrundsbild
         To-Do/Resolve:

    I denna dashboard går det även att byta bild på bakgrunden, genom att trycka på knappen "Change background"




    Motivering till metodval/kod. (För VG-Nivå)

    Tid/Datum uppbyggnad
        Anledningen till varför Tid/Datum sektionen av dashboarden är uppdelat i två olika span, istället för endast ett, är för att det skapade problematik i styling, då de spannet ej hade nog med mellanrum emellan elementen. Även om detta mellanrum hårdkodades in, så skapade det en oönskad design.

    Brist på väderikoner
        Anledningen till därför det står Today, Tomorrow och datumet iövermorron istället för väder ikoner, är för att ikonerna ej gick att hämta ut ifrån väder apiet.  Om detta är pga apiets begränsningar eller programmerarens bristande kunskap är oklart.  Därför, för att ge väden sektionen en mer slutgiltig touch, har texten inplementerats i väderkorten.
 
    Länkarnas kod













