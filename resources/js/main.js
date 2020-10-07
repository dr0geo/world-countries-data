const countries = [
  {
    name: 'Afghanistan',
    capital: 'Kabul',
    languages: ['Pashto', 'Uzbek', 'Turkmen'],
    population: 27657145,
    flag: 'https://restcountries.eu/data/afg.svg',
    currency: 'Afghan afghani'
  },
  {
    name: 'Åland Islands',
    capital: 'Mariehamn',
    languages: ['Swedish'],
    population: 28875,
    flag: 'https://restcountries.eu/data/ala.svg',
    currency: 'Euro'
  },
  {
    name: 'Albania',
    capital: 'Tirana',
    languages: ['Albanian'],
    population: 2886026,
    flag: 'https://restcountries.eu/data/alb.svg',
    currency: 'Albanian lek'
  }]

// FIXME Return number of countries matching in heading:

const countriesNumber = document.getElementById('countries-number');

const countriesMatching = () => {
  countriesNumber.innerHTML = `Currently, we have ${countries.length} countries`;
}

// Create a div for each of the countries in the array:

const result = document.getElementById('result');

const totalCountries = () => {
  countries.forEach(item => {
    result.innerHTML += 
    `<div class="country">
      <img class="flag" src="${item.flag}" alt="${item.name} flag" />
      <h2 class="name">${item.name}</h2>
      <p class="paragraph capital">Capital: ${item.capital}</p>
      <p class="paragraph language">Languages: ${item.languages.join(', ')}</p>
      <p class="paragraph population">Population: ${item.population}</p>
    </div>`
})
}

countriesMatching();
totalCountries();