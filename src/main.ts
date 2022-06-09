import './style.css'

const cardForm = document.querySelector<HTMLFormElement>('#cardForm')
const cardList = document.querySelector<HTMLDivElement>('#cardList')

let profiles: Profile[] = []

interface  Profile {
  name: string
  tel: string
  email: string
  description: string
}

cardForm?.addEventListener("submit", e => {
e.preventDefault();

const name = cardForm['name'] as unknown as HTMLInputElement;
const tel = cardForm['tel'] as unknown as HTMLInputElement;
const email = cardForm['email'] as unknown as HTMLInputElement;
const description = cardForm['description'] as unknown as HTMLTextAreaElement;


profiles.push({
  name: name.value,
  tel: tel.value,
  email: email.value,
  description: description.value,
})

localStorage.setItem('profiles', JSON.stringify(profiles))

renderCards(profiles)

cardForm.reset()
name.focus()
})

document.addEventListener('DOMContentLoaded', () => {
 profiles =  JSON.parse(localStorage.getItem('profiles') || '[]')
renderCards(profiles)
})

function renderCards(profiles: Profile[]) {
  profiles.forEach(profile => {
  const profileElement = document.createElement('div')
  profileElement.className = 'bg-slate-700 mb-1 p-4 rounded-lg hover:bg-slate-600 hover:cursor-pointer'

  const header = document.createElement('header')
  header.className = 'flex justify-between'

  const btnDelete = document.createElement('button')
  btnDelete.className = 'bg-red-600 px-2 py-1 rounded-md hover:bg-red-500'
  btnDelete.innerText = 'Borrar'

  const name = document.createElement('span')
  name.innerText =`Nombre: ${profile.name}` 

  const tel = document.createElement('p')
  tel.innerText =`Tel: ${profile.tel}`

  const email = document.createElement('p')
  email.innerText = `Email: ${profile.email}`

  const description = document.createElement('p')
  description.innerText = `Descripcion: 
  ${profile.description}`

  header.append(name)
  header.append(btnDelete)


  profileElement.append(header)
  profileElement.append(tel)
  profileElement.append(email)
  profileElement.append(description)


  cardList?.append(profileElement)

  })
  
}

