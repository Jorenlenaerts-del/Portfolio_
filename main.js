const projects = [
  {
    title: 'NOVA_V0',
    cat: 'Automotive · Fusion · Keyshot',
    img: "./Public/Foto's/nova-01.webp",
    details: ["./Public/Foto's/nova-02.webp", "./Public/Foto's/nova-03.webp", "./Public/Foto's/nova-04.webp"],
    videoFile: "./Public/Foto's/nova-video.webm",
    desc: 'NOVA is een conceptontwerp van kop- en achterlichten voor de sculpturale vorm van ECHO, een eerder project. De inspiratie voor dit ontwerp haalde ik uit modellen van Audi en Mercedes-Benz. Lichten bepalen voor een groot deel de uitstraling van een auto.',
    extra: 'Ik heb ervoor gekozen om enkel de lichten van ECHO in detail uit te werken, zodat ik meer detailwerk in het CAD-model kon stoppen. Dankzij dit detailwerk heb ik in KeyShot veelzijdig kunnen experimenteren, met een focus op blur- en motionrenders. Alle kleine elementen en details in het model hebben een grote impact op het renderen en zorgen voor een compleet beeld van het concept.',
    bg: '#10101a',
    
  },
  {
    title: 'LMP_V0',
    cat: 'Automotive · CATIA · Imagine and Shape',
    img: "./Public/Foto's/lmp-01.webp",
    details: ['./Public/Foto\'s/lmp-02.webp', './Public/Foto\'s/lmp-03.webp', './Public/Foto\'s/lmp-04.webp'],
    desc: 'In mijn vrije tijd teken ik veel concept ontwerpen. Hiermee kan ik snel ideeën van 2D of zelfs uit mijn hoofd vertalen naar een sterk 3D model. Bij het modeleerproces kom je tot nieuwe inzichten — interessante en complexe punten die je al productiegericht laten nadenken. Wat in traditionele CAD software soms dagen duurt, visualiseer ik met SubD modeling en niet-destructive workflows snel. Mesh modeling werkt zonder geheugen, deze aanpak geeft me flexibiliteit in het modeleren van de surface bodys.',
    bg: '#120a0a',
  },
  {
    title: 'A story: HydroTeam',
    cat: 'CAD · CFD optimization · Production',
    img: "./Public/Foto's/ligier-01.webp",
    bg: '#120e06',
    chapters: [
      {
        label: 'Design en productie— Jaar 1',
        desc: 'In het eerste jaar bij HydroTeam hebben we in designgroepen gewerkt. Hier hebben we onderzoek gedaan naar de verschillende panelen op racewagens. Uiteindelijk hebben we een concept gemaakt van de engine cover van een ligier. Later in de zomer zijn hier nog iteraties van gemaakt. Hieronder vind je een aantal renders van het toenmalige concept getekend in CATIA. ',
        details: ["./Public/Foto's/ligier-02.webp", "./Public/Foto's/ligier-03.webp", "./Public/Foto's/ligier-04.webp"], 
      },
      {
        label: 'Design en productie — Jaar 2',
        desc: 'Tijdens het jaar zijn er veel factoren die het ontwerpprocces beinvloeden. Tijdens het jaar zijn er verschillende elementen veranderd. Zo heb ik in het begin van het jaar voor CAD tutorials gezorgd. Dit helpt het team te begrijpen hoe ze complexe ideen kunnen maken aan de hand van Imagine and shape in CATIA. In het tweede semester zijn we begonnen met iteraties op het voorgaande model. Hier is zowel een CFD als productie file van opgemaakt. Momenteel zijn we simulaties aan het uitvoeren en wordt het conceptmodel ge 3D print.',
        details: ["./Public/Foto's/ligier-05.webp", "./Public/Foto's/ligier-06.webp", "./Public/Foto's/ligier-07.webp"],
      },
      {
        label: 'Grafisch ontwerp — Tussentijds',
        desc: 'Naast het CAD werk neem ik ook sommige grafische taken van het team op mij. In de zomer van 2025 heb ik gewerkt rond hun nieuw logo en merch. Deze opdrachten zijn niet constant aangezien ik het druk genoeg heb met de technische kant van het team. Het blijft wel bij als een leuke ervaring en een teken van vertrouwen in wat ik doe als grafisch ontwerper.',
        details: ['./Public/Foto\'s/ht-01.webp', './Public/Foto\'s/ht-02.webp', './Public/Foto\'s/ht-03.webp'],
        slideshow: [
          "./Public/Foto's/Radical_RXC_Livery1b.webp",
          "./Public/Foto's/Radical_RXC_Livery2b.webp",
          "./Public/Foto's/Radical_RXC_Livery3b.webp",
          "./Public/Foto's/Radical_RXC_Livery4b.webp",
          "./Public/Foto's/Radical_RXC_Livery5b.webp",
          "./Public/Foto's/Radical_RXC_Livery6b.webp",
          "./Public/Foto's/Radical_RXC_Livery7b.webp",
        ],
        slideshowText: 'Eerst heb ik twee aanzichten getekend in photoshop. Zowel een voor als zijaanzicht. Dankzij deze schetsen heb ik een acuraat beeld kunnen laten genereren via Gemini. Deze tweepuntsperspectief renders tonen het eindresultaat. Het gebruik van AI heeft mij tijdens deze opdracht geholpen, natuurlijk moeten we wel kritisch kijken op de output. Zo zijn er zeker nog fouten te vinden binnen de renders.',
      },
    ],
  },
  {
    title: 'Albatross',
    cat: 'Solidworks · CFD optimization',
    img: "./Public/Foto's/albatross-01.webp",
    details: ["./Public/Foto's/albatross-02.webp", "./Public/Foto's/albatross-03.webp",],
    desc: 'Tijdens de XDW-week volgde ik een workshop rond CFD en ontwerpoptimalisatie onder leiding van Voxdale, samen met Oscar de Wit en Louis de Bie werkten we aan een drone met verwisselbare cargo, geïnspireerd op de albatros (vogel). Via CFD-simulaties in AirShaper verfijnden we ons ontwerp. Mijn rol richtte zich op het modelleren van de vleugels.',
    extra: 'Dankzij de CFD-analyse konden we in model 1 kritieke zones identificeren, met name rond de neus, de vleugels en de luchtstroming naar de achterzijde. Na het doorvoeren van onze optimalisaties werden deze aandachtspunten zichtbaar verbeterd, de resultaten zijn duidelijk zichtbaar in model 2.',
    bg: '#0a0d14',
  },
  {
    title: 'CuraNova',
    cat: 'UX design · Healthcare',
    img: "./Public/Foto's/curanova-01.webp",
    details: ["./Public/Foto's/curanova-02.webp", "./Public/Foto's/curanova-03.webp"],
    pdf: "./Public/Foto's/curaNova_UXdesign_JorenLenaerts&FalkevVandenHeuvel.pdf",
    video: 'https://www.youtube.com/embed/a3V8hHtztDM',
    desc: 'In het kader van het vak User-Centered Design ontwikkelden we een product binnen een specifieke context, gebaseerd op Embodied Interactions en UX-theorie. De focus lag op de interactie tussen gebruiker en product, waarbij we theoretische inzichten vertaalden naar een tastbaar ontwerp. We kozen voor context drie: het ontwerpen van een product voor een dienst waarmee mensen met mentale gezondheidsproblemen anoniem steunende digitale brieven kunnen ontvangen van lotgenoten. Voor dit project werkte ik samen met Falke van den Heuvel.',
    extra: 'Tijdens dit proces zijn we door verschillende iteraties gegaan. Op zoek naar een handeling tussen product en gebruiker, maar ook naar de juiste vorm. Door onderzoek, personas, schetsen en feedback momenten zijn we gegroeid in het UX denkkader. ',
    bg: '#120e06',
  },
  {
    title: 'Sketching',
    cat: 'Photoshop · Vizcom',
    img: "./Public/Foto's/sketching-01.webp",
    details: ['', '', ''],
    slideshow: [
      { src: "./Public/Foto's/sketching-02.webp", label: 'Schets 1' },
      { src: "./Public/Foto's/sketching-03.webp", label: 'Schets 2' },
      { src: "./Public/Foto's/sketching-04.webp", label: 'Schets 3' },
      { src: "./Public/Foto's/sketching-05.webp", label: 'Schets 4' },
    ],
    desc: 'Tijdens mijn opleidingen heb ik verschillende lessen gehad rond digitaal schetsen. Ik gebruik Photoshop, pen en papier om snelle concepten uit te werken. Vizcom is mijn voorkeurstool voor snelle visualisaties met realistische licht- en textuurrenders. Dit versnelt mijn tekenproces, daarnaast heb ik ook al liveries uitgewerkt, hier teken ik vaak de voor en zijaanzichten, daarna laat ik geregeld een drie-kwart aanzicht genereren via AI.',
    bg: '#120e06',
  },
  {
    title: 'Be-Flow',
    cat: 'Fusion · Conceptual design',
    img: "./Public/Foto's/be-flow-01.webp",
    details: ["./Public/Foto's/be-flow-01.webp", "./Public/Foto's/be-flow-02.webp", "./Public/Foto's/be-flow-03.webp"],
    afterTextPhotos: [
      "./Public/Foto's/be-flow-04.webp",
      "./Public/Foto's/be-flow-05.webp",
      "./Public/Foto's/be-flow-06.webp",
    ],
    desc: 'Be-Flow is een ontwerpgedachte waarin vormen ontstaan door luchtstromen rondom objecten te visualiseren en in te vriezen. In plaats van lucht tegen te gaan, laat je de beweging vormen definiëren. In dit project heb ik dit concept toegepast op drie schalen: een stoel rondom het menselijk lichaam, een bureaulamp rondom een lamp, en een wijnhouder rondom een fles.',
    extra: 'De ontwerpen zijn getekend in Fusion met NURBS/T-spline techniek. Deze techniek biedt zekerheid in surface overgangen die altijd netjes aansluiten. De echte struikelblokken waren praktisch: zorgen dat de wijnhouder stabiel stond, de lamp goed paste, en de stoel doordacht was in vulling.\n\nDe wijnhouder heb ik later nog verder ontwikkeld. De voet en de krullen in de "wake" opnieuw getekend zodat het geheel completer voelde. Het 3D-printen van bepaalde onderdelen verliep moeizaam omdat scherpe punten ontstonden. Dit leerde me hoe design voor productie kritisch is: elegante vormen moeten ook praktisch bruikbaar zijn.',
    bg: '#120e06',
  },
  {
    title: 'Echo',
    cat: 'Fusion · CFD optimization',
    img: "./Public/Foto's/echo-01.webp",
    details: ["./Public/Foto's/echo-02.webp"],
    desc: 'Echo is een Bachelor project omtrent vorm en CFD optimalisatie. Door gebruik te maken van Fusion en de Nurb modeling functie is het mogelijk om een organische vorm te creëren zonder complexe surfaceing. Deze vorm is vervolgens geanalyseerd door middel van CFD simulaties in Autodesk CFD. Dit was het eerste project met deze software, het is ook allemaal zelf studie geweest waardoor het voor mij een zeer complex, maar interessant en leerrijk project is geworden. Tijdens dit project ben ik ook gelimiteerd geweest door de kracht van de computer. Dit omdat de mesh te complex was voor de computer.',
    extra: '',
    bg: '#120e06',
  },
  {
    title: 'Tribute Table',
    cat: 'Solidworks · Production',
    img: "./Public/Foto's/tribute-table-01.webp",
    details: ["./Public/Foto's/tribute-table-03.webp", "./Public/Foto's/tribute-table-02.webp"],
    desc: 'Voor het vak multiple design kreeg ik de opdracht een ontwerp te maken voor grotere oplagen met focus op afwerkingstechnieken. Ik ontwerp een modulaire tafel geïnspireerd op iconische kleuren uit de Formule 1 wereld. Het tafelblad is verwisselbaar, zodat kleurencombinaties kunnen variëren.',
    afterText: 'Het frame is gepoedercoat, de modules voor de verbinding van tafel naar frame zijn 3D-geprint, en het tafelblad is wet-sanded en gepolished. Deze combinatie toont hoe je materialen en technieken kunt mengen in één object, en hoe modulariteit productie flexibel maakt.',
    afterTextPhotos: ["./Public/Foto's/tribute-table-04.webp"],
    bg: '#120e06',
  },
  {
    layout: 'quad-group',
    bg: '#0a0d14',
    items: [
      { title: 'RoeffaersLab',         img: "./Public/Foto's/Grafisch/graphic-08.webp" },
      { title: 'PlaSeatic',            img: "./Public/Foto's/Grafisch/graphic-07.webp" },
      { title: 'Hydroteam Logo',       img: "./Public/Foto's/Grafisch/graphic-05.webp" },
      { title: 'Dream Car Collective', img: "./Public/Foto's/Grafisch/graphic-03.webp" },
      { title: 'Jij Bent De Zomer',    img: "./Public/Foto's/Grafisch/graphic-06.webp" },
      { title: 'Grafisch werk 02',     img: "./Public/Foto's/Grafisch/graphic-02.webp" },
      { title: 'Rough Edges',          img: "./Public/Foto's/Grafisch/graphic-09.webp" },
      { title: 'Grafisch werk 04',     img: "./Public/Foto's/Grafisch/graphic-04.webp" },
      { title: 'Stof',                 img: "./Public/Foto's/Grafisch/graphic-12.webp" },
      { title: 'Sama Massages',        img: "./Public/Foto's/Grafisch/graphic-10.webp" },
      { title: '2Punt8',               img: "./Public/Foto's/Grafisch/graphic-01.webp" },
      { title: 'Ski-Gaper',            img: "./Public/Foto's/Grafisch/graphic-11.webp" },
    ],
  },
];

