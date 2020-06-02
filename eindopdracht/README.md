## Introductie
Dit project is gemaakt naar aanleiding van het vak Progressive Web Apps.

![studio homebase][homebase]

## De opdracht
Ik heb besloten om de website "https://studiohomebase.amsterdam/" te verbeteren. Dit is een website die ooit gemaakt is door The Pack (bedrijf waar ik nu werk). Deze site is erg outdated en kan zeker een opfrisser gebruiken. Ik heb alle door The Pack gemaakte websites naast elkaar neergezet en deze resulteerde als de slechtste van de Google Audit score. Ik heb de checklist lijstje van Performance Matters erbij gepakt samen met de Google Audit tool en gekeken wat ik kan fixen. De audit zelf liet al genoeg opties zien wat veranderd kan worden.

## Letten op
Mijn gulpfile.babel.js bevat mijn taskrunners. Het is wel wat meer ingkewikeld dan wat er verwacht word, maar het is overzichtelijk in elkaar gezet. Ik denk dat alles wel voor zichzelf spreekt en anders geef ik daar graag antwoord op.
De veranderingen die ik heb toegebracht staan live op https://staging.studiohomebase.amsterdam.
Het hele project is gemaakt in Wordpress. De map "homebase" is het thema map en daarin zit alles wat ik heb gedaan. De ServiceWorkers horen in de root map (httdocs) van Wordpress.

## Ik ben het meest trots op
De voortgang die ik heb bereikt. Ik ben heel erg doorgegroeid op het gebied van coderen en daardoor ging deze opdracht mij ook goed af. Ik had er ook veel plezier mee en ben blij dat ik het bedrijf waar ik werk kan verbeteren met alles wat ik geleerd heb in de minor.
Ook ben ik erg trots op de 2000 regels JQuery die ik heb omgeschreven naar vanilla JS. Dit duurde heel lang en ik heb heel veel code kunnen verwijderen erdoor.

Het was tijdens het verbeteren van de website belangrijk om te onthouden dat al de gemaakte veranderingen live gingen, dus ik moet verbeteren wat echt een toevoeging is voor de website.

## Installeren
**1. Download wordpress**

**2. Download en installeer de custom thema**

**3. Pak de laatste database uit de dump folder en zet deze in je phpmyadmin**

**4. Pas de wp-config aan naar de desbetreffende settings**

**5. Vraag aan mij de inloggegevens voor de back-end van Wordpress**

**6. Met de command "gulp dev" activeer je local server**

## Dependencies
1. php
2. gulp
3. jshint 
4. modernizr
5. autoprefixer
6. rename
7. yargs
8. sass
9. cleanCss 
10. gulpif
11. postcss
12. sourcemaps
13. imagemin
14. webpack
15. named 
16. browserSync
17. gulp-zip
18. gulp-replace
19. gulp-wp-pot
20. minifyPipeline
21. gzip 
22. raster
23. penthouse
24. criticalCss
25. fs 
26. urlList 


## Mijn progressie

