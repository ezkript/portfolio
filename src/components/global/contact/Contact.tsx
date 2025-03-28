'use client';

import { useState } from 'react';
import { Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Simular envío de formulario
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus('success');
  };

  return (
    <section id="contacto" className="bg-gray-50 dark:bg-gray-800">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6">
        <h2 className="section-title">Contacto</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulario de Contacto */}
          <div className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-light-primary dark:text-text-dark-primary mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                           bg-white dark:bg-gray-700 text-text-light-primary dark:text-text-dark-primary 
                           focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-light-primary dark:text-text-dark-primary mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                           bg-white dark:bg-gray-700 text-text-light-primary dark:text-text-dark-primary 
                           focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-light-primary dark:text-text-dark-primary mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                           bg-white dark:bg-gray-700 text-text-light-primary dark:text-text-dark-primary 
                           focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-primary w-full"
              >
                {status === 'loading' ? 'Enviando...' : 'Enviar Mensaje'}
              </button>
            </form>

            {status === 'success' && (
              <div className="p-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg">
                ¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.
              </div>
            )}
          </div>

          {/* Información de Contacto */}
          <div className="space-y-8">
            <div className="card p-6">
              <h3 className="text-xl font-semibold text-text-light-primary dark:text-text-dark-primary mb-6">
                Información de Contacto
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-primary-500 mt-1" />
                  <div>
                    <h4 className="font-medium text-text-light-primary dark:text-text-dark-primary">
                      Email
                    </h4>
                    <p className="text-text-light-secondary dark:text-text-dark-secondary">
                      tu@email.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-primary-500 mt-1" />
                  <div>
                    <h4 className="font-medium text-text-light-primary dark:text-text-dark-primary">
                      Ubicación
                    </h4>
                    <p className="text-text-light-secondary dark:text-text-dark-secondary">
                      Ciudad, País
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-primary-500 mt-1" />
                  <div>
                    <h4 className="font-medium text-text-light-primary dark:text-text-dark-primary">
                      Disponibilidad
                    </h4>
                    <p className="text-text-light-secondary dark:text-text-dark-secondary">
                      Lunes a Viernes, 9:00 - 18:00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 