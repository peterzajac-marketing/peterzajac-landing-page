import { withBase } from '../utils/withBase';

/**
 * Všetky texty stránky. Nastavenia webu (logo, GTM, kontakt…) sú v site.ts.
 */

export const seo = {
  titulok: 'Finančné plánovanie pre stabilnú budúcnosť',
  popis:
    'Získajte strategického partnera pre správu vášho majetku a budovanie renty. Individuálny prístup a bezpečné investície.',
};

export const hero = {
  nadpis: 'Dlhodobé finančné plánovanie pre stabilnú budúcnosť.',
  podnadpis: 'Získajte strategického partnera pre správu vášho majetku a budovanie renty.',
  cta: 'Dohodnúť si stretnutie',
  obrazok: {
    src: withBase('/images/img-eee6992b-599x735.png'),
    srcMobil: withBase('/images/img-eee6992b-320x392.png'),
    alt: 'Ing. Peter Zajac',
    width: 599,
    height: 735,
  },
};

export const preKoho = {
  nadpis: 'Je táto spolupráca vhodná práve pre vás?',
  karty: [
    {
      obrazok: { src: withBase('/images/img-514c259f-120x112.jpg'), alt: 'Manažéri a špecialisti', width: 121, height: 113 },
      titulok: 'Manažéri a špecialisti',
      text: 'Tvorba kapitálu nezávislého od aktívnej práce.',
    },
    {
      obrazok: { src: withBase('/images/img-9dc38bb5-143x106.jpg'), alt: 'Majitelia firiem', width: 143, height: 106 },
      titulok: 'Majitelia firiem',
      text: 'Oddelenie súkromného majetku od firemných rizík.',
    },
    {
      obrazok: { src: withBase('/images/img-389f29c9-96x109.jpg'), alt: 'Rodiny s majetkom', width: 96, height: 109 },
      titulok: 'Rodiny s majetkom',
      text: 'Strategické zabezpečenie budúcich generácií.',
    },
  ],
};

export const oblasti = {
  nadpis: 'Oblasti spolupráce',
  polozky: [
    'Finančný plán',
    'Zabezpečenie výpadku príjmu',
    'Bezpečné investície',
    'Prémiové investičné portfóliá',
    'Práca s rizikom a výnosom',
    'Rentierske investičné portfólio',
    'Ochrana vybudovaného majetku',
    'Dosiahnutie statusu rentiéra',
  ],
};

export const ziskate = {
  nadpis: 'Čo získate spoluprácou',
  polozky: ['Diskrétnosť', 'Skúsený tím', 'Mentoring', 'Individuálny servis', 'Reálne očakávania'],
  obrazok: {
    src: withBase('/images/img-1c2d3071-392x589.jpg'),
    alt: 'Peter Zajac pri konzultácii s klientom',
    width: 392,
    height: 589,
  },
};

export const postup = {
  nadpis: 'Ako prebieha dlhodobá spolupráca',
  kroky: [
    {
      titulok: '1. Analýza vašich očakávaní',
      text: 'Na úvodnom stretnutí prejdeme vašu situáciu a očakávania.',
    },
    {
      titulok: '2. Návrh stratégie',
      text: 'Vypracovanie individuálneho finančného plánu na mieru.',
    },
    {
      titulok: '3. Dlhodobá správa',
      text: 'Kontinuálna implementácia a dohľad nad vaším portfóliom.',
    },
    {
      titulok: '4. Pravidelný servis',
      text: 'Aktualizácia stratégie podľa potrieb klienta a situácie na trhu.',
    },
  ],
  cta: 'Dohodnúť si stretnutie',
};

export const statistiky = [
  { ikona: withBase('/images/icon_903c9c57.svg'), hodnota: '550 000 €+', popis: 'spravovaný kapitál' },
  { ikona: withBase('/images/icon_a100c171.svg'), hodnota: '11+', popis: 'rokov skúseností' },
  { ikona: withBase('/images/icon_5f9f80cd.svg'), hodnota: '40+', popis: 'nehnuteľností v portfóliu' },
] as const;

