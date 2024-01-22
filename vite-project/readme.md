Dashboard Project.
Byggt av: Gabriel Kassarp.

1. Krav
2. Funktionalitet
3. Kodmotivering

Starta upp:


1. Krav:
 1.1 -Vite
        - Installering av vite
    
1.2 -Axios
        -Installering av Axios

1.3 -API nyckel för:
        https://openweathermap.org
        https://zenquotes.io 
        https://unsplash.com/developers 

1.4    Extension för Cors (Eller annan metod för att tillåta CORS i browser.).
            Exempel: https://microsoftedge.microsoft.com/addons/detail/allow-cors-accesscontro/bhjepjpgngghppolkjdhckmnfphffdag?refid=bingshortanswersdownload

    1.4.1 - Installering av Cors Extension 
            Installering av Cors Extension görs via ovannämnd länk,
            Tryck på "Get"/"Hämta" knappen,
            Tryck på "Add Extension"/"Lägg till tillägg",
            Tryck på "C :"ikonen högst upp till höger om sökfältet. (Alternativt, om den ej finns, tryck på pusselikonen, välj "Allow CORS: Access-Control-Allow-Origin" => "visa i verktygsfältet." 
            Sedan tryck på tidigarenämnd ikon),
            Tryck på "Toggle On|Off" tills C: ikonen tar färg.

 





   2. Funktionalitet:


    2.1 -Favorit Länkar


    



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

        2.1.1 -To-Do/Resolve:
        Vid sidrefresh, återgår de sparade länkarna till normalt.


    2.2 -Lokal väder prognos

    

     När du laddar in sidan, finner du en lokal väder prognos för  den nuvarande plats. Dashboarden visar väder samt temperatur för idag, imorgon och i övermorgon.

         2.2.1 -To-Do/Resolve:



    2.3 -Dagligt Citat
    När du laddar in sidan, finner du ett dagligt citat, hämtat från Zenquotes.io.

       2.3.1 -To-Do/Resolve:



    2.4 -Antecknigar
         


    I "Notes" sektionen av Dashboarden, kan du skriva in valfria anteckningar, som sparas efter du skrivigt i anteckningsfältet.
          2.4.1  -To-Do/Resolve:

    2.5 -Namnbyte av Dashboard

         

    Likt anteckningsfältet, kan du även byta namn på dashboardens titel, genom att trycka på titeln, och sedan skriva in dess nya namn.
       2.5.1 -To-Do/Resolve:


    2.6 -Byte av bakgrundsbild
         

    I denna dashboard går det även att byta bild på bakgrunden, genom att trycka på knappen "Change background"

      2.6.1  -To-Do/Resolve:




    3. Motivering till metodval/kod. (För VG-Nivå)

    3.1 Tid/Datum uppbyggnad
        Anledningen till varför Tid/Datum sektionen av dashboarden är uppdelat i två olika span, istället för endast ett, är för att det skapade problematik i styling, då de spannet ej hade nog med mellanrum emellan elementen. Även om detta mellanrum hårdkodades in, så skapade det en oönskad design.

    3.2 Brist på väderikoner
        Anledningen till därför det står Today, Tomorrow och datumet iövermorron istället för väder ikoner, är för att ikonerna ej gick att hämta ut ifrån väder apiet.  Om detta är pga apiets begränsningar eller programmerarens bristande kunskap är oklart.  Därför, för att ge väden sektionen en mer slutgiltig touch, har texten inplementerats i väderkorten istället.
 
    3.3 Länkarnas kod
        Koden till länkarna är onödligt komplicerad, då den istället skule kunna utnyttja ett api anrop för sin sökfunktionalitet, eller vidare arraymetoder så som map för att skapa liknande eller bättre funktionalitet. Anledningen till kodens överflödiga natur är på grund av programmerarens val att skapa denna funktionalitet utan några hjälpmedel för att självskatta sin egna kunskap i metoder bortseende från api anrop. Tanket att använda map, kom senare i projektets gång, och brist på tid gjorde omformattering ett sekundärt fokus.
        Även användandet a alert istället för ex. dialog rutor kom ned till att design ej var ett krav,utan funktionalitet var rådande fokus.



    3.4 Övriga Punkter.

            Övriga Punkter kommer att noteras efter projektets demande den 25/1, för att vidare utveckla eventuella frågor som uppstodunder momentet.














