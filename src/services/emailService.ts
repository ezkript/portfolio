import emailjs from '@emailjs/browser';

// Tipos para el formulario de contacto
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// Configuración de EmailJS
const EMAIL_CONFIG = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
};

// Inicializar EmailJS
if (typeof window !== 'undefined') {
  emailjs.init(EMAIL_CONFIG.publicKey);
}

export const sendContactEmail = async (formData: ContactFormData): Promise<boolean> => {
  try {
    // Verificar que las variables de entorno estén configuradas
    if (!EMAIL_CONFIG.serviceId || !EMAIL_CONFIG.templateId || !EMAIL_CONFIG.publicKey) {
      console.error('EmailJS: Variables de entorno no configuradas');
      throw new Error('Configuración de email no disponible');
    }

    // Preparar los datos del template
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: 'Gonzalo Balboa', // Tu nombre
      date: new Date().toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };

    // Enviar email
    const response = await emailjs.send(
      EMAIL_CONFIG.serviceId,
      EMAIL_CONFIG.templateId,
      templateParams
    );

    console.log('Email enviado exitosamente:', response.status, response.text);
    return true;
  } catch (error) {
    console.error('Error al enviar email:', error);
    return false;
  }
};

// Función para validar la configuración
export const validateEmailConfig = (): boolean => {
  return !!(EMAIL_CONFIG.serviceId && EMAIL_CONFIG.templateId && EMAIL_CONFIG.publicKey);
};