export const referencie = {
  nadpis: 'Referencie',
  podnadpis: 'Najväčšou odmenou sú pre mňa spokojní klienti.',
  polozky: [
    {
      meno: 'M. Tajcnár',
      text: 'Peter je vždy nohami na zemi, pripravený pomôcť a poradiť v akejkoľvek situácii. Príjemné a nenútené vystupovanie, intelekt a humor, prevyšuje len jeho rozsiahla kapacita a dlhoročné skúsenosti.',
    },
    {
      meno: 'B. Vraniaková',
      text: 'Petra Zajaca viem s veľmi čistým svedomím odporučiť! Spolu sme si prešli moje príjmy a výdavky, nastavili sme hranice na základe ktorých som vedela nájsť byt v mojom rozpočte. Jeho prístup je profesionálny, má súčasný prehľad o trhu a vždy je ochotný poradiť.',
    },
    {
      meno: 'D. Palacková',
      text: 'Ďakujeme za profesionálne a bezproblémové zastrešenie celého procesu hypotéky, investovania a riešenia poistení. Ceníme si najmä ľudský prístup, podporu za každých okolností a ochotu rýchlo riešiť vzniknuté situácie. 100% odporúčame.',
    },
    {
      meno: 'K. Svetlíková',
      text: 'Veľká spokojnosť! Pre mňa je najdôležitejšie, aby som mohla na 100 % dôverovať osobe, ktorá mi radí, ako lepšie narábať s mojimi financiami. Peťo si moju dôveru zaslúžil svojou profesionalitou, odbornosťou a ochotou. Vidno, že klient je u neho na prvom mieste a som rada, že práve do jeho rúk som zverila svoje financie.',
    },
  ],
};

export const faq = {
  nadpis: 'Často kladené otázky',
  polozky: [
    {
      otazka: 'Ako prebieha úvodné stretnutie?',
      odpoved:
        'Stretnutie je rozhovor o vašej aktuálnej situácii. Prejdeme si, čo dnes máte nastavené, ako investujete a čo od svojho majetku očakávate. Na základe toho vám poviem, kde vidím priestor na zlepšenie a ako by sme k tomu vedeli pristúpiť.',
    },
    {
      otazka: 'Je úvodná konzultácia nezáväzná?',
      odpoved:
        'Áno, je nezáväzná. Zároveň platí, že si nevyberáte len vy mňa, ale aj ja vás. Po stretnutí si obaja povieme, či nám spolupráca dáva zmysel.',
    },
    {
      otazka: 'S akými klientmi najčastejšie spolupracujete?',
      odpoved:
        'Najčastejšie pracujem s podnikateľmi, majiteľmi firiem a rodinami, ktoré už majú vytvorený majetok, ale aj s klientmi, ktorí ho chcú tvoriť. Ide o ľudí, ktorí chcú mať vo financiách poriadok a dlhodobo jasný systém, nie riešiť veci náhodne.',
    },
    {
      otazka: 'S čím mi viete konkrétne pomôcť?',
      odpoved:
        'Pomôžem vám nastaviť, ako má váš majetok fungovať ako celok. Konkrétne riešime napríklad investície, ochranu majetku, príjem pri výpadku práce alebo postupné vytváranie pasívneho príjmu. Všetko sa nastavuje podľa vašej situácie.',
    },
    {
      otazka: 'Čo môžem očakávať po prvom stretnutí?',
      odpoved:
        'Podrobný finančný plán, jasne nastavenú investičnú stratégiu a realisticky nastavené očakávania.',
    },
  ],
};

export const formular = {
  nadpis: 'Spoločne vyriešime váš problém.',
  podnadpis: 'Rezervujte si konzultáciu',
  poznamka: 'Vyplňte formulár a dohodneme si termín.',
  polia: {
    meno: 'Meno',
    email: 'Email',
    telefon: 'Telefónne číslo',
    dlhodobaSprava: 'Máte záujem o dlhodobú správu (10+ rokov)?',
    financnyCiel: 'Aký je váš hlavný finančný cieľ? (Renta / Ochrana majetku / Rast)',
    zdroj: 'Odkiaľ ste sa o nás dozvedeli?',
    sprava: 'Správa',
  },
  spravaPlaceholder: 'Opíšte v krátkosti vašu situáciu',
  gdprText: 'Súhlasím so spracovaním osobných údajov',
  odoslat: 'Odoslať dopyt',
};

export const dakujeme = {
  nadpis: 'Ďakujeme za váš dopyt!',
  text: 'Vaša žiadosť bola úspešne odoslaná. Čoskoro sa vám ozveme a dohodneme si termín konzultácie.',
  tlacidlo: 'Späť na hlavnú stránku',
};
