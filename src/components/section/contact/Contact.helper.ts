import { ContactData } from "./Contact.types";

export const contactData: ContactData = {
    title: "Contacto",
    subtitle: "¿Te interesa trabajar juntos o tienes alguna pregunta? Conversemos sobre tu proyecto.",
    contactInfo: {
      email: "gonzalobalboadev@gmail.com",
      phone: "+54 9 3865 75-3085",
      location: "Tucumán, Argentina",
      availability: "Disponible para proyectos freelance y oportunidades laborales"
    },
    socialLinks: [
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/ezkript",
        icon: "in",
        description: "Conectemos profesionalmente"
      },
      {
        name: "GitHub",
        url: "https://github.com/ezkript",
        icon: "github",
        description: "Revisa mis proyectos"
      }
    ],
    formLabels: {
      name: "Nombre",
      email: "Email",
      message: "Mensaje"
    },
    formPlaceholders: {
      name: "Tu nombre completo",
      email: "tu@email.com",
      message: "Cuéntame sobre tu proyecto o consulta..."
    },
    submitButton: {
      default: "Enviar Mensaje",
      loading: "Enviando..."
    }
  };
  