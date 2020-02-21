# MORE Säätutka
säätutka sovellus, joka esittää MOREn toimistojen sijaintien säätiedot kuluvan päivän osalta.

### Sovelluksen suorittaminen
##### Kloonaa repositorio koneellesi komennolla: 
`git clone https://github.com/Tatatofly/MOREsaatutka.git`

##### Siirry hakemistoon 
`cd MOREsaatutka`

##### Asenna tarvittavat paketit 
`npm install`

##### Tässä vaiheessa sinun tulee lisätä OpenWeatherMap API -avaimesi tiedostoon apikey.json alla olevilla ohjeilla

##### Suorita sovellus komennolla 
`npm start`

Mikäli näet selaimessasi Säätutka -tekstin alapuolella vain "Loading..." -palkkeja, on mahdollista että avain ei toimi tai sen käyttö ei jostain syystä onnistu.
Voit varmistaa asian sillä että selaimesi konsoliin tulostuu 401 Unauthorized -virheilmoituksia.

### OpenWeatherMap API -avain
Lisää API avain tiedostoon [apikey.json](https://github.com/Tatatofly/MOREsaatutka/blob/master/src/apikey.json).
Tiedosto sijaitsee hakemistossa src. Korvaa avaimellasi teksti "OpenWeatherMap_API_KEY".

### Live demo
[Viimeisin](https://github.com/Tatatofly/MOREsaatutka/tree/23a0c7300d079f0d5918a5f8099c8f2940ead014) versio sovelluksesta löytyy osoitteesta [http://murmuring-springs-88019.herokuapp.com/](http://murmuring-springs-88019.herokuapp.com/).

Demo ei välttämättä toimi oikein jos liikennettä on paljon. Tämä johtuu OpenWeatherMap API-rajapinnan rajoituksista.