import {countries} from './data/countries_data.js';

// Return number of countries matching in heading:

const countriesNumber = document.getElementById('countries-number');

const displayMatchingCountries = () => {
  if (inputValue.value === '') {
    countriesNumber.innerHTML = `Currently, we have ${countries.length} countries`;
  } else {
    let numberOfCountries = [];
    for (let i = 0 ; i < countries.length ; i++) {
      if (countryCard[i].style.display === 'block') {
        numberOfCountries.push(i);
      }
    }
    countriesNumber.innerHTML = `Currently, we have ${numberOfCountries.length} countries`;
  }
}

// Create the initial display of the page:
const nameArrow = document.getElementById('name-arrow');
const capitalArrow = document.getElementById('capital-arrow');
const populationArrow = document.getElementById('population-arrow');

const totalCountries = () => {
  // Create a new div for each country in countries array:
  countries.forEach(item => {
    result.innerHTML += 
    `<div class="country">
      <img class="flag" src="${item.flag}" alt="${item.name} flag" />
      <h2 class="name">${item.name}</h2>
      <p class="paragraph capital" data-capital="${item.capital.toLowerCase()}"><span>Capital</span>: ${item.capital}</p>
      <p class="paragraph language"><span>Languages</span>: ${item.languages.join(', ')}</p>
      <p class="paragraph population" data-population="${item.population}"><span>Population</span>: ${item.population.toLocaleString('en')}</p>
    </div>`;
  })

  // Display initial sorting arrows:
  capitalArrow.style.display = 'none';
  populationArrow.style.display = 'none';
}

// Filter countries by name, capital or language:

let inputValue = document.getElementById('search-bar');
let countryCard = document.getElementsByClassName('country');

const filterCountries = () => {

  if (inputValue.value === '') {
    for (let j = 0 ; j < countryCard.length ; j++) {
      countryCard[j].style.display = 'block';
    }
  }
  // Search for input pattern in country name, capital and language:
  for (let i = 0 ; i < countryCard.length ; i++) {
    if (!countryCard[i].children[1].lastChild.data.toLowerCase().includes(inputValue.value.toLowerCase()) && !countryCard[i].children[2].lastChild.data.toLowerCase().includes(inputValue.value.toLowerCase()) && !countryCard[i].children[3].lastChild.data.toLowerCase().includes(inputValue.value.toLowerCase())) {
      countryCard[i].style.display = 'none';
    } else {
      countryCard[i].style.display = 'block';
    }
  }
}

// Create function to sort data by country name:

const countryName = document.getElementById('name');
let countryCounter = 0;

const sortByCountryName = () => {
  if (countryCounter === 0) {
    for (let j = 0 ; j < countries.length ; j++) {
      countryCard[j].style.order = countries.length - j;
    }
    countryCounter = 1;
    capitalCounter = 0;
    populationCounter = 0;

    nameArrow.style.display = 'block';
    capitalArrow.style.display = 'none';
    populationArrow.style.display = 'none';
    nameArrow.style.borderBottom = '0px';
    nameArrow.style.borderTop = '5px solid black';

  } else {
    for (let k = 0 ; k < countries.length ; k++) {
      countryCard[k].style.order = k;
    }
    countryCounter = 0;
    capitalCounter = 0;
    populationCounter = 0;

    nameArrow.style.display = 'block';
    capitalArrow.style.display = 'none';
    populationArrow.style.display = 'none';
    nameArrow.style.borderBottom = '5px solid black';
    nameArrow.style.borderTop = '0px';
  }
}

// Create function to sort data by capital name:

const capitalName = document.getElementById('capital');
let capitalCounter = 0;

const sortByCapitalName = () => {
  let capitalSortedArray = countries.map(item => {
    return item.capital.toLowerCase();
  })
  capitalSortedArray = capitalSortedArray.sort();

  if (capitalCounter === 0) {
    for(let i = 0 ; i < countries.length ; i++) {
      countryCard[i].style.order = capitalSortedArray.indexOf(countryCard[i].children[2].attributes['data-capital'].value);
    }
    capitalCounter = 1;
    countryCounter = 1;
    populationCounter = 0;

    nameArrow.style.display = 'none';
    capitalArrow.style.display = 'block';
    populationArrow.style.display = 'none';
    capitalArrow.style.borderBottom = '5px solid black';
    capitalArrow.style.borderTop = '0px';

  } else {
    for (let j = 0 ; j < countries.length ; j++) {
      countryCard[j].style.order = countries.length - capitalSortedArray.indexOf(countryCard[j].children[2].attributes['data-capital'].value);
    }
    capitalCounter = 0;
    countryCounter = 1;
    populationCounter = 0;

    nameArrow.style.display = 'none';
    capitalArrow.style.display = 'block';
    populationArrow.style.display = 'none';
    capitalArrow.style.borderBottom = '0px';
    capitalArrow.style.borderTop = '5px solid black';
  }
}

// Create function to sort data by population size:

const populationSize = document.getElementById('population');
let populationCounter = 0;