/* ── PLACEHOLDER ── */
function placeholder(w, h, bg, label) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">
    <rect width="${w}" height="${h}" fill="${bg}"/>
    <text x="${w / 2}" y="${h / 2}" font-family="Space Grotesk, sans-serif" font-size="18"
      fill="rgba(242,242,240,0.15)" text-anchor="middle" dominant-baseline="middle"
      letter-spacing="6" font-weight="300">${(label || '').toUpperCase()}</text>
  </svg>`;
  return 'data:image/svg+xml,' + encodeURIComponent(svg);
}

function escapeHTML(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function renderPhotoTrio(photos, altPrefix = 'detail', focusPosition = 'center') {
  return (photos || [])
    .filter(Boolean)
    .map((src, index) => `
      <div class="exp-photo-trio">
        <img src="${src}" alt="${altPrefix} ${index + 1}" loading="eager" style="object-position: ${focusPosition};">
      </div>
    `)
    .join('');
}

function renderAutoSlideshow(photos, altPrefix = 'slideshow') {
  const slides = (photos || []).filter(Boolean);

  return `
    <div class="auto-slideshow" aria-label="Automatische slideshow">
      ${slides.map((src, index) => `
        <img class="auto-slide${index === 0 ? ' is-active' : ''}" src="${src}" alt="${altPrefix} ${index + 1}" loading="eager">
      `).join('')}
    </div>
  `;
}

function renderSketchSlideshow(slides) {
  if (!slides?.length) return '';

  const slideMarkup = slides.map((slide, index) => `
    <figure class="sketch-slide">
      <img src="${slide.src}" alt="${escapeHTML(slide.label || `sketch ${index + 1}`)}" loading="eager">
      <figcaption>${escapeHTML(slide.label || `Sketch ${index + 1}`)}</figcaption>
    </figure>
  `).join('');

  return `
    <div class="sketch-gallery">
      ${slideMarkup}
    </div>
  `;
}

function projectPanelHTML(project) {
  if (project.chapters?.length) {
    const chapterMarkup = project.chapters
      .map((chapter, index) => {
        const chapterPhotos = renderPhotoTrio(chapter.details, `chapter ${index + 1}`);
        const chapterSlideshow = chapter.slideshowText
          ? `<div class="slideshow-text-box">${escapeHTML(chapter.slideshowText)}</div>${renderAutoSlideshow(chapter.slideshow || chapter.details, 'HydroTeam grafisch ontwerp')}`
          : '';
        const projectIntro = index === 0
          ? `<div class="exp-title">${escapeHTML(project.title || '')}</div><div class="exp-cat">${escapeHTML(project.cat || '')}</div>`
          : '';
        const extraBlock = chapter.extra
          ? `<div class="exp-row--extra"><p class="exp-extra">${escapeHTML(chapter.extra)}</p></div>`
          : '';

        return `
          <div class="exp-row--main">
            <div class="exp-text">
              <div>
                ${projectIntro}
                ${chapter.label ? `<div class="exp-chapter-label">${escapeHTML(chapter.label)}</div>` : ''}
                <p class="exp-desc">${escapeHTML(chapter.desc || '')}</p>
              </div>
            </div>
          </div>
          ${chapterPhotos ? `<div class="exp-row--trio">${chapterPhotos}</div>` : ''}
          ${chapterSlideshow}
          ${extraBlock}
        `;
      })
      .join('');

    const projectExtra = project.extra
      ? `<div class="exp-row--extra"><p class="exp-extra">${escapeHTML(project.extra)}</p></div>`
      : '';

    return `${chapterMarkup}${projectExtra}`;
  }

  const focusPosition = project.title === 'Echo' ? 'center bottom' : 'center';
  const photos = renderPhotoTrio(project.details, 'detail', focusPosition);
  const afterTextPhotos = renderPhotoTrio(project.afterTextPhotos, 'screenshot');
  const slideshow = renderSketchSlideshow(project.slideshow);
  const video = project.videoFile
    ? `<div class="exp-video"><video src="${escapeHTML(project.videoFile)}" poster="${escapeHTML(project.img || '')}" title="${escapeHTML(project.title || 'Project video')}" autoplay muted loop playsinline preload="metadata"></video></div>`
    : project.video
      ? `<div class="exp-video"><iframe src="${escapeHTML(project.video)}" title="${escapeHTML(project.title || 'Project video')}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>`
      : '';

  return `
    <div class="exp-row--main">
      <div class="exp-text">
        <div>
          <div class="exp-title-row">
            <div class="exp-title">${escapeHTML(project.title || '')}</div>
            ${project.pdf ? `<a class="exp-download" href="${escapeHTML(project.pdf)}" download aria-label="Download ${escapeHTML(project.title || 'project')} PDF">Bekijk volledig procesdocument</a>` : ''}
          </div>
          <div class="exp-cat">${escapeHTML(project.cat || '')}</div>
          <p class="exp-desc">${escapeHTML(project.desc || '')}</p>
        </div>
      </div>
    </div>
    ${video}
    ${slideshow || (photos ? `<div class="exp-row--trio">${photos}</div>` : '')}
    ${project.afterText && afterTextPhotos
      ? `<div class="exp-row--extra-with-photo"><p class="exp-extra">${escapeHTML(project.afterText)}</p><div class="exp-row--trio">${afterTextPhotos}</div></div>`
      : project.afterText ? `<div class="exp-row--extra"><p class="exp-extra">${escapeHTML(project.afterText)}</p></div>` : ''}
    ${project.extra ? `<div class="exp-row--extra"><p class="exp-extra">${escapeHTML(project.extra)}</p></div>` : ''}
    ${!project.afterText && afterTextPhotos ? `<div class="exp-row--trio">${afterTextPhotos}</div>` : ''}
  `;
}

