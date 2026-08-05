import { withBase } from '../utils/withBase';

/**
 * Nastavenia projektu — jediné miesto, kde sa mení identita webu.
 * Texty sekcií sa upravujú v content.ts.
 */
export const site = {
  /** Názov firmy — používa sa v title, og:site_name a JSON-LD */
  nazovFirmy: 'Ing. Peter Zajac',

  /** Jazyk stránky a og:locale */
  jazyk: 'sk',
  ogLocale: 'sk_SK',

  /**
   * Google Tag Manager ID (napr. 'GTM-XXXXXXX').
   * Ak zostane prázdny reťazec, GTM sa do stránky vôbec nevloží.
   */
  gtmId: '',

  /**
   * Google Analytics 4 measurement ID (napr. 'G-XXXXXXXXXX').
   * Ak zostane prázdny reťazec, gtag.js sa do stránky vôbec nevloží.
   */
  gaId: 'G-HBDRTGGTGF',

  logo: {
    src: withBase('/images/logopeterzajac.svg'),
    alt: 'Peter Zajac – logo',
    width: 126,
    height: 81,
  },

  logoBiele: {
    src: withBase('/images/logopeterzajacwhite.svg'),
    alt: 'Peter Zajac – logo',
    width: 69,
    height: 45,
  },

  favicon: withBase('/images/favicon.png'),

  /** Obrázok pre og:image (zdieľanie na sociálnych sieťach) */
  ogImage: {
    src: withBase('/images/img-eee6992b-599x735.png'),
    width: 599,
    height: 735,
  },

  kontakt: {
    email: 'peter.zajac@simplea.sk',
    telefony: ['+421 902 066 998'],
    /** Telefón v medzinárodnom formáte pre JSON-LD */
    telefonJsonLd: '+421902066998',
    sidlo: 'Pobočka Bratislava: Mlynské Nivy 48, 821 09 Bratislava',
  },

  /** URL stránky s ochranou osobných údajov (GDPR) */
  gdprUrl: 'https://peterzajac.sk/ochrana-osobnych-udajov/',

  /** Oprávnenie zobrazené v pätičke */
  opravnenie: 'Oprávnenie podľa čísla NBS 284307',

  /**
   * Údaje pre štruktúrované dáta (JSON-LD) na hlavnej stránke.
   * Typ firmy: https://schema.org/LocalBusiness a podtypy
   */
  jsonLd: {
    typFirmy: 'FinancialService',
    adresa: {
      ulica: 'Mlynské Nivy 48',
      mesto: 'Bratislava',
      psc: '821 09',
      krajina: 'SK',
    },
    oblastPosobenia: 'Slovensko',
  },
};
