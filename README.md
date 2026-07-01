# Help Desk UI Kit

## Descripción

Este proyecto corresponde al desarrollo de una librería de componentes de interfaz de usuario (UI Kit) para un sistema de gestión de incidentes (Help Desk), utilizando HTML5 y CSS3 puro.

El objetivo es establecer una línea gráfica consistente mediante componentes reutilizables que puedan implementarse posteriormente en las diferentes páginas del sistema.

---

## Objetivo

Diseñar y desarrollar una biblioteca de componentes UI reutilizables aplicando:

- Variables CSS (Custom Properties)
- Modelo de cajas (Box Model)
- Selectores avanzados
- Diseño responsive
- Buenas prácticas de accesibilidad
- Componentes reutilizables

---

## Tecnologías Utilizadas

- HTML5
- CSS3
- Git
- GitHub

---

## Estructura del Proyecto

```text
Actividad5_UI_Kit/
│
├── index.html
├── style.css
├── README.md
└── capturas/
```

---

## Componentes Implementados

### 1. Botones

Se desarrollaron tres variantes de botones:

- Botón Primario
- Botón Secundario
- Botón de Peligro

Características:

- Estados :hover
- Estados :focus
- Transiciones suaves
- Diseño reutilizable mediante clases CSS

---

### 2. Formularios

Componentes incluidos:

- Campos de texto (input)
- Listas desplegables (select)

Características:

- Bordes personalizados
- Padding adecuado
- Efecto visual al recibir foco
- Accesibilidad mediante etiquetas (label)

---

### 3. Tarjetas (Cards)

Se diseñaron tarjetas para representar tickets de soporte.

Características:

- Box Shadow
- Bordes redondeados
- Efecto hover
- Variaciones visuales según prioridad

Tipos:

- Prioridad Alta
- Prioridad Media
- Prioridad Baja

---

### 4. Alertas / Badges

Etiquetas visuales para indicar la prioridad de los tickets.

Tipos:

- Alta
- Media
- Baja

Características:

- Colores diferenciados
- Diseño tipo píldora
- Fácil reutilización

---

## Variables CSS Implementadas

Las variables fueron definidas en el selector `:root` para facilitar la reutilización y mantenimiento del diseño.

Ejemplos:

- Color primario
- Color secundario
- Color de éxito
- Color de advertencia
- Color de error
- Tipografía base
- Radios de borde
- Transiciones

---

## Responsive Design

La interfaz fue desarrollada considerando la adaptabilidad a diferentes tamaños de pantalla mediante:

- Flexbox
- Contenedores flexibles
- Distribución adaptable de componentes

---

## Control de Versiones

Se utilizó Git y GitHub siguiendo el flujo solicitado:

### Rama de desarrollo

```bash
develop
```

### Rama de funcionalidad

```bash
feature/ui-kit
```

Posteriormente se realizó la integración de cambios hacia la rama `develop`.

---

## Autor

Nombre: María Dolores Zambrano Varela

Carrera: Ingeniería en Tecnologías de la Información

Asignatura: Desarrollo Web

Actividad: Desarrollo de una Librería de Componentes UI (Design System)

Fecha: 30/6/2026

---

## Capturas de Evidencia

Las evidencias del desarrollo se encuentran almacenadas en la carpeta:

```text
capturas/
```

Incluyen:

- Creación del proyecto
- Desarrollo del CSS
- Desarrollo del HTML
- Ejecución del proyecto
- Creación de ramas en GitHub
- Fusión hacia develop

---

## Conclusiones

1. Las variables CSS permiten mantener una identidad visual consistente en todo el sistema.
2. La reutilización de componentes mejora la mantenibilidad y escalabilidad del proyecto.
3. Git y GitHub facilitan el control de versiones y el trabajo organizado mediante ramas.
4. El uso de HTML5 y CSS3 puro permite desarrollar interfaces modernas sin depender de frameworks externos.
