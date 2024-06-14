const scriptURL = "https://script.google.com/macros/s/AKfycbyAtf53EhnbMJ_cAz0e4pnDaNvGt1yTsms_l3JE8CrQ-9cdOeR6IZLEKD60PAOrU6TgUA/exec"

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => alert("Thank you! your form is submitted successfully."))
        .then(() => { window.location.reload(); })
        .catch(error => console.error('Error!', error.message))
})