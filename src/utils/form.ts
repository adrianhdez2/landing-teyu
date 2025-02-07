import emailjs from "emailjs-com";

const PUBLIC_KEY = import.meta.env.PUBLIC_KEY;
const SERVICE_ID = import.meta.env.PUBLIC_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.PUBLIC_TEMPLATE_ID;

const successTemplate = `<p>¡Hemos guardado tu datos correctamente.!</p>
            <small class="text-white/60">Nos pondremos en contacto pronto.</small>`;

const errorTemplate = `<p>¡Oops, Parece que ocurrió un error! </p>
            < small class="text-white/60" > Intentalo de nuevo más tarde.</>`

window.onload = function () {
    const form = document.getElementById("contact-form") as HTMLFormElement;
    const body = document.querySelector("body");

    const handleSubmit = (event: SubmitEvent) => {
        event.preventDefault();

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY).then(
            (result) => {
                if (result.status === 200) {
                    showNotification(successTemplate, "bg-green-800");
                    form.reset();
                }
            },
            (error) => {
                showNotification(errorTemplate, "bg-red-800");
            },
        );
    };

    form?.addEventListener("submit", handleSubmit);

    // Función para mostrar notificación sin sobrescribir el body
    const showNotification = (template: string, className: string) => {
        const notificationWrapper = document.createElement("article");
        notificationWrapper.classList.add(
            "rounded",
            "text-center",
            "py-3",
            "bottom-10",
            "w-11/12",
            "mx-auto",
            "left-0",
            "sticky",
            className
        );
        notificationWrapper.innerHTML = template;
        body?.appendChild(notificationWrapper);

        setTimeout(() => {
            notificationWrapper.remove();
        }, 5000);
    };
};
