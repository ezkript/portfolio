"use client";
import React, { useState } from "react";
import { CheckCircle, XCircle, Loader2, X } from "lucide-react";
import { Mail, MapPin, Phone, Clock, Github } from "lucide-react";
import LightEffects from "@/components/global/lighteffects/LightEffects";
import { useParallax } from "@/hooks/useParallax";
import { sendContactEmail, validateEmailConfig, type ContactFormData } from "@/services/emailService";
import { getContactData } from "./Contact.helper";
import { useLanguage } from "@/context/LanguageContext";
import { useGoogleAnalytics } from "@/hooks/useGoogleAnalytics";

const Contact = () => {
  const scrollY = useParallax();
  const { t } = useLanguage();
  const { trackEvent } = useGoogleAnalytics();
  const contactData = getContactData(t);
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
    
    trackEvent('form_submit', 'contact', 'contact_form');
    
    try {
      if (!validateEmailConfig()) {
        trackEvent('form_error', 'contact', 'config_error');
        throw new Error(t('contact.form.error.config'));
      }

      if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
        trackEvent('form_error', 'contact', 'validation_error');
        throw new Error(t('contact.form.error.required'));
      }

      const success = await sendContactEmail(formData);
      
      if (success) {
        // Track successful form submission
        trackEvent('form_success', 'contact', 'email_sent');
        
        setNotification({
          show: true,
          message: t('contact.form.success'),
          type: "success"
        });
        setFormData({ name: "", email: "", message: "" });
        
        setTimeout(() => {
          setNotification({ show: false, message: "", type: "success" });
        }, 5000);
      } else {
        trackEvent('form_error', 'contact', 'send_error');
        throw new Error(t('contact.form.error.send'));
      }
    } catch (error) {
      console.error("Error en el envío:", error);
      setNotification({
        show: true,
        message: error instanceof Error ? error.message : t('contact.form.error.unknown'),
        type: "error"
      });
      
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

  const handleSocialClick = (platform: string) => {
    trackEvent('social_click', 'contact', platform);
  };

  return (
    <section id="contacto" className="py-20 relative overflow-hidden bg-gradient-to-b from-black via-gray-950 to-gray-900">
      {notification.show ? (
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
      ) : null}
      <div 
        className="absolute inset-0"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      >
        <LightEffects variant="section" colorScheme="blue" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
            <div className="w-8 h-8 md:w-12 md:h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
              <Mail className="w-4 h-4 md:w-6 md:h-6 text-blue-400" />
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-white">{contactData.title}</h2>
            <div className="w-8 h-8 md:w-12 md:h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
              <Phone className="w-4 h-4 md:w-6 md:h-6 text-blue-400" />
            </div>
          </div>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-6">
            {contactData.subtitle}
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700/30">
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-6 md:mb-8 flex items-center gap-2 md:gap-3">
                <div className="w-6 h-6 md:w-8 md:h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <Mail className="w-3 h-3 md:w-4 md:h-4 text-blue-400" />
                </div>
                {t('contact.info.title')}
              </h3>
              <div className="space-y-4 md:space-y-6">
                <div className="group flex items-start space-x-3 md:space-x-4 p-3 md:p-4 bg-gray-800/30 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-500/20 rounded-full flex items-center justify-center group-hover:bg-blue-500/30 transition-colors duration-300">
                      <Mail className="h-4 w-4 md:h-5 md:w-5 text-blue-400" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-base md:text-lg font-medium text-white mb-1">{t('contact.info.email')}</h4>
                    <p className="text-sm md:text-base text-blue-300">{contactData.contactInfo.email}</p>
                  </div>
                </div>
                <div className="group flex items-start space-x-3 md:space-x-4 p-3 md:p-4 bg-gray-800/30 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-500/20 rounded-full flex items-center justify-center group-hover:bg-blue-500/30 transition-colors duration-300">
                      <Phone className="h-4 w-4 md:h-5 md:w-5 text-blue-400" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-base md:text-lg font-medium text-white mb-1">{t('contact.info.phone')}</h4>
                    <p className="text-sm md:text-base text-blue-300">{contactData.contactInfo.phone}</p>
                  </div>
                </div>
                <div className="group flex items-start space-x-3 md:space-x-4 p-3 md:p-4 bg-gray-800/30 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-500/20 rounded-full flex items-center justify-center group-hover:bg-blue-500/30 transition-colors duration-300">
                      <MapPin className="h-4 w-4 md:h-5 md:w-5 text-blue-400" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-base md:text-lg font-medium text-white mb-1">{t('contact.info.location')}</h4>
                    <p className="text-sm md:text-base text-blue-300">{contactData.contactInfo.location}</p>
                  </div>
                </div>
                <div className="group flex items-start space-x-3 md:space-x-4 p-3 md:p-4 bg-gray-800/30 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-500/20 rounded-full flex items-center justify-center group-hover:bg-blue-500/30 transition-colors duration-300">
                      <Clock className="h-4 w-4 md:h-5 md:w-5 text-blue-400" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-base md:text-lg font-medium text-white mb-1">{t('contact.info.availability')}</h4>
                    <p className="text-sm md:text-base text-blue-300">{contactData.contactInfo.availability}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700/30">
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-6 md:mb-8 flex items-center gap-2 md:gap-3">
                <div className="w-6 h-6 md:w-8 md:h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <Phone className="w-3 h-3 md:w-4 md:h-4 text-blue-400" />
                </div>
                {t('contact.social.title')}
              </h3>
              <div className="space-y-3 md:space-y-4">
                {contactData.socialLinks.map((social) => (
                  <a 
                    key={social.name}
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={() => handleSocialClick(social.name.toLowerCase())}
                    className="group flex items-center space-x-3 md:space-x-4 p-3 md:p-4 bg-gray-800/30 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:bg-gray-800/50"
                  >
                    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-colors duration-300 ${
                      social.name === "LinkedIn" 
                        ? "bg-blue-600 group-hover:bg-blue-700" 
                        : "bg-gray-700 group-hover:bg-gray-600"
                    }`}>
                      {social.icon === "github" ? (
                        <Github className="w-5 h-5 md:w-6 md:h-6 text-white" />
                      ) : (
                        <span className="text-white font-bold text-xs md:text-sm">{social.icon}</span>
                      )}
                    </div>
                    <div>
                      <span className="text-base md:text-lg font-medium text-white group-hover:text-blue-300 transition-colors duration-300">{social.name}</span>
                      <p className="text-xs md:text-sm text-blue-300">{social.description}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700/30">
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-6 md:mb-8 flex items-center gap-2 md:gap-3">
              <div className="w-6 h-6 md:w-8 md:h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                <Mail className="w-3 h-3 md:w-4 md:h-4 text-blue-400" />
              </div>
              {t('contact.form.title')}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-blue-300 mb-2 md:mb-3">
                  {contactData.formLabels.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 md:px-4 py-3 md:py-4 bg-gray-800/50 border border-gray-700/50 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500/50 transition-all duration-300 text-white placeholder-gray-400 backdrop-blur-sm text-sm md:text-base"
                  placeholder={contactData.formPlaceholders.name}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-blue-300 mb-2 md:mb-3">
                  {contactData.formLabels.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 md:px-4 py-3 md:py-4 bg-gray-800/50 border border-gray-700/50 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500/50 transition-all duration-300 text-white placeholder-gray-400 backdrop-blur-sm text-sm md:text-base"
                  placeholder={contactData.formPlaceholders.email}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-blue-300 mb-2 md:mb-3">
                  {contactData.formLabels.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3 md:px-4 py-3 md:py-4 bg-gray-800/50 border border-gray-700/50 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500/50 transition-all duration-300 text-white placeholder-gray-400 resize-none backdrop-blur-sm text-sm md:text-base"
                  placeholder={contactData.formPlaceholders.message}
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-medium rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 flex items-center justify-center gap-2 md:gap-3 shadow-lg hover:shadow-xl transform hover:scale-105 ${
                  isSubmitting
                    ? "bg-blue-800 text-white cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800"
                }`}
              >
                {isSubmitting ? <Loader2 className="w-4 h-4 md:w-5 md:h-5 animate-spin" /> : null}
                {isSubmitting ? contactData.submitButton.loading : contactData.submitButton.default}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 