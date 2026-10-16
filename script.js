/* ==========================================================================
   1) CONFIGURACIÓN — lo único que tienen que editar en este archivo
   --------------------------------------------------------------------------
   video: enlace de YouTube (público o "no listado"), de Google Drive,
          o ruta local como "videos/simplex.mp4". Vacío "" = pendiente.
   pdf:   (opcional) ruta al PDF del artículo, ej. "articulos/simplex.pdf".
   Los ARTÍCULOS se pegan en index.html, dentro de cada <template>.
   ========================================================================== */
const BLOG = {
  nombre: "Vértice",          // se muestra como "Vértice.IO"
  universidad: "Universidad Mariano Gálvez de Guatemala",
  facultad: "Facultad de Ingeniería en Sistemas",
  curso: "Investigación de Operaciones (026)",
  anio: 2026,

  integrantes: [
    { nombre: "Anibal Trigueros Pinto", carne: "" },
    { nombre: "Ronaldo Najera Argueta", carne: "" },
    { nombre: "Mauricio Figueroa Salguero", carne: "" }
  ],

  modulos: [
    {
      numero: 1,
      titulo: "Modelado y Programación Lineal",
      descripcion: "Cómo traducir un problema real a un modelo matemático y encontrar su solución óptima.",
      temas: [
        {
          id: "formulacion-de-modelos",
          titulo: "Formulación de Modelos",
          resumen: "El primer paso de todo: convertir un problema escrito en palabras en un modelo matemático.",
          descripcion: "Formular un modelo es traducir una situación real a lenguaje matemático. Se identifican las variables de decisión, que son lo que se puede controlar; la función objetivo, que es lo que se quiere maximizar o minimizar, como ganancia o costo; y las restricciones, que representan los límites de recursos, capacidad o demanda. Un buen modelo es lo bastante simple para poder resolverse y lo bastante fiel para que su solución sirva en la realidad.",
          puntos: ["Identificar las variables de decisión", "Escribir la función objetivo", "Traducir limitaciones a restricciones", "Condiciones de no negatividad"],
          video: "", pdf: ""
        },
        {
          id: "programacion-lineal",
          titulo: "Programación Lineal",
          resumen: "Optimizar un objetivo cuando la función y todas las restricciones son lineales.",
          descripcion: "La programación lineal es la rama de la optimización en la que la función objetivo y todas las restricciones son ecuaciones o desigualdades lineales. Se basa en los supuestos de proporcionalidad, aditividad, divisibilidad y certidumbre. Se usa para repartir recursos limitados, como materia prima, horas de trabajo o dinero, entre actividades que compiten por ellos. Un modelo puede tener solución única, soluciones múltiples, ser no acotado o no tener solución factible.",
          puntos: ["Supuestos del modelo lineal", "Forma canónica y forma estándar", "Variables de holgura y de exceso", "Tipos de solución"],
          video: "", pdf: ""
        },
        {
          id: "metodo-grafico",
          titulo: "Método Gráfico",
          resumen: "Resolver modelos de dos variables dibujando la región factible y buscando el mejor vértice.",
          descripcion: "El método gráfico resuelve modelos de programación lineal con dos variables. Cada restricción se dibuja como una recta en el plano, y la zona que cumple todas a la vez es la región factible. Como la solución óptima siempre está en un vértice de esa región, basta con evaluar la función objetivo en cada esquina o desplazar la recta de isoutilidad (o isocosto) hasta el último punto que toca la región. También permite ver con claridad los casos especiales.",
          puntos: ["Graficar cada restricción", "Identificar la región factible", "Evaluar los vértices", "Casos especiales: múltiple, no acotado, infactible"],
          video: "", pdf: ""
        },
        {
          id: "metodo-simplex",
          titulo: "Método Simplex",
          resumen: "El algoritmo que resuelve modelos lineales de cualquier tamaño, iteración por iteración.",
          descripcion: "El método simplex es un algoritmo algebraico que resuelve modelos de programación lineal con cualquier número de variables. Parte de una solución básica factible y avanza de vértice en vértice, mejorando la función objetivo en cada iteración, hasta que ninguna variable puede mejorarla. Se trabaja sobre la tabla simplex: se elige la variable que entra (columna pivote), la que sale con la prueba de razón mínima, y se actualiza la tabla con operaciones de pivoteo.",
          puntos: ["Forma estándar y tabla inicial", "Variable de entrada y variable de salida", "Operaciones de pivoteo", "Criterio de optimalidad"],
          video: "", pdf: ""
        }
      ]
    },
    {
      numero: 2,
      titulo: "Dualidad, Transporte y Asignación",
      descripcion: "El valor de los recursos y los modelos especiales para distribuir y asignar al menor costo.",
      temas: [
        {
          id: "dualidad-y-sensibilidad",
          titulo: "Dualidad y Análisis de Sensibilidad",
          resumen: "Cuánto vale cada recurso y qué tanto puede cambiar el modelo sin alterar la solución.",
          descripcion: "Todo modelo de programación lineal, llamado primal, tiene un modelo asociado llamado dual. Las variables del dual representan el valor de cada recurso, conocido como precio sombra: cuánto mejora el objetivo si se dispone de una unidad más. El análisis de sensibilidad estudia cuánto pueden cambiar los coeficientes de la función objetivo y las cantidades disponibles de recursos sin que cambie la solución óptima, lo que permite tomar decisiones sin resolver el problema de nuevo.",
          puntos: ["Construcción del modelo dual", "Relación entre primal y dual", "Precios sombra", "Rangos de optimalidad y de factibilidad"],
          video: "", pdf: ""
        },
        {
          id: "modelo-de-transporte",
          titulo: "Modelo de Transporte",
          resumen: "Distribuir un producto desde varios orígenes a varios destinos al menor costo total.",
          descripcion: "El modelo de transporte busca la forma más barata de enviar un producto desde varios orígenes, como plantas o bodegas, hacia varios destinos, como clientes o tiendas, respetando la oferta de cada origen y la demanda de cada destino. Primero se obtiene una solución inicial con métodos como esquina noroeste, costo mínimo o aproximación de Vogel, y luego se mejora con el método de multiplicadores (MODI) o de salto de piedra hasta llegar al costo mínimo.",
          puntos: ["Tabla de transporte y balanceo", "Esquina noroeste, costo mínimo y Vogel", "Prueba de optimalidad (MODI)", "Problemas no balanceados"],
          video: "", pdf: ""
        },
        {
          id: "modelo-de-asignacion",
          titulo: "Modelo de Asignación",
          resumen: "Asignar cada tarea a un único recurso para minimizar el costo o el tiempo total.",
          descripcion: "El modelo de asignación es un caso particular del transporte en el que cada recurso, como una persona o una máquina, se asigna a exactamente una tarea. El objetivo es minimizar el costo o el tiempo total, o maximizar la ganancia. Se resuelve de forma eficiente con el método húngaro, que reduce filas y columnas de la matriz de costos y cubre los ceros con el menor número de líneas hasta encontrar la asignación óptima.",
          puntos: ["Matriz de costos", "Reducción de filas y columnas", "Cobertura de ceros con líneas mínimas", "Maximización y casos no balanceados"],
          video: "", pdf: ""
        }
      ]
    },
    {
      numero: 3,
      titulo: "Redes e Inventarios",
      descripcion: "Planificación de proyectos con PERT/CPM y control de inventarios con modelos determinísticos.",
      temas: [
        {
          id: "pert-cpm",
          titulo: "Teoría de Redes (PERT/CPM)",
          resumen: "Planificar un proyecto como una red de actividades y encontrar su ruta crítica.",
          descripcion: "PERT y CPM son técnicas para planificar y controlar proyectos, representándolos como una red de actividades con relaciones de precedencia. CPM trabaja con tiempos conocidos y encuentra la ruta crítica: la secuencia de actividades sin holgura que determina la duración mínima del proyecto, donde cualquier retraso atrasa todo. PERT agrega incertidumbre usando tres estimaciones de tiempo (optimista, más probable y pesimista) para calcular la probabilidad de terminar en una fecha determinada.",
          puntos: ["Construcción de la red del proyecto", "Tiempos de inicio y terminación", "Holguras y ruta crítica", "Tiempo esperado y varianza en PERT"],
          video: "", pdf: ""
        },
        {
          id: "teoria-de-inventarios",
          titulo: "Teoría de Inventarios",
          resumen: "Cuánto pedir y cuándo pedir para mantener el inventario al menor costo.",
          descripcion: "La teoría de inventarios responde dos preguntas: cuánto pedir y cuándo pedir, de forma que el costo total sea el menor posible. En los modelos determinísticos la demanda se conoce con certeza. El más conocido es el lote económico de pedido (EOQ), que equilibra el costo de hacer pedidos con el costo de mantener inventario almacenado. A partir de él se estudian variantes como la producción con tasa finita, los faltantes planeados y los descuentos por cantidad.",
          puntos: ["Costos de pedir, mantener y faltante", "Lote económico de pedido (EOQ)", "Punto de reorden", "Variantes del modelo determinístico"],
          video: "", pdf: ""
        }
      ]
    }
  ]
};

