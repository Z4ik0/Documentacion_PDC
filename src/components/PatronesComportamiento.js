import React from 'react';
import Link from '@docusaurus/Link'; // Importamos Link para manejar rutas

// Componente de botón personalizado
const Boton = ({ to, children }) => (
  <Link
    to={to}
    style={{
      background: 'linear-gradient(to right, #6b46c1, #5a67d8)',
      color: 'white',
      padding: '12px 32px',
      borderRadius: '9999px',
      fontSize: '18px',
      fontWeight: '600',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      textDecoration: 'none',
      display: 'inline-block',
      transition: 'transform 0.2s',
    }}
    onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
    onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
  >
    {children}
  </Link>
);

// Función principal del componente
function PatronesComportamiento() {
  return (
    <div
      style={{
        minHeight: '90vh',
        background: 'var(--ifm-color-primary-header-text)', 
        padding: '24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          marginTop: '12vh',
          maxWidth: '1200px',
          width: '100%',
          backgroundColor: 'var(--ifm-color-primary-card)', // Fondo blanco por defecto
          borderRadius: '24px',
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
          overflow: 'hidden',
          transform: 'translateY(-80px)',
        }}
      >
        {/* Encabezado */}
        <header
          style={{
            backgroundColor: 'var(--ifm-color-primary-header)',
            padding: '16px 0',
            textAlign: 'center',
          }}
        >
          <h1
            style={{
              color: 'var(--ifm-color-primary-header-text)',
              fontSize: '24px',
              fontWeight: 'bold',
              textTransform: 'uppercase',
            }}
          >
            Patrones de diseño de comportamiento
          </h1>
        </header>

        {/* Contenido principal */}
        <main
          style={{ 
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            padding: '40px',
            gap: '32px',
          }}
        >
          {/* Contenido de texto */}
          <div style={{ flex: 1, textAlign: 'left' }}>
            <p
              style={{
                color: 'var(--ifm-color-primary-title)',
                fontSize: '18px',
                lineHeight: '1.75',
                margin: '16px 0 10% 0',
                fontWeight: '500',
                textAlign: 'center',
              }}
            >
              Aprende cómo los patrones de diseño de comportamiento te ayudan a
              gestionar la interacción y comunicación entre objetos de manera
              eficiente y flexible.
            </p>
            {/* Botón debajo del texto */}
            <div style={{ marginTop: '16px', justifySelf: 'center', width: 'max-content', }}>
              <Boton to="/docs/intro">Ver Documentación</Boton>
            </div>
          </div>

          <div
            style={{
              flex: 1,
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            <img
              src="https://refactoring.guru/images/patterns/content/state/state-es.png?id=03f2a3a86f4b58cc21b4c8c152d6c0ec"
              alt="Ilustración de patrones de diseño"
              style={{
                maxWidth: '400px',
                width: '100%',
                borderRadius: '20px',
                transition: 'transform 0.2s',
              }}
              onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
              onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
            />
          </div>
        </main>
      </div>
    </div>
  );
}

export default PatronesComportamiento;
