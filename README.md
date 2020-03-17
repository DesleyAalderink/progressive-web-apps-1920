# Progressive Web Apps @cmda-minor-web · 2019-2020

In this course we will convert the client side web application previously made at the OBA into a server side rendered application. We also add functionalities based on the Service Worker and turn the application into a Progressive Web App. Ultimately we are going to implement a series of optimisations to improve the performance of the application.  

## Learning goals
- _You understand the difference between client side and server side rendering and you can apply server side rendering
in your application_
- _You understand how a Service Worker works and you can implement it in your application._
- _You understand how the critical render path works and how you can optimize it for a better runtime and / or perceived performance._

[Rubric](https://docs.google.com/spreadsheets/d/e/2PACX-1vSc48v1nrjcwH0llcTd68xyK7f2fDC2UL4d6h4ZNW3DU8ucez6ZOHiId1XSX0RP5ByvLC8p5pVUGZT4/pubhtml)

## Program

### Week 1 - Server Side Rendering 📡

Goal: Render web pages server side

[Exercises](https://github.com/cmda-minor-web/progressive-web-apps-1920/blob/master/course/week-1.md)  
[Slides](...)  
[The Web landscape](...)  


### Week 2 - Progressive Web App 🚀

Goals: Convert application to a Progressive Web App

[Opdrachten](https://github.com/cmda-minor-web/progressive-web-apps-1920/blob/master/course/week-2.md)  
[Slides](...)


### Week 2 - Critical Rendering Path 📉 

Doel: Optimize the Critical Rendering Path   
[Opdrachten](https://github.com/cmda-minor-web/progressive-web-apps-1920/blob/master/course/week-3.md)  
[Slides](...)


<!-- Add a link to your live demo in Github Pages 🌐-->

<!-- ☝️ replace this description with a description of your own work -->
## De opdracht
Ik heb besloten om de website "https://studiohomebase.amsterdam/" te verbeteren. Dit is een website die ooit gemaakt is door The Pack (bedrijf waar ik nu werk). Deze site is erg outdated en kan zeker een opfrisser gebruiken. Ik heb alle door The Pack gemaakte websites naast elkaar neergezet en deze resulteerde als de slechtste van de Google Audit score. Ik heb de checklist lijstje van Performance Matters erbij gepakt samen met de Google Audit tool en gekeken wat ik kan fixen. De audit zelf liet al genoeg opties zien wat veranderd kan worden.

Het was tijdens het verbeteren van de website belangrijk om te onthouden dat al de gemaakte veranderingen live gingen, dus ik moet verbeteren wat echt een toevoeging is voor de website.

## Mijn progressie

### Set Up
Ik ben begonnen met het vervangen van de code setup. Toen ik begon met stagelopen bij The Pack heb ik een nieuwe "Vanilla Template" gebouwd waarop gedeveloped kon worden. Deze template behoord aan veel eisen voor een hogere/snellere performance. Dit vanilla template heb ik geïmplementeerd in de Studiohomebase website. Alles wordt nu succesvol geminifyd en ook zit er [Modernizr](https://modernizr.com/) in. Dit is als het ware een feature detection die kijkt naar elementen die niet support worden in de browser en maakt hier een fallback voor.

### Lazy loading
Alle afbeeldingen worden nu lazy loaded ingeladen. Hiervoor heb ik de [Intersection Observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) gebruikt. Het moment dat de afbeeldingen in de viewport komen zal deze worden ingeladen.

### Images
De vanilla template houdt al rekening met de compressie van afbeeldingen, maar nog niet met het serven van de afbeeldingen in de juiste formaat. Aangezien deze website draait op Wordpress heb ik een handige plug in tool gevonden genaamd [Imagify](https://wordpress.org/plugins/imagify/) wat rekening houdt met wat de gebruiker upload in de media library. Deze afbeeldingen worden omgezet naar een WebP formaat en deze worden ook nog compressed. De images worden nu ook op de juiste manier opgeroepen in de `<picture>` tagg.

Na wat testen en onderzoeken kwam ik er achter dat het webp formaat niet overal support wordt. Door deze reden heb ik dus ook besloten om de afbeeldingen maar niet in webp formaat om te zetten.

### Fonts
Fallback fonts zijn toegevoegd op de fonts die gebruikt worden samen met de font subsetting voor een snellere performance. Ook is `font-display: swap` toegevoegd, zodat eerst de fallback fonts er staan, voor de standaard font is ingeladen.

### Caching
Voor caching heb ik Redis gebruikt. Dit bewaard de cach op een apparte plek, waardoor de website sneller functioneerd.

### CSS
CSS wordt nu geminifyed en veel onnodige CSS is verwijderd. Niet alles kon verwijderd worden, aangezien veel plug ins geactiveerd zijn die CSS inladen die niet gebruikt worden, hier kan ik helaas niet veel aan doen.

### JavaScript
De hele JavaScript was opgebouwd uit JQuery, dit heb ik stuk voor stuk omgebouwd naar Vanilla JS. Dit duurde best lang, aangezien het veel code is. De JS wordt ook geminifyed en werd al ingeladen onderaan de body.

### Animations
RequestAnimationFrame is nu toegepast op de animaties voor een veel soepelere animatie.

### Service Worker
Voor de website heb ik een service worker geïmplementeerd. Dit vond ik het meest interessante van de hele optimalisatie. Toen ik hier de vorige keer aan begon snapte ik er niks van en was er zelfs een beetje bang voor. Nu ik meer kennis heb kon ik het redelijk snel toevoegen. De website wordt nu succesvol gecached als de gebruiker op de website komt. Als het internet zou uitvallen dan kan de gebruiker nog steeds op de website navigeren.


<!-- Add a nice image here at the end of the week, showing off your shiny frontend 📸 -->

<!-- Maybe a table of contents here? 📚 -->

<!-- How about a section that describes how to install this project? 🤓 -->

<!-- ...but how does one use this project? What are its features 🤔 -->

<!-- What external data source is featured in your project and what are its properties 🌠 -->

<!-- Maybe a checklist of done stuff and stuff still on your wishlist? ✅ -->

<!-- How about a license here? 📜 (or is it a licence?) 🤷 -->
