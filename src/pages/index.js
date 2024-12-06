import Layout from '@theme/Layout';
import React from 'react';
import PatronesComportamiento from '../components/PatronesComportamiento'; // Ajusta la ruta si tu componente está en otra carpeta.

export default function Home() {
  return (
    <Layout
      title="Patrones de Comportamiento"
      description="Página principal sobre patrones de diseño de comportamiento">
      <main>
        <PatronesComportamiento />
      </main>
    </Layout>
  );
}
