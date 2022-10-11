/* Miejsce na enumy, świetnie nadające się, np. do obsługi rozmaitych opcji, których nie chcemy poddawać przypadkowi lub narażać na literówki. W tym projeckie używam ich do obsługi błędów oraz podczas pobierania danych z API. */

export enum EndpointsEnum {
  fetchDebts = 'http://rekrutacja-webhosting.it.krd.pl/api/Recruitment/GetTopDebts',
  fetchFilteredDebts = 'http://rekrutacja-webhosting.it.krd.pl/api/Recruitment/GetFilteredDebts',
}

export enum ErrorsEnum {
  fetch = 'Error occurred while the data fetching attempt!',
  type = 'Incorrect type!',
}
