const url = 'https://jsonplaceholder.typicode.com/users'
let element = document.getElementById('authors')

const fetchAuthors = () => {
fetch(url)
  .then(response => {
    return response.json()
  })
  .then(data => {
    let authors = data
    authors.map((author) => {
      const {
        address,
        company,
        email,
        name, 
        phone,
        website
      } = author
      const { city, street, suite, zipcode } = address
      element.innerHTML += `<li>
        <div>
          <h3>${name}</h3>
          <h4>${company.name}</h4>
          <address>
            <p>${street}, ${suite}</p>
            <p>${city}, ${zipcode}</p>
          </address>          
          <p><a href=${email} target="_blank">${email}</a></p>
          <p>${phone}</p>          
          <p><a href=${website} target="_blank">${website}</a></p>
        </div>
      </li>`;
    })    
  }).catch((error) => {
    console.log('Error', error)
  });
}
fetchAuthors()
  

