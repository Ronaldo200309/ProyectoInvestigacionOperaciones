const TEMAS = [
  { modulo: 1, num: "1.1", titulo: "Formulación de Modelos",              url: "modulo-1.html#formulacion-de-modelos" },
  { modulo: 1, num: "1.2", titulo: "Programación Lineal",                 url: "modulo-1.html#programacion-lineal" },
  { modulo: 1, num: "1.3", titulo: "Método Gráfico",                      url: "modulo-1.html#metodo-grafico" },
  { modulo: 1, num: "1.4", titulo: "Método Simplex",                      url: "modulo-1.html#metodo-simplex" },
  { modulo: 2, num: "2.1", titulo: "Dualidad y Análisis de Sensibilidad", url: "modulo-2.html#dualidad-y-sensibilidad" },
  { modulo: 2, num: "2.2", titulo: "Modelo de Transporte",                url: "modulo-2.html#modelo-de-transporte" },
  { modulo: 2, num: "2.3", titulo: "Modelo de Asignación",                url: "modulo-2.html#modelo-de-asignacion" },
  { modulo: 3, num: "3.1", titulo: "Teoría de Redes (PERT/CPM)",          url: "modulo-3.html#pert-cpm" },
  { modulo: 3, num: "3.2", titulo: "Teoría de Inventarios",               url: "modulo-3.html#teoria-de-inventarios" }
];

