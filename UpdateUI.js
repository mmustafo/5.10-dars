const template = document.querySelector('template')
const list = document.getElementById('list')
export function UpdateUI({products}){
products.forEach((product) => {
     const {thumbnail, title, description, price, rating } = product
     const clone = template.content.cloneNode(true)
     const h2 = clone.querySelector('.text__h2')
     const h3 = clone.querySelector('.text__h3')
     const h5 = clone.querySelector('.text__h5')
     const descriptionn = clone.querySelector('.description')
     const thumbline = clone.querySelector('.thumbline')
     h2.textContent = title
     h3.textContent = price
     h5.textContent = rating
     thumbline.src = thumbnail
     descriptionn.textContent = description
     list.appendChild(clone)
})
}