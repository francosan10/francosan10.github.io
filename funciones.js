const $form = document.querySelector('#form')
const $botonmailto = document.querySelector('#enviador')

$form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(this)
    console.log(form.get('email'))
    $botonmailto.setAttribute('href', `mailto:lmassa.fms@gmail.com? subject=${form.get('name')} ${form.get('email')} & body= ${form.get('message')}`)
}