import { ContactData } from "./Contact.types";

export const getContactData = (t: (key: string) => string): ContactData => ({
    title: t('contact.title'),
    subtitle: t('contact.subtitle'),
    contactInfo: {
      email: "gonzalobalboadev@gmail.com",
      location: "Tucumán, Argentina",
      availability: t('contact.info.availability.text')
    },
    socialLinks: [
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/ezkript",
        icon: "in",
        description: t('contact.social.linkedin.description')
      },
      {
        name: "GitHub",
        url: "https://github.com/ezkript",
        icon: "github",
        description: t('contact.social.github.description')
      }
    ],
    formLabels: {
      name: t('contact.form.name'),
      email: t('contact.form.email'),
      message: t('contact.form.message')
    },
    formPlaceholders: {
      name: t('contact.form.name.placeholder'),
      email: t('contact.form.email.placeholder'),
      message: t('contact.form.message.placeholder')
    },
    submitButton: {
      default: t('contact.form.submit'),
      loading: t('contact.form.submitting')
    }
  });
  