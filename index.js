
const getCountyInfo = countryName => {
    axios
        .get(`https://restcountries.com/v3.1/name/${countryName}`)
        .then(response => {

            const countryDetails = response.data

            countryDetails.forEach(country => {
                console.log(country.name.common);
            })

            const nameBox = document.getElementById('country-name')
            const flagBox = document.getElementById('country-flag')

            nameBox.innerText = countryDetails[0].name.common
            flagBox.setAttribute('src', countryDetails[0].flags.png)

            flagBox.addEventListener('click', () => {
                getCountyInfo('morocco')
            })
            

        })
        .catch(err => console.error(err))
    
}


const countryBtn = document.querySelector('#get-country-btn')

countryBtn.addEventListener('click', () => {
    
    const userInput = document.querySelector('#country-name-input').value
   
    getCountyInfo(userInput)

})