const sortByPopulationSize = () => {
  // Create array with population sizes inside:
  let populationSortedArray = countries.map(item => {
    return item.population
  })
  // Sort this array ascending:
  populationSortedArray = populationSortedArray.sort((a, b) => {
    return a - b;
  });
  // Turn items of array into strings:
  populationSortedArray = populationSortedArray.map(item => item.toString());
  
  if (populationCounter === 0) {
    for(let i = 0 ; i < countries.length ; i++) {
      countryCard[i].style.order = populationSortedArray.indexOf(countryCard[i].children[4].attributes['data-population'].value);
    }
    capitalCounter = 0;
    countryCounter = 1;
    populationCounter = 1;

    nameArrow.style.display = 'none';
    capitalArrow.style.display = 'none';
    populationArrow.style.display = 'block';
    populationArrow.style.borderBottom = '5px solid black';
    populationArrow.style.borderTop = '0px';

  } else {
    for(let j = 0 ; j < countries.length ; j++) {
      countryCard[j].style.order = countries.length - populationSortedArray.indexOf(countryCard[j].children[4].attributes['data-population'].value);
    }
    capitalCounter = 0;
    countryCounter = 1;
    populationCounter = 0;

    nameArrow.style.display = 'none';
    capitalArrow.style.display = 'none';
    populationArrow.style.display = 'block';
    populationArrow.style.borderBottom = '0px';
    populationArrow.style.borderTop = '5px solid black';
  }
}

// Code for second part of the page (top ten population and languages):

// Create the div for the top ten:

const topTen = document.getElementById('sorted-results');

// Create a list of 10 sub-arrays with country names and population inside:
let topTenPopulationSortedArray = countries.map(item => {
  return [item.name, item.population];
})
topTenPopulationSortedArray = topTenPopulationSortedArray.sort((a, b) => {
  return b[1] - a[1];
});
const topTenPopulationSortedArrayStr = topTenPopulationSortedArray.slice(0, 10).map(item => [item[0], item[1].toLocaleString('en')]);



// Create and populate the 10 div of the webpage:

const topTenSection = () => {
  for (let i = 0 ; i < 10 ; i++) {
    topTen.innerHTML +=
      `<p id="country-lang${i}" class="country-lang">${topTenPopulationSortedArrayStr[i][0]}</p>
      <div id="bar${i}" class="bar"></div>
      <p id="result${i}" class="number">${topTenPopulationSortedArrayStr[i][1]}`;

    // Adjust width of the bar relatively to the biggest population:
    const maxPopulation = topTenPopulationSortedArray[0][1];
    document.getElementById(`bar${i}`).style.width = topTenPopulationSortedArray[i][1] / maxPopulation * 100 + '%';
  }
}

// Find the most spkoken languages:
let languagesArray = [];

const mostSpokenLanguages = () => {
  let languagesObject = {};

  countries.forEach(item => {
    for (let i = 0 ; i < item.languages.length ; i++) {
      if (languagesObject[item.languages[i]] === undefined) {
        languagesObject[item.languages[i]] = 1;
      } else {
        languagesObject[item.languages[i]] += 1;
      }
    }
  })
  for (let key in languagesObject) {
    languagesArray.push([key, languagesObject[key]]);
  }
  languagesArray = languagesArray.sort((a, b) => {
    return b[1] - a[1];
  }).slice(0, 10);
}

// Replace values when 'languages' is clicked:

const replaceByLanguages = () => {
  for (let i = 0 ; i < 10 ; i++) {
    document.getElementById(`country-lang${i}`).innerHTML = languagesArray[i][0];
    document.getElementById(`bar${i}`).style.width = languagesArray[i][1] / languagesArray[0][1] * 100 + '%';
    document.getElementById(`result${i}`).innerHTML = languagesArray[i][1];
  }
}

// Replace values when 'population' is clicked:

const replaceByPopulation = () => {
  for (let i = 0 ; i < 10 ; i++) {
    document.getElementById(`country-lang${i}`).innerHTML = topTenPopulationSortedArrayStr[i][0];
    document.getElementById(`bar${i}`).style.width = topTenPopulationSortedArray[i][1] / topTenPopulationSortedArray[0][1] * 100 + '%';
    document.getElementById(`result${i}`).innerHTML = topTenPopulationSortedArrayStr[i][1];
  }
}

// Change introduction sentence of second section:

const topPopulation = document.getElementById('top-population');
const topLanguages = document.getElementById('top-languages');
const introductionSentence = document.getElementById('top-ten-pop-lang');

const languagesSentence = () => {
  introductionSentence.innerHTML = '10 most spoken languages in the World';
}

const populationSentence = () => {
  introductionSentence.innerHTML = '10 most populated countries in the World';
}


// Call functions and add event listeners:

totalCountries();
displayMatchingCountries();
topTenSection();
mostSpokenLanguages();
inputValue.addEventListener('input', filterCountries);
inputValue.addEventListener('input', displayMatchingCountries);
countryName.addEventListener('click', sortByCountryName);
capitalName.addEventListener('click', sortByCapitalName);
populationSize.addEventListener('click', sortByPopulationSize);
topPopulation.addEventListener('click', populationSentence);
topPopulation.addEventListener('click', replaceByPopulation);
topLanguages.addEventListener('click', languagesSentence);
topLanguages.addEventListener('click', replaceByLanguages);