function createSectionHeading(id, text) {
  const heading = document.createElement('div');
  heading.className = 'section-heading';
  heading.id = id;
  heading.textContent = text;
  return heading;
}

function toggleProjectSlice(slice, shouldOpen) {
  const isOpen = slice.classList.contains('open');
  const nextState = typeof shouldOpen === 'boolean' ? shouldOpen : !isOpen;

  const closeProjectSlice = (item) => {
    item.classList.remove('open');
    item.setAttribute('aria-expanded', 'false');
    requestAnimationFrame(() => {
      item.scrollIntoView({ behavior: 'auto', block: 'start' });
    });
  };

  document.querySelectorAll('.slice.open').forEach((item) => {
    if (item === slice && !nextState) {
      closeProjectSlice(item);
      return;
    }
    item.classList.remove('open');
    item.setAttribute('aria-expanded', 'false');
  });

  if (nextState) {
    slice.classList.add('open');
    slice.setAttribute('aria-expanded', 'true');
  }
}

function createProjectSlice(project, index) {
  const num = String(index + 1).padStart(2, '0');
  const src = project.img || placeholder(3240, 1350, project.bg, project.title);
  const imageStyle = project.title === 'Echo' ? 'object-position: center bottom;' : '';
  const projectTitle = escapeHTML(project.title || 'Project');
  const projectCategory = escapeHTML(project.cat || '');

  const slice = document.createElement('div');
  slice.className = 'slice';
  slice.setAttribute('role', 'button');
  slice.setAttribute('tabindex', '0');
  slice.setAttribute('aria-label', `Open project: ${project.title}`);
  slice.setAttribute('aria-expanded', 'false');

  slice.innerHTML = `
    <img src="${src}" alt="${projectTitle}" loading="eager" style="${imageStyle}">
    <div class="slice-index">${num}</div>
    <div class="slice-over">
      <div class="slice-meta">
        <span class="slice-title">${projectTitle}</span>
        <div class="slice-line"></div>
        <span class="slice-cat">${projectCategory}</span>
      </div>
    </div>
    <div class="exp-panel">
      ${projectPanelHTML(project)}
      <div class="exp-close">↑ Sluiten</div>
    </div>
  `;

  slice.addEventListener('click', (event) => {
    if (event.target.closest('.exp-close')) {
      toggleProjectSlice(slice, false);
      return;
    }

    if (event.target.closest('.exp-download')) return;

    toggleProjectSlice(slice);
  });

  slice.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleProjectSlice(slice);
    }
  });

  return slice;
}