### Set Up
Ik ben begonnen met het vervangen van de code setup. Toen ik begon met stagelopen bij The Pack heb ik een nieuwe "Vanilla Template" gebouwd waarop gedeveloped kon worden. Deze template behoord aan veel eisen voor een hogere/snellere performance. Dit vanilla template heb ik geïmplementeerd in de Studiohomebase website. Alles wordt nu succesvol geminifyd en ook zit er [Modernizr](https://modernizr.com/) in. Dit is als het ware een feature detection die kijkt naar elementen die niet support worden in de browser en maakt hier een fallback voor.

### Lazy loading
Alle afbeeldingen worden nu lazy loaded ingeladen. Hiervoor heb ik de [Intersection Observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) gebruikt.

```js
  const config = {
    threshold: 0,
    rootMargin: "100px"
  };

  function preloadImage(el) {
    el.src = el.dataset.src
  }

  var observer = new IntersectionObserver(function(entries, self) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        preloadImage(entry.target);
        self.unobserve(entry.target);
      }
    });
  }, config);

  const imgs = document.querySelectorAll('img[data-src]');
  imgs.forEach(img => {
    observer.observe(img);
  });
```

Er wordt een rootmargin aangegeven die tegen de observer zegt vanaf hoeveel pixels, buiten de viewport, de image moet beginnen met inladen. Op het moment dat dit wordt aangegeven zal de nieuwe src van de image de data-src worden. In de data-src heb ik van te voren aangegeven wat de link image moet zijn.

### Images
De vanilla template houdt al rekening met de compressie van afbeeldingen, maar nog niet met het serven van de afbeeldingen in de juiste formaat. Aangezien deze website draait op Wordpress heb ik een handige plug in tool gevonden genaamd [Imagify](https://wordpress.org/plugins/imagify/) wat rekening houdt met wat de gebruiker upload in de media library. Deze afbeeldingen worden omgezet naar een WebP formaat en deze worden ook nog compressed. De images worden nu ook op de juiste manier opgeroepen in de `<picture>` tagg.

Na wat testen en onderzoeken kwam ik er achter dat het webp formaat niet overal support wordt. Door deze reden heb ik dus ook besloten om de afbeeldingen maar niet in webp formaat om te zetten.

```js
export const images = () => {
  return src('dev/images/**/*.{jpg,jpeg,png,svg,gif}')
    .pipe(gulpif(PRODUCTION, imagemin([
      imagemin.svgo({
        plugins: [
          { cleanupIDs: false }
        ]
      }),
      imagemin.gifsicle({optimizationLevel: 3}),
      imagemin.jpegtran(),
      imagemin.optipng({optimizationLevel: 7})
    ], {
      verbose: true
    })))
    .pipe(dest('assets/images'));
}
```

Om de afbeeldingen te optimaliseren, die ik er handmatig in heb gezet, hebben we de code hierboven. Hier worden alle afbeeldingen (inclusief gifs en svgs) gepakt en geminifyed kwa grootte. Het kwaliteit lijdt er niet onder en de afbeeldingen worden geplaatst in de asset folder.

### Fonts
Fallback fonts zijn toegevoegd op de fonts die gebruikt worden samen met de font subsetting voor een snellere performance. Ook is `font-display: swap` toegevoegd, zodat eerst de fallback fonts er staan, voor de standaard font is ingeladen. Dit laat de content meteen aan de gebruiker zien zonder dat ze hoeven te wachten en alleen maar wit zien.

### Caching
Voor caching heb ik Redis gebruikt. Dit bewaard de cach op een apparte plek, waardoor de website sneller functioneerd. Dit kon ik installeren door een plugin te installeren op de website en in de wp-config aan te geven wat de salt en het wachtwoord is.

### CSS
CSS wordt nu geminifyed en veel onnodige CSS is verwijderd. Niet alles kon verwijderd worden, aangezien veel plugins geactiveerd zijn die CSS inladen die niet gebruikt worden, hier kan ik helaas niet veel aan doen.

```js
export const styles = () => {
  return src(['dev/styles/vendor.scss'])
    .pipe(gulpif(!PRODUCTION, sourcemaps.init()))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulpif(PRODUCTION, cleanCss({compatibility:'ie8'})))
    .pipe(gulpif(!PRODUCTION, sourcemaps.write()))
    .pipe(autoprefixer({
        cascade: false
    }))
    .pipe(rename('main.css'))
    .pipe(dest('assets/css'))
    .pipe(server.stream());
}
```

De functie hierboven zorgt ervoor dat de scss file wordt gepakt en deze kopieerd naar de assets map. Op het moment dat de website live gaat gooien we de commande "--prod" erop om te zorgen dat de css geminifyed wordt.

### JavaScript
De hele JavaScript was opgebouwd uit JQuery, dit heb ik stuk voor stuk omgebouwd naar Vanilla JS. Dit duurde best lang, aangezien het veel code is. De JS wordt ook geminifyed en werd al ingeladen onderaan de body.

### Animations
RequestAnimationFrame is nu toegepast op de animaties voor een veel soepelere animatie.

### Gzipping
Dit wordt afgehandeld door de server van The Pack en hier heb ik zelf niet aangezeten. 

### Service Worker
Voor de website heb ik een service worker geïmplementeerd. Dit vond ik het meest interessante van de hele optimalisatie. Toen ik hier de vorige keer aan begon snapte ik er niks van en was er zelfs een beetje bang voor. Nu ik meer kennis heb kon ik het redelijk snel toevoegen. Een service worker is niks meer dan een webworker die netwerk requests onderschept. Wordt normaal gesproken gebruikt voor het cachen van bestanden of je website/applicatie online te laten werken.


```js
var assetsToCache = [
  '/wp-content'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
        return cache.addAll(assetsToCache);
    }).then(function() {
      return self.skipWaiting();
    })
  );
});
```

In mijn geval sla ik de hele wp-content map op. Deze map bevat alle bestanden die website gebruikt en hierdoor kan de website succesvol functioneren. Als de gebruiker op de website komt, dan zal de service worker te werk gaan. Als het internet zou uitvallen dan kan de gebruiker nog steeds op de website navigeren.

### API Service side 
Voor de website zelf heb ik niet echt iets spannends gedaan met de service side. Om te laten zien dat ik wel overweg kon met zowel service als client side heb ik dit wel verwerkt in mijn project voor Real Time Web. Een node project dat werkt met EJS. Het project zoals het nu opgebouwed is is een typing game. 

De gebruikers komen in een lobby waar ze een gebruikersnaam kunnen opgeven en de game kunnen starten. Er wordt server side gekeken of de aantal gebruikers minimaal 2 zijn. Als dit het geval is dan wordt er via de server een Tweet ingeladen (hiervoor heb ik de Twit NPM gebruikt). De reden dat ik dit via de server doe is, zodat de Tweets hetzelfde zijn en op de zelfde snelheid inkomen. 

Client side wordt er per gebruiker gekeken of de Tweet correct overtypen. Het moment dat een gebruiker de Tweet volledig heeft ingevuld, zal er via de server tegen iedereen die mee doet aan de game gezegd worden wie er een punt heeft gehaald. Dit gaat door tot iemand 3 punten heeft. De server verteld tegen iedereen wie er heeft gewonnen en de game kan opnieuw beginnen.

```js
const generateNewQuote = () => {
    T.get('search/tweets', { q: 'corona exclude:retweets', count: 4,  tweet_mode: 'extended', lang: 'en'})
    .then(data => {
        game.currentQuote = data.data.statuses[0].full_text

      if (game.players.length === game.playersNeededToStart) {
        setTimeout(() => {
          io.emit("startGame", game.currentQuote)
        }, 300)
      } else {
        console.log("niet genoeg mensen");
      }
    })
    return
  }
```

## Conclusie

Before: 
![Lighthouse before][lhb]

De performance valt hier heel erg laag. Onder de 10 zelfs. Om dit op te krikken heb ik de volgende punten verricht:
- css/js minifyen voor een snellere server boost.
- De bestanden worden geGzipped
- JQuery is eruit gehaald en volledig omgebouwd naar vanilla JS
- De images worden geoptimaliseerd 
- Er is een service worker toegevoegd
- Critical CSS is toegevoegd per pagina
- Redis voor caching

Door deze veranderingen door te voeren is de "Critical rendering path" sneller geworden.

Before: 

![Critical rendering before][crb]

After:

![Critical rendering after][cra]

Een ware speedboost. Gebruikers krijgen nu sneller een beeld te zien als ze op de website komen.
Om hier dieper in te kijken kunnen we de request snelheid erbij pakken:


Before: 

![Speedboost before][sbb]

Hier is te zien dat voor de veranderingen gedaan waren, de snelheid rond de 2.5 seconden is. Ook worden bepaalde bestanden niet goed opgehaald vanuit de server.

After:

![Speedboost after][sba]

De tijd om de bestanden op te halen is flink verminderd. In ongeveer 1.5 seconden wordt alles nu opgehaald. Dat is us een seconde minder dan voorheen. Ook worden de bestanden die niet goed werden opgehaald door de server nu wel goed opgehaald.


Uiteindelijk:
![Lighthouse after][lha]

Alles is omhoog gegaan. De performance is nog steeds laag, maar wel een flinke verbeter slag dan wat het voorheen was. De reden waarom de website nog steeds laag uitkomt zal zijn, omdat de website een oude wordpress website is. Ik heb veel veranderingen doorgevoerd die kunnen, maar eigenlijk zou de hele website vanaf scratch opnieuw opgebouwd worden.

Bepaalde punten konden ook niet goed verwerkt worden, zoals onnodige CSS verwijderen of dat de afbeeldingen WEBP moeten worden. Veel plugins bevatten onnodige CSS die niet verwijderd kunnen worden. WEBP formaten heb ik niet kunnen doorvoeren, omdat het niet overal support wordt. Hier zou dan weer een fallback voor geschreven moeten worden.

Deze opdracht is uiteindelijk rommelig in elkaar gezet. Het was eigenlijk niet de bedoeling dat de opdracht gemaakt werd in een Worpdress website. De API die ik laat zien is verwerkt in Real Time en eigenlijk hoort het allemaal bij elkaar. Ik heb wel veel geleerd van deze opdracht en zal de kennis zeker gebruiken in volgende projecten.


Link naar de realtime web met code? klik <a href="https://github.com/DesleyAalderink/real-time-web-1920">hier</a>

## Bronnen
- The Pack - Digital Agency => gevraagd voor de website die ik kon verbeteren
- StackOverflow => voor kleine errors 
- Developer Mozilla => hulp met de intersection observer en de Service Worker


[homebase]: homebase.png
[crb]: crb.png
[cra]: cra.png
[lhb]: lhb.jpg
[lha]: lha.jpg
[sbb]: sbbb.png
[sba]: sbaa.png
[lhb]: lhb.jpg
[lha]: lha.jpg
