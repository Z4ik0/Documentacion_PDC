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
        minHeight: '100vh',
        background: 'var(--ifm-color-primary-lightest)', // Usar la variable de color de fondo
        padding: '24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Contenedor principal movido hacia arriba */}
      <div
        style={{
          maxWidth: '1200px',
          width: '100%',
          backgroundColor: 'white', // Fondo blanco por defecto
          borderRadius: '24px',
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)', // Sombra por defecto
          overflow: 'hidden',
          transform: 'translateY(-80px)',
        }}
      >
        {/* Encabezado */}
        <header
          style={{
            backgroundColor: 'var(--ifm-color-primary-dark)', // Usar color primario oscuro del tema
            padding: '16px 0',
            textAlign: 'center',
          }}
        >
          <h1
            style={{
              color: 'var(--ifm-color-primary-lightest)', // Color de texto claro
              fontSize: '24px',
              fontWeight: 'bold',
              textTransform: 'uppercase',
            }}
          >
            Arquitectura de Software
          </h1>
        </header>

        {/* Contenido principal */}
        <main
          style={{
            display: 'flex',
            flexDirection: 'row', // Cambié a row para que estén en línea
            alignItems: 'center',
            padding: '40px',
            gap: '32px',
          }}
        >
          {/* Contenido de texto */}
          <div style={{ flex: 1, textAlign: 'left' }}>
            <h2
              style={{
                fontSize: '48px',
                fontWeight: '800',
                lineHeight: '1.2',
                color: 'var(--ifm-color-primary)', // Usar color primario
              }}
            >
              Patrones de Diseño de
              <br />
              Comportamiento
            </h2>
            <p
              style={{
                color: 'var(--ifm-color-primary-darkest)', // Usar color de texto oscuro
                fontSize: '18px',
                lineHeight: '1.75',
                margin: '16px 0',
              }}
            >
              Aprende cómo los patrones de diseño de comportamiento te ayudan a
              gestionar la interacción y comunicación entre objetos de manera
              eficiente y flexible.
            </p>
            {/* Botón debajo del texto */}
            <div style={{ marginTop: '16px' }}>
              <Boton to="/docs/intro">Ver Documentación</Boton>
            </div>
          </div>

          {/* Imagen a la derecha con borde redondeado */}
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
                borderRadius: '20px', // Bordes redondeados
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
