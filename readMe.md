# BETMASTER

BetMaster es una aplicación de apuestas que te permite simular partidos y realizar apuestas en tiempo real.

## Arquitectura del Servidor

La arquitectura del servidor se basa en una estructura de endpoints JSON, siguiendo un patrón Modelo-Vista-Controlador (MVC) básico con Express y Node.js.

### Endpoints JSON

Los endpoints JSON proporcionan una interfaz para interactuar con la lógica de la aplicación y acceder a los recursos necesarios para realizar apuestas, simular partidos, etc.

### Patrón MVC

La arquitectura MVC divide la aplicación en tres componentes principales:

- **Modelo (Model)**: Representa la estructura de los datos y la lógica de la aplicación. Maneja la interacción con la base de datos y la manipulación de datos.

- **Vista (View)**: Es responsable de la presentación de la información al usuario. En el caso de una API JSON, la vista puede ser la representación de los datos devueltos por los endpoints.

- **Controlador (Controller)**: Actúa como intermediario entre el modelo y la vista. Procesa las solicitudes del cliente, interactúa con el modelo y devuelve la respuesta adecuada al cliente.

## Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución para JavaScript en el lado del servidor.
- **Express.js**: Framework web para Node.js que simplifica la creación de aplicaciones web y la gestión de rutas.
- **PostgreSQL**: Sistema de gestión de bases de datos relacional, utilizado para almacenar datos estructurados como usuarios, partidos, apuestas, etc.
- **TypeORM**: ORM (Object-Relational Mapping) para TypeScript y JavaScript que simplifica la interacción con la base de datos PostgreSQL y facilita la manipulación de datos.

## Instalación y Ejecución

1. Clona este repositorio: `git clone https://github.com/jcom-dev/betmaster.git`
2. Entra al directorio del servidor: `cd betmaster-dev/server`
3. Instala las dependencias: `npm install`
4. Inicia el servidor: `npm start`

## Contribución

Si deseas contribuir a BetMaster, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama para tu característica: `git checkout -b feature/nueva-caracteristica`
3. Realiza tus cambios y haz commits: `git commit -am 'Agrega una nueva característica'`
4. Sube tu rama: `git push origin feature/nueva-caracteristica`
5. Envía una solicitud de extracción.

## Licencia

BetMaster se distribuye bajo la licencia MIT. Ver el archivo `LICENSE` para más detalles.
