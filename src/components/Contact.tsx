"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Clock, CheckCircle, XCircle, Loader2, X, Github } from "lucide-react";
import LightEffects from "./LightEffects";
import { useParallax } from "../hooks/useParallax";
import { sendContactEmail, validateEmailConfig, type ContactFormData } from "../services/emailService";

const Contact = () => {
  const scrollY = useParallax();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState<{ show: boolean; message: string; type: "success" | "error" }>({ 
    show: false, 
    message: "",
    type: "success"
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Validar configuración de EmailJS
      if (!validateEmailConfig()) {
        throw new Error("El servicio de email no está configurado correctamente");
      }

      // Validaciones básicas
      if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
        throw new Error("Todos los campos son obligatorios");
      }

      // Enviar email
      const success = await sendContactEmail(formData);
      
      if (success) {
        setNotification({
          show: true,
          message: "¡Mensaje enviado con éxito! Te responderé lo antes posible.",
          type: "success"
        });
        setFormData({ name: "", email: "", message: "" });
        
        // Auto-hide después de 5 segundos
        setTimeout(() => {
          setNotification({ show: false, message: "", type: "success" });
        }, 5000);
      } else {
        throw new Error("Error al enviar el mensaje");
      }
    } catch (error) {
      console.error("Error en el envío:", error);
      setNotification({
        show: true,
        message: error instanceof Error ? error.message : "Error desconocido al enviar el mensaje",
        type: "error"
      });
      
      // Auto-hide después de 5 segundos
      setTimeout(() => {
        setNotification({ show: false, message: "", type: "success" });
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contacto" className="py-20 relative overflow-hidden bg-gradient-to-b from-black via-gray-950 to-gray-900">
      {/* Notificación */}
      {notification.show && (
        <div className="fixed top-4 right-4 z-50 max-w-sm">
          <div className={`bg-gray-900/95 backdrop-blur-sm border rounded-xl p-4 shadow-2xl transform animate-slide-in-right ${
            notification.type === "success" 
              ? "border-green-500/50" 
              : "border-red-500/50"
          }`}>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0">
                {notification.type === "success" ? (
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-400 mt-0.5" />
                )}
              </div>
              <div className="flex-1">
                <p className={`text-sm leading-relaxed ${
                  notification.type === "success" 
                    ? "text-green-200" 
                    : "text-red-200"
                }`}>
                  {notification.message}
                </p>
              </div>
              <button
                onClick={() => setNotification({ show: false, message: "", type: "success" })}
                className="flex-shrink-0 text-gray-400 hover:text-white transition-colors duration-200"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Efectos de luces con parallax */}
      <div 
        className="absolute inset-0"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      >
        <LightEffects variant="section" colorScheme="blue" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header con iconos */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
              <Mail className="w-6 h-6 text-blue-400" />
            </div>
            <h2 className="text-4xl font-bold text-white">Contacto</h2>
            <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
              <Phone className="w-6 h-6 text-blue-400" />
            </div>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            ¿Te interesa trabajar juntos o tienes alguna pregunta? Conversemos sobre tu proyecto.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30">
              <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <Mail className="w-4 h-4 text-blue-400" />
                </div>
                Información de Contacto
              </h3>
              
              <div className="space-y-6">
                <div className="group flex items-start space-x-4 p-4 bg-gray-800/30 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center group-hover:bg-blue-500/30 transition-colors duration-300">
                      <Mail className="h-5 w-5 text-blue-400" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-1">Email</h4>
                    <p className="text-blue-300">gonzalobalboadev@gmail.com</p>
                  </div>
                </div>

                <div className="group flex items-start space-x-4 p-4 bg-gray-800/30 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center group-hover:bg-blue-500/30 transition-colors duration-300">
                      <Phone className="h-5 w-5 text-blue-400" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-1">Teléfono</h4>
                    <p className="text-blue-300">+54 9 3865 75-3085</p>
                  </div>
                </div>

                <div className="group flex items-start space-x-4 p-4 bg-gray-800/30 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center group-hover:bg-blue-500/30 transition-colors duration-300">
                      <MapPin className="h-5 w-5 text-blue-400" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-1">Ubicación</h4>
                    <p className="text-blue-300">Tucumán, Argentina</p>
                  </div>
                </div>

                <div className="group flex items-start space-x-4 p-4 bg-gray-800/30 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center group-hover:bg-blue-500/30 transition-colors duration-300">
                      <Clock className="h-5 w-5 text-blue-400" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-1">Disponibilidad</h4>
                    <p className="text-blue-300">Disponible para proyectos freelance y oportunidades laborales</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30">
              <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <Phone className="w-4 h-4 text-blue-400" />
                </div>
                Redes Profesionales
              </h3>
              
              <div className="space-y-4">
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center space-x-4 p-4 bg-gray-800/30 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:bg-gray-800/50"
                >
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-700 transition-colors duration-300">
                    <span className="text-white font-bold text-sm">in</span>
                  </div>
                  <div>
                    <span className="text-lg font-medium text-white group-hover:text-blue-300 transition-colors duration-300">LinkedIn</span>
                    <p className="text-sm text-blue-300">Conectemos profesionalmente</p>
                  </div>
                </a>

                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center space-x-4 p-4 bg-gray-800/30 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:bg-gray-800/50"
                >
                  <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center group-hover:bg-gray-600 transition-colors duration-300">
                    <Github className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <span className="text-lg font-medium text-white group-hover:text-blue-300 transition-colors duration-300">GitHub</span>
                    <p className="text-sm text-blue-300">Revisa mis proyectos</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Formulario de contacto */}
          <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30">
            <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                <Mail className="w-4 h-4 text-blue-400" />
              </div>
              Envíame un Mensaje
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-blue-300 mb-3">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 bg-gray-800/50 border border-gray-700/50 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500/50 transition-all duration-300 text-white placeholder-gray-400 backdrop-blur-sm"
                  placeholder="Tu nombre completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-blue-300 mb-3">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 bg-gray-800/50 border border-gray-700/50 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500/50 transition-all duration-300 text-white placeholder-gray-400 backdrop-blur-sm"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-blue-300 mb-3">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-4 bg-gray-800/50 border border-gray-700/50 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500/50 transition-all duration-300 text-white placeholder-gray-400 resize-none backdrop-blur-sm"
                  placeholder="Cuéntame sobre tu proyecto o consulta..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-8 py-4 text-lg font-medium rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105 ${
                  isSubmitting
                    ? "bg-blue-800 text-white cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800"
                }`}
              >
                {isSubmitting && <Loader2 className="w-5 h-5 animate-spin" />}
                {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 