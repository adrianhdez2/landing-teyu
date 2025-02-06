// import emailjs from 'emailjs-com'
// const SERVICE_ID = import.meta.env.SERVICE_ID
// const USER_ID = import.meta.env.USER_ID
// const TEMPLATE_ID = import.meta.env.TEMPLATE_ID

// export const handleSubmit = (event) => {
//     event.preventDefault()
//     emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, event.target, USER_ID)
//         .then((result) => {
//             console.log(result.text)
//         }, (error) => {
//             console.log(error.text)
//         })
// }

// (function () {
//     emailjs.init(USER_ID)
// })

// window.onload = function () {
//     document.getElementById('contact-form')?.addEventListener('submit', function (event) {
//         event.preventDefault()
//         emailjs.sendForm('contact_service', 'contact-form', this)
//             .then((result) => {
//                 console.log(result.text)
//             }, (error) => {
//                 console.log(error.text)
//             })
//     })
// }