/* ==========================================================================
   2) FUNCIONAMIENTO DEL SITIO — no hace falta tocar nada de aquí para abajo
   ========================================================================== */
(function () {
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const marca = () => `${esc(BLOG.nombre)}<span class="punto">.</span>IO`;

  const temas = [];
  BLOG.modulos.forEach((m) => m.temas.forEach((t, i) => temas.push({ ...t, modulo: m, orden: i + 1 })));

  // ---------- Textos generales ----------
  document.querySelectorAll("[data-marca]").forEach((el) => { el.innerHTML = marca(); });
  document.querySelectorAll("[data-blog]").forEach((el) => { el.textContent = BLOG[el.dataset.blog] ?? ""; });
  $("cifra-temas").textContent = temas.length;
  $("cifra-modulos").textContent = BLOG.modulos.length;

  // ---------- Menú ----------
  $("menu").innerHTML =
    `<a href="#que-es">¿Qué es IO?</a>` +
    BLOG.modulos.map((m) => `<a href="#modulo-${m.numero}">Módulo ${m.numero}</a>`).join("") +
    `<a href="#equipo">Equipo</a>`;

  // ---------- Módulos ----------
  $("modulos").innerHTML = BLOG.modulos.map((m) => `
    <section class="modulo" id="modulo-${m.numero}">
      <div class="modulo-cabecera">
        <div>
          <p class="etiqueta">Módulo ${m.numero} · ${m.temas.length} temas</p>
          <h3>${esc(m.titulo)}</h3>
        </div>
        <p>${esc(m.descripcion)}</p>
      </div>
      <ul class="temas-lista" style="--cols: ${m.temas.length}">
        ${m.temas.map((t, i) => `
          <li><a class="tema-tarjeta" href="#${t.id}">
            <span class="tema-codigo"><b>M${m.numero}.${i + 1}</b><span>Artículo + video</span></span>
            <h4>${esc(t.titulo)}</h4>
            <p>${esc(t.resumen)}</p>
            <span class="tema-ir">Ver tema</span>
          </a></li>`).join("")}
      </ul>
    </section>`).join("");

  // ---------- Equipo ----------
  $("equipo-lista").innerHTML = BLOG.integrantes.map((p) => {
    const partes = p.nombre.trim().split(/\s+/);
    const ini = (partes[0][0] + (partes[1] ? partes[1][0] : "")).toUpperCase();
    return `<li class="persona"><span class="iniciales" aria-hidden="true">${esc(ini)}</span>
      <div><strong>${esc(p.nombre)}</strong><span>${p.carne ? "Carné " + esc(p.carne) : "Ingeniería en Sistemas"}</span></div></li>`;
  }).join("");

  $("pie-integrantes").innerHTML = BLOG.integrantes.map((p) => esc(p.nombre)).join("<br>") + "<br>" + BLOG.anio;

  // ---------- Navegación entre portada y temas ----------
  function mostrar() {
    const id = decodeURIComponent(location.hash.slice(1));
    const pos = temas.findIndex((t) => t.id === id);

    if (pos < 0) {
      $("vista-inicio").hidden = false;
      $("vista-tema").hidden = true;
      document.title = `${BLOG.nombre}.IO · Investigación de Operaciones`;
      red.iniciar();
      const destino = id && document.getElementById(id);
      if (destino) destino.scrollIntoView();
      else window.scrollTo(0, 0);
      return;
    }

    red.detener();
    const t = temas[pos];
    $("vista-inicio").hidden = true;
    $("vista-tema").hidden = false;
    document.title = `${t.titulo} · ${BLOG.nombre}.IO`;

    $("tema-cabecera").innerHTML = `
      <nav class="migas" aria-label="Ruta"><a href="#">Inicio</a><span>/</span>
        <a href="#modulo-${t.modulo.numero}">Módulo ${t.modulo.numero}</a><span>/</span><span>M${t.modulo.numero}.${t.orden}</span></nav>
      <p class="etiqueta">Módulo ${t.modulo.numero} · Tema ${t.orden} de ${t.modulo.temas.length}</p>
      <h1>${esc(t.titulo)}</h1>
      <p class="resumen">${esc(t.resumen)}</p>
      <p class="autores">Por ${BLOG.integrantes.map((p) => esc(p.nombre)).join(" · ")}</p>`;

    $("tema-intro").innerHTML = `
      <div>
        <p class="etiqueta">¿De qué trata?</p>
        <h2>${esc(t.titulo)} en pocas palabras</h2>
        <p>${esc(t.descripcion)}</p>
      </div>
      <div>
        <p class="etiqueta">Lo que verás</p>
        <h2>Contenido del tema</h2>
        <ul>${(t.puntos || []).map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
      </div>`;

    $("tema-video").innerHTML = videoHTML(t.video, t.titulo);

    // Artículo: se copia desde el <template id="articulo-..."> de index.html
    const plantilla = $("articulo-" + t.id);
    const articulo = $("articulo");
    articulo.innerHTML = "";
    if (plantilla && plantilla.content.textContent.trim()) {
      articulo.appendChild(plantilla.content.cloneNode(true));
    } else {
      articulo.innerHTML = `<div class="pendiente"><strong>Artículo en preparación</strong>
        <p>El desarrollo completo de este tema se publicará aquí.</p></div>`;
    }

    $("tema-pdf").innerHTML = t.pdf
      ? `<a class="boton secundario" href="${esc(t.pdf)}" target="_blank" rel="noopener">Abrir el artículo en PDF</a>
         <iframe src="${esc(t.pdf)}" title="Artículo en PDF: ${esc(t.titulo)}" loading="lazy"></iframe>`
      : "";
    $("tema-pdf").hidden = !t.pdf;

    const ant = temas[pos - 1], sig = temas[pos + 1];
    $("tema-navegacion").innerHTML =
      (ant ? `<a class="anterior" href="#${ant.id}"><span class="etiqueta">Anterior</span><strong>${esc(ant.titulo)}</strong></a>` : "") +
      (sig ? `<a class="siguiente" href="#${sig.id}"><span class="etiqueta">Siguiente</span><strong>${esc(sig.titulo)}</strong></a>` : "");

    window.scrollTo(0, 0);

    if (window.MathJax && MathJax.typesetPromise) {
      MathJax.typesetClear && MathJax.typesetClear([articulo]);
      MathJax.typesetPromise([articulo]).catch(() => {});
    }
  }

  function videoHTML(v, titulo) {
    if (!v) {
      return `<div class="video-vacio"><span class="icono-play" aria-hidden="true"></span>
        <strong>Video en preparación</strong><p>El video tutorial de este tema se publicará aquí.</p></div>`;
    }
    let m = v.match(/(?:youtu\.be\/|[?&]v=|embed\/|shorts\/|live\/)([\w-]{11})/);
    if (m) {
      return `<div class="video-marco"><iframe src="https://www.youtube-nocookie.com/embed/${m[1]}?rel=0" title="Video: ${esc(titulo)}"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>`;
    }
    m = v.match(/drive\.google\.com\/file\/d\/([\w-]+)/);
    if (m) {
      return `<div class="video-marco"><iframe src="https://drive.google.com/file/d/${m[1]}/preview" title="Video: ${esc(titulo)}" allow="autoplay" allowfullscreen></iframe></div>`;
    }
    return `<div class="video-marco"><video controls preload="metadata" src="${esc(v)}"></video></div>`;
  }

  // ---------- Red animada de la portada (nodos y aristas, como un grafo) ----------
  const red = (function () {
    const lienzo = $("red");
    const ctx = lienzo.getContext("2d");
    const quieto = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let nodos = [], ancho = 0, alto = 0, animacion = null;

    function preparar() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      ancho = lienzo.clientWidth; alto = lienzo.clientHeight;
      lienzo.width = ancho * dpr; lienzo.height = alto * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const cantidad = Math.round(Math.min(70, Math.max(24, (ancho * alto) / 16000)));
      nodos = Array.from({ length: cantidad }, (_, i) => ({
        x: Math.random() * ancho,
        y: Math.random() * alto,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        optimo: i % 17 === 0
      }));
    }

    function dibujar() {
      ctx.clearRect(0, 0, ancho, alto);
      const limite = 150;
      for (let i = 0; i < nodos.length; i++) {
        const a = nodos[i];
        for (let j = i + 1; j < nodos.length; j++) {
          const b = nodos[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < limite) {
            ctx.strokeStyle = `rgba(77, 141, 255, ${(1 - d / limite) * 0.35})`;
            ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
      }
      for (const n of nodos) {
        ctx.fillStyle = n.optimo ? "#ffb547" : "rgba(143, 177, 255, 0.85)";
        ctx.beginPath(); ctx.arc(n.x, n.y, n.optimo ? 3.2 : 1.8, 0, Math.PI * 2); ctx.fill();
      }
    }

    function paso() {
      for (const n of nodos) {
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > ancho) n.vx *= -1;
        if (n.y < 0 || n.y > alto) n.vy *= -1;
      }
      dibujar();
      animacion = requestAnimationFrame(paso);
    }

    window.addEventListener("resize", () => { preparar(); if (quieto) dibujar(); });
    preparar();

    return {
      iniciar() {
        if (!ancho) preparar();
        if (quieto) { dibujar(); return; }
        if (!animacion) animacion = requestAnimationFrame(paso);
      },
      detener() {
        if (animacion) cancelAnimationFrame(animacion);
        animacion = null;
      }
    };
  })();

  window.addEventListener("hashchange", mostrar);
  mostrar();
})();