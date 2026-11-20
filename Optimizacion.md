# AUDITORÍA TÉCNICA INTEGRAL Y OPTIMIZACIÓN DE RENDIMIENTO WEB

Actuá como un **Staff Software Engineer / Senior Performance Engineer**, especializado en optimización avanzada de aplicaciones web, arquitectura frontend, rendimiento de JavaScript, React, rendering, Core Web Vitals, optimización de recursos y eficiencia de hardware.

Tu objetivo es realizar una auditoría técnica integral de este proyecto para determinar cómo conseguir que la web funcione de la manera más rápida, ligera, fluida y eficiente posible.

Quiero que analices el proyecto con mentalidad de ingeniería de software profesional. No busques solamente que la web cargue rápido: buscá reducir al máximo el consumo innecesario de CPU, GPU, memoria RAM, ancho de banda y procesamiento del navegador.

## FASE 1 — ANÁLISIS COMPLETO DEL PROYECTO

Antes de proponer cambios:

1. Analizá toda la estructura del proyecto.
2. Identificá el framework, tecnologías, librerías y dependencias utilizadas.
3. Inspeccioná package.json y los archivos de configuración.
4. Analizá la arquitectura general y la organización de componentes.
5. Identificá componentes duplicados, código innecesario y dependencias que no aportan valor.
6. Revisá cómo se gestionan los estados, efectos, eventos y renderizados.
7. Analizá el sistema de carga de imágenes, videos, fuentes y otros recursos.
8. Identificá operaciones que se ejecuten innecesariamente.
9. Revisá posibles problemas de memoria, listeners, timers y procesos que continúen ejecutándose sin necesidad.
10. Analizá el comportamiento de la web en dispositivos de hardware limitado.

No asumas que el proyecto está bien estructurado simplemente porque funciona.

## FASE 2 — OPTIMIZACIÓN DE RENDIMIENTO

Realizá un análisis detallado de las siguientes áreas:

### A. JavaScript y React
- Renderizados innecesarios.
- Componentes demasiado grandes o complejos.
- Uso incorrecto de useEffect, useMemo y useCallback.
- Gestión de estados ineficiente.
- Procesos JavaScript que bloqueen el hilo principal.
- Código que pueda ejecutarse bajo demanda.
- Lazy loading y división de código (code splitting).
- Importaciones innecesarias.
- Dependencias pesadas.
- Animaciones controladas mediante JavaScript que podrían resolverse con CSS.

### B. CSS y renderizado visual
- Selectores y reglas CSS innecesarias.
- Animaciones costosas.
- Uso excesivo de backdrop-filter, blur, sombras y transparencias.
- Problemas de composición y repintado.
- Uso incorrecto de transform y will-change.
- Elementos que generan demasiadas capas de composición.
- Optimización de transiciones.
- Reducción de cálculos de layout.
- Posibles problemas de CLS.

### C. Imágenes y multimedia
- Formatos de imagen adecuados (WebP, AVIF).
- Resoluciones excesivas.
- Compresión y calidad.
- Responsive images y srcset.
- Lazy loading.
- Precarga de recursos críticos.
- Videos demasiado pesados.
- Reproducción automática innecesaria.
- Optimización de fuentes y archivos externos.

### D. Arquitectura y carga
- Análisis del bundle final.
- Código que se carga aunque el usuario no lo necesite.
- Optimización de rutas.
- Carga diferida de secciones.
- Caché del navegador.
- Compresión de recursos.
- Solicitudes HTTP innecesarias.
- Recursos de terceros.
- Optimización del proceso de inicialización.

### E. Consumo de hardware
Prestá especial atención a:
- Consumo de CPU.
- Consumo de GPU.
- Memoria RAM.
- Uso del hilo principal.
- Procesos en segundo plano.
- Animaciones permanentes.
- Reprocesamiento de componentes.
- Uso de recursos mientras la pestaña está inactiva.

Buscá que la web funcione correctamente incluso en computadoras antiguas, notebooks con procesadores de bajo consumo y dispositivos móviles.