(function () {
  "use strict";
  const $ = (sel, raiz = document) => raiz.querySelector(sel);
  const $$ = (sel, raiz = document) => Array.from(raiz.querySelectorAll(sel));
  const esc = (s) => String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const sinAcentos = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

  const botonMenu = $(".menu-boton");
  const nav = $("#nav");
  if (botonMenu && nav) {
    botonMenu.addEventListener("click", () => {
      const abierto = nav.classList.toggle("abierto");
      botonMenu.setAttribute("aria-expanded", abierto);
    });
    $$(".desplegable > .nav-link").forEach((enlace) => {
      enlace.addEventListener("click", (e) => {
        if (window.matchMedia("(max-width: 1260px)").matches) {
          const li = enlace.parentElement;
          if (!li.classList.contains("abierto")) { e.preventDefault(); li.classList.add("abierto"); }
        }
      });
    });
    nav.addEventListener("click", (e) => {
      if (e.target.closest(".submenu a, .nav > ul > li:not(.desplegable) > a")) {
        nav.classList.remove("abierto");
        botonMenu.setAttribute("aria-expanded", "false");
      }
    });
  }

  const formBuscar = $(".buscar");
  if (formBuscar) {
    const entrada = $("input", formBuscar);
    const lista = $(".resultados", formBuscar);
    let marcado = -1;

    const pintar = () => {
      const q = sinAcentos(entrada.value.trim());
      if (!q) { lista.hidden = true; return; }
      const hallados = TEMAS.filter((t) => sinAcentos(`${t.num} ${t.titulo} modulo ${t.modulo}`).includes(q));
      marcado = hallados.length ? 0 : -1;
      lista.innerHTML = hallados.length
        ? hallados.map((t, i) => `<li><a href="${t.url}" class="${i === 0 ? "marcado" : ""}">${esc(t.num)} · ${esc(t.titulo)}<span>Módulo ${t.modulo}</span></a></li>`).join("")
        : `<li class="vacio">No hay temas que coincidan.</li>`;
      lista.hidden = false;
    };
    entrada.addEventListener("input", pintar);
    entrada.addEventListener("focus", pintar);
    entrada.addEventListener("keydown", (e) => {
      const enlaces = $$("a", lista);
      if (!enlaces.length) return;
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
        marcado = (marcado + (e.key === "ArrowDown" ? 1 : -1) + enlaces.length) % enlaces.length;
        enlaces.forEach((a, i) => a.classList.toggle("marcado", i === marcado));
      }
      if (e.key === "Escape") lista.hidden = true;
    });
    formBuscar.addEventListener("submit", (e) => {
      e.preventDefault();
      const enlace = $$("a", lista)[Math.max(marcado, 0)];
      if (enlace) location.href = enlace.href;
    });
    document.addEventListener("click", (e) => { if (!formBuscar.contains(e.target)) lista.hidden = true; });
  }

  const carrusel = $("[data-carrusel]");
  if (carrusel) {
    const slides = $$(".slide", carrusel);
    const puntos = $(".puntos");
    const quieto = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let actual = 0, temporizador = null;

    puntos.innerHTML = slides.map((_, i) => `<button type="button" aria-label="Ir a la diapositiva ${i + 1}"></button>`).join("");
    const botones = $$("button", puntos);

    const ir = (n) => {
      actual = (n + slides.length) % slides.length;
      slides.forEach((s, i) => {
        s.classList.toggle("activo", i === actual);
        s.setAttribute("aria-hidden", i !== actual);
        $$("a, button", s).forEach((el) => (el.tabIndex = i === actual ? 0 : -1));
      });
      botones.forEach((b, i) => b.setAttribute("aria-current", i === actual));
    };
    const reiniciar = () => {
      clearInterval(temporizador);
      if (!quieto) temporizador = setInterval(() => ir(actual + 1), 6500);
    };

    botones.forEach((b, i) => b.addEventListener("click", () => { ir(i); reiniciar(); }));
    $(".flecha-carrusel.prev").addEventListener("click", () => { ir(actual - 1); reiniciar(); });
    $(".flecha-carrusel.sig").addEventListener("click", () => { ir(actual + 1); reiniciar(); });
    const hero = carrusel.closest(".hero");
    hero.addEventListener("mouseenter", () => clearInterval(temporizador));
    hero.addEventListener("mouseleave", reiniciar);
    hero.addEventListener("focusin", () => clearInterval(temporizador));

    ir(0);
    reiniciar();
  }

  const filtros = $(".videos-filtros");
  if (filtros) {
    filtros.addEventListener("click", (e) => {
      const b = e.target.closest("button");
      if (!b) return;
      $$("button", filtros).forEach((x) => x.setAttribute("aria-pressed", x === b));
      const m = b.dataset.modulo;
      $$(".videos-grid > li").forEach((li) => { li.hidden = m !== "todos" && li.dataset.modulo !== m; });
    });
  }

  $$(".video[data-video]").forEach((caja) => {
    const enlace = caja.dataset.video.trim();
    const titulo = caja.dataset.titulo || "Video tutorial";

    if (!enlace) {
      caja.className = "video-pendiente";
      caja.innerHTML = `<span class="play-grande" aria-hidden="true"></span>
        <strong>${esc(titulo)}</strong><span>Video tutorial en preparación</span>`;
      return;
    }
    let m = enlace.match(/(?:youtu\.be\/|[?&]v=|embed\/|shorts\/|live\/)([\w-]{11})/);
    if (m) {
      caja.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${m[1]}?rel=0" title="${esc(titulo)}"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen loading="lazy"></iframe>`;
      return;
    }
    m = enlace.match(/drive\.google\.com\/file\/d\/([\w-]+)/);
    if (m) {
      caja.classList.add("video-drive");
      caja.innerHTML = `<iframe src="https://drive.google.com/file/d/${m[1]}/preview" title="${esc(titulo)}" allow="autoplay; fullscreen" allowfullscreen></iframe>`;
      caja.insertAdjacentHTML("afterend", `<a class="boton oscuro flecha-der video-abrir" href="https://drive.google.com/file/d/${m[1]}/view" target="_blank" rel="noopener">Ver en pantalla completa</a>`);
      return;
    }
    caja.innerHTML = `<video controls preload="metadata" src="${esc(enlace)}"></video>`;
  });

  $$(".documento[data-documento]").forEach((caja) => {
    const enlace = caja.dataset.documento.trim();
    const titulo = caja.dataset.titulo || "Artículo";

    if (!enlace) {
      caja.innerHTML = `<div class="pendiente"><strong>Artículo en preparación</strong>
        El documento de este módulo se mostrará aquí.</div>`;
      return;
    }

    let vista = "", abrir = enlace, m;
    if ((m = enlace.match(/docs\.google\.com\/(document|presentation|spreadsheets)\/d\/([\w-]+)/))) {
      vista = `https://docs.google.com/${m[1]}/d/${m[2]}/preview`;
    } else if ((m = enlace.match(/drive\.google\.com\/file\/d\/([\w-]+)/) || enlace.match(/[?&]id=([\w-]+)/))) {
      vista = `https://drive.google.com/file/d/${m[1]}/preview`;
      abrir = `https://drive.google.com/file/d/${m[1]}/view`;
    } else {
      vista = enlace;
    }

    caja.innerHTML = `
      <div class="documento-marco">
        <iframe src="${esc(vista)}" title="${esc(titulo)}" loading="lazy" allow="autoplay"></iframe>
      </div>
      <a class="boton oscuro flecha-der documento-abrir" href="${esc(abrir)}" target="_blank" rel="noopener">Abrir el artículo completo</a>`;
  });

  $$("[data-anio]").forEach((el) => (el.textContent = new Date().getFullYear()));
})();