function createQuadGroup(project) {
  const row = document.createElement('div');
  row.className = 'quad-row';
  const stage = document.createElement('div');
  stage.className = 'quad-stage';

  [...project.items, ...project.items, ...project.items, ...project.items].forEach((item) => {
    const cell = document.createElement('div');
    cell.className = 'quad-cell';
    const src = item.img || placeholder(648, 648, project.bg, item.title);
    cell.innerHTML = `<img src="${src}" alt="${escapeHTML(item.title)}" loading="eager">`;
    stage.appendChild(cell);
  });

  row.appendChild(stage);
  return row;
}

/* ── RENDER FEED ── */
const themeToggle = document.querySelector('.theme-toggle');
const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');
const prefersLightMode = window.matchMedia('(prefers-color-scheme: light)').matches;
const body = document.body;

body.classList.toggle('light-mode', prefersLightMode);

if (themeToggle) {
  const updateThemeToggle = (isLight) => {
    themeToggle.setAttribute('aria-label', isLight ? 'Switch to dark mode' : 'Switch to light mode');
  };

  updateThemeToggle(prefersLightMode);
  themeToggle.addEventListener('click', () => {
    const isLight = body.classList.toggle('light-mode');
    updateThemeToggle(isLight);
    themeToggle.classList.remove('is-changing');
    requestAnimationFrame(() => themeToggle.classList.add('is-changing'));
  });
}