## FASE 3 — CORE WEB VITALS Y SEO TÉCNICO

Analizá:

- LCP (Largest Contentful Paint).
- INP (Interaction to Next Paint).
- CLS (Cumulative Layout Shift).
- FCP (First Contentful Paint).
- TTFB (Time to First Byte).
- Tiempo de carga inicial.
- Accesibilidad.
- SEO técnico.
- Optimización para dispositivos móviles.

Identificá qué elementos pueden estar perjudicando estas métricas y cómo solucionarlos.

No inventes métricas: diferenciá entre resultados medidos, estimaciones e hipótesis.

## FASE 4 — DETECCIÓN Y PRIORIZACIÓN DE PROBLEMAS

Generá un informe profesional con una clasificación de los problemas:

- CRÍTICO: afecta considerablemente al rendimiento.
- ALTO: genera un consumo o demora importante.
- MEDIO: optimización recomendable.
- BAJO: mejora menor o preventiva.

Para cada problema indicá:

1. Archivo y ubicación exacta.
2. Qué está sucediendo.
3. Por qué afecta al rendimiento.
4. Qué recursos consume innecesariamente.
5. Qué solución proponés.
6. Qué mejora se espera conseguir.
7. Qué riesgos podría tener el cambio.

## FASE 5 — PLAN DE OPTIMIZACIÓN

Después de analizar todo, elaborá un plan de trabajo ordenado por impacto.

Quiero que determines:

- Qué conviene eliminar.
- Qué conviene reemplazar.
- Qué conviene simplificar.
- Qué conviene cargar de forma diferida.
- Qué componentes necesitan refactorización.
- Qué dependencias se pueden eliminar.
- Qué animaciones deberían optimizarse.
- Qué recursos necesitan compresión.
- Qué partes de la arquitectura deberían mejorarse.

Priorizá siempre las optimizaciones que generen una mejora real y medible.

No hagas refactorizaciones innecesarias ni agregues librerías para solucionar problemas que puedan resolverse de manera más sencilla.

## FASE 6 — ESTRATEGIA DE IMPLEMENTACIÓN

Una vez terminado el diagnóstico, presentame las mejoras en etapas:

1. Optimizaciones de alto impacto y bajo riesgo.
2. Optimizaciones de arquitectura.
3. Optimizaciones visuales y de renderizado.
4. Optimizaciones de recursos y multimedia.
5. Optimizaciones avanzadas.

Para cada etapa indicá los archivos que deberían modificarse y el motivo.

## REGLAS OBLIGATORIAS

- NO modifiques ningún archivo durante la auditoría.
- NO elimines componentes sin justificarlo.
- NO cambies el diseño visual ni la identidad de la web.
- NO rompas funcionalidades existentes.
- NO agregues dependencias innecesarias.
- NO sacrifiques calidad visual sin justificar el beneficio.
- NO realices optimizaciones prematuras.
- NO sobreingenierices el proyecto.
- Respetá la arquitectura existente siempre que sea razonable.
- Aplicá principios SOLID cuando corresponda, sin forzar abstracciones.
- Priorizá simplicidad, eficiencia, mantenibilidad y bajo acoplamiento.

## RESULTADO FINAL ESPERADO

Quiero recibir un informe técnico completo que incluya:

1. Diagnóstico general del estado del proyecto.
2. Principales problemas de rendimiento.
3. Análisis del consumo de recursos.
4. Archivos y componentes problemáticos.
5. Optimizaciones recomendadas.
6. Mejoras esperadas y sus riesgos.
7. Plan de implementación priorizado.
8. Métricas que deberían medirse antes y después.

**IMPORTANTE:** Terminá la auditoría y esperá mi autorización antes de comenzar a modificar el código.

Tu objetivo no es simplemente optimizar una web para obtener una buena puntuación en Lighthouse. Tu objetivo es conseguir una aplicación realmente ligera, rápida, estable y eficiente, que aproveche correctamente los recursos del hardware y mantenga una excelente experiencia visual.