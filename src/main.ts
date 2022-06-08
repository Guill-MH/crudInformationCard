import './style.css'

const cardForm = document.querySelector<HTMLFormElement>('#cardForm')
const cardList = document.querySelector<HTMLDivElement>('#cardList')

let profiles: Profile[] = []

interface  Profile {
  name: string
  tel: string
  email: string
  image: string
  description: string
}

cardForm?.addEventListener("submit", e => {
e.preventDefault();

const name = cardForm['name'] as unknown as HTMLInputElement;
const tel = cardForm['tel'] as unknown as HTMLInputElement;
const email = cardForm['email'] as unknown as HTMLInputElement;
const image = cardForm['image'] as unknown  as HTMLInputElement;
const description = cardForm['description'] as unknown as HTMLTextAreaElement;


profiles.push({
  name: name.value,
  tel: tel.value,
  email: email.value,
  image: image.value,
  description: description.value,
})

localStorage.setItem('profiles', JSON.stringify(profiles))
})

document.addEventListener('DOMContentLoaded', () => {
 profiles =  JSON.parse(localStorage.getItem('profiles') || '[]')
renderCards(profiles)
})

function renderCards(profiles: Profile[]) {
  profiles.forEach(profile => {
  const profileElement = document.createElement('div')

  const header = document.createElement('header')
  
  const name = document.createElement('span')
  name.innerText = profile.name

  header.append(name)

  profileElement.append(header)

  cardList?.append(profileElement)

  })
  
}