if (navToggle && siteNav) {
  const closeNavMenu = () => {
    siteNav.classList.remove('nav-open');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Open menu');
  };

  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('nav-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
    navToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  });

  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => closeNavMenu());
  });
}

const feed = document.getElementById('feed');

if (!feed) {
  throw new Error('The #feed element was not found.');
}

feed.appendChild(createSectionHeading('product-design', 'Product Design'));

projects.forEach((project, index) => {
  if (project.layout === 'quad-group') {
    feed.appendChild(createSectionHeading('grafisch-design', 'Grafisch Design'));
    feed.appendChild(createQuadGroup(project));
    return;
  }

  feed.appendChild(createProjectSlice(project, index));
});

/* ── ABOUT ── */
const about = document.createElement('section');
about.id = 'about';
about.className = 'about-section';
about.innerHTML = `
  <div class="about-divider">
    <span class="about-divider-label">Over mij</span>
  </div>
  <div class="about-main">
    <div class="about-block">
      <div class="about-name">Joren&nbsp;Lenaerts</div>
      <div class="about-role">Student · AP Antwerpen</div>
      <div class="about-bio">
        <p>Ik ben een ontwerper die technisch en creatief denkt. Mijn kracht ligt in conceptuele exploratie vooral het testen van ideeën, vormen, en zoeken naar antwoorden hierop. Dit geldt ook voor grafisch werk, vele concepten uitwerken en samenbrengen tot één groot geheel.</p>
        <p>Mijn inspiratie komt uit verschillende hoeken. Skiën, wandelen en fotografie zorgen voor de nodige inspiratie uit de natuur. Daarnaast speelt automotive design een rol in mijn inspiratie. Ik ben constant details rondom mij aan het opnemen. Vormen, kleurencombinaties, lichtinvallen. Al deze waarnemingen geven me een kritische kijk op eigen  werk zowel grafisch als technisch, maar zijn aan de andere kant een oneindige bron van inspiratie.</p>
        <p>Automotive design is mijn focus. De richting maakt niet uit zowel technisch, UX/UI, carwrapping interesseert me, zolang het automotive is. HydroTeam gaf me al een smaak van een technische startup-omgeving, maar dit is zeker niet waar ik wil stoppen. Ik hoop impact te maken binnen welk vakgebied ik ook terecht kom.</p>
        <div class="about-links">
          <a class="about-instagram" href="https://www.instagram.com/lenaerts_joren/" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a id="about-contact" class="about-contact" href="mailto:Joren.lenaerts@outlook.com">Contact opnemen</a>
        </div>
      </div>
    </div>
    <div class="about-photo-block">
      <img src="./Public/Foto's/profile-photo.jpeg" alt="Joren Lenaerts">
    </div>
  </div>
`;
feed.after(about);

/* ── SCROLL OBSERVER ── */
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), index * 60);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.05, rootMargin: '0px 0px -20px 0px' });

document.querySelectorAll('.slice').forEach((slice) => observer.observe(slice));

document.querySelectorAll('.auto-slideshow').forEach((slideshow) => {
  const slides = [...slideshow.querySelectorAll('.auto-slide')];
  let activeIndex = 0;

  window.setInterval(() => {
    slides[activeIndex].classList.remove('is-active');
    activeIndex = (activeIndex + 1) % slides.length;
    slides[activeIndex].classList.add('is-active');
  }, 3500);
});

document.querySelector('a[href="#about"]')?.addEventListener('click', (event) => {
  event.preventDefault();
  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
});