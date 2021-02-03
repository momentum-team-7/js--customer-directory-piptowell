// console.log('yay') to confirm script is connected

const container = document.querySelector(".container")

//pull one data object/index from the array 
let customer = customers[0]
console.log('customers called')  //confirmed that it's been called
console.log("customerProfile title is", customer.name.title) //confirm that we can call the data from the array of data


for (let customer of customers) {
    const customerCard = document.createElement('div')
    
    customerCard.classList.add('customer-card')


    const customerImage = document.createElement("img")
    customerImage.src = customer.picture.large 
    customerCard.appendChild(customerImage)


    const customerName = document.createElement("h4")
    customerName.innerHTML = `${customer.name.first} ${customer.name.last}`
    customerCard.appendChild (customerName)


    const customerEmail = document.createElement("p")
    customerEmail.innerHTML = customer.email
    customerCard.appendChild (customerEmail)


    const customerAddress = document.createElement("p")
    customerAddress.innerHTML = `${customer.location.street.number} ${customer.location.street.name} 
    ${customer.location.city}, ${nameToAbbr(customer.location.state)} ${customer.location.postcode}`
    customerCard.appendChild (customerAddress)


    const customerBirthday = document.createElement("p")
    customerBirthday.innerText = customer.dob.date
    customerCard.appendChild (customerBirthday)


    const customerRegDate = document.createElement("p")
    customerRegDate.innerText = customer.registered.date
    customerCard.appendChild (customerRegDate)
    
    container.appendChild(customerCard)
}

// function titleCase(name) {
//     let allNames = name.toLowerCase().split(‘’);
//     for (let i = 0; i < allNames.length; i++) {
//         allNames[i] = allNames[i][0].toUpperCase() + allNames[i].slice(1);
//     }
//     return allNames.join(‘’);
// }