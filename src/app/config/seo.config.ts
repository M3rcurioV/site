export interface SeoData {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
}

export const SEO_CONFIG: { [key: string]: SeoData } = {
  homepage: {
    title: 'Informatic Assistance - Soluzioni Software Gestionali',
    description: 'Scopri le nostre soluzioni software gestionali per aziende. INFO-GAS, INFO-Manutengo, Presenze2000, Info-Surgelati, Info-Legno, Taglie e Colori e GIANO.',
    keywords: 'software gestionale, INFO-GAS, INFO-Manutengo, Presenze2000, Info-Surgelati, Info-Legno, GIANO, Taglie e Colori, gestionali per aziende, software per imprese, soluzioni informatiche',
    image: 'https://www.informatic-assistance.it/assets/images/seo/homepage.jpg',
    url: 'https://www.informatic-assistance.it'
  },
  'chi-siamo': {
    title: 'Chi Siamo - Informatic Assistance',
    description: 'Conosci la nostra azienda e il nostro team di esperti in soluzioni software gestionali per imprese e professionisti.',
    keywords: 'azienda software, team, informatic assistance, software house, sviluppo software, gestionali aziendali',
    image: 'https://www.informatic-assistance.it/assets/images/seo/chi-siamo.jpg',
    url: 'https://www.informatic-assistance.it/chi-siamo'
},
  contatti: {
    title: 'Contatti - Informatic Assistance',
    description: 'Contattaci per informazioni, preventivi o assistenza sui nostri software gestionali aziendali.',
    keywords: 'contatti, informazioni, assistenza clienti, supporto software, preventivo gestionale',
    image: 'https://www.informatic-assistance.it/assets/images/seo/contatti.jpg',
    url: 'https://www.informatic-assistance.it/contatti'
  },
  prodotti: {
    title: 'Prodotti - Informatic Assistance',
    description: 'Scopri tutti i nostri prodotti software gestionali: INFO-GAS, INFO-Manutengo, Presenze2000, Taglie e Colori, Info-Surgelati, Info-Legno, GIANO.',
    keywords: 'prodotti gestionali, software aziendali, INFO-GAS, INFO-Manutengo, Presenze2000, Taglie e Colori, GIANO, Info-Surgelati, Info-Legno, gestionali per imprese',
    image: 'https://www.informatic-assistance.it/assets/images/seo/prodotti.jpg',
    url: 'https://www.informatic-assistance.it/prodotti'
  },
  'info-gas': {
    title: 'INFO-GAS - Software Gestionale per il Settore Gas',
    description: 'INFO-GAS è il gestionale perfetto per aziende del settore gas e distribuzione, con funzioni avanzate per la fatturazione, gestione impianti e letture.',
    keywords: 'INFO-GAS, gestionale gas, software settore gas, distribuzione gas, fatturazione gas, gestione impianti gas, deposito commerciale, deposito fiscale',
    image: 'https://www.informatic-assistance.it/assets/images/seo/info-gas.jpg',
    url: 'https://www.informatic-assistance.it/gas/panoramica'
  },
  'info-manutengo': {
    title: 'INFO-Manutengo - Gestione Manutenzioni Aziendali',
    description: 'Software per la gestione completa delle manutenzioni aziendali: ordini, scadenze, interventi, ricambi e molto altro.',
    keywords: 'INFO-Manutengo, manutenzioni, software manutenzione, gestionale manutenzione, manutenzione impianti, gestione interventi',
    image: 'https://www.informatic-assistance.it/assets/images/seo/info-manutengo.jpg',
    url: 'https://www.informatic-assistance.it/prodotti/info-manutengo'
  },
  presenze2000: {
    title: 'Presenze2000 - Controllo Presenze e Timbrature',
    description: 'Gestisci le presenze, le timbrature e le anomalie del personale con Presenze2000, integrabile con terminali fisici.',
    keywords: 'presenze, timbrature, gestione personale, controllo accessi, rilevazione presenze, terminale presenze',
    image: 'https://www.informatic-assistance.it/assets/images/seo/presenze2000.jpg',
    url: 'https://www.informatic-assistance.it/prodotti/presenze2000'
  },
  'taglie-e-colori': {
    title: 'Taglie e Colori - Gestione Varianti per Abbigliamento',
    description: 'Gestionale per negozi di abbigliamento e distributori con gestione di taglie, colori, magazzino e vendite.',
    keywords: 'gestionale abbigliamento, taglie e colori, software moda, gestione varianti, negozio abbigliamento, distribuzione moda',
    image: 'https://www.informatic-assistance.it/assets/images/seo/taglie-e-colori.jpg',
    url: 'https://www.informatic-assistance.it/prodotti/taglie-e-colori'
  },
  giano: {
    title: 'GIANO - Gestionale per Gioiellerie',
    description: 'GIANO è il software gestionale completo pensato per gioiellerie e negozi di articoli preziosi: gestione vendite, articoli e documenti fiscali.',
    keywords: 'GIANO, gestionale gioielleria, software preziosi, vendita gioielli, software gioiellerie, gestione negozio gioielli',
    image: 'https://www.informatic-assistance.it/assets/images/seo/giano.jpg',
    url: 'https://www.informatic-assistance.it/prodotti/giano'
  },
  'info-legno': {
    title: 'Info-Legno - Gestionale per il Settore Legno',
    description: 'Software gestionale specializzato per aziende che operano nel settore legno: produzione, magazzino, vendite.',
    keywords: 'Info-Legno, gestionale legno, software settore legno, falegnameria, produzione legno, aziende legno',
    image: 'https://www.informatic-assistance.it/assets/images/seo/info-legno.jpg',
    url: 'https://www.informatic-assistance.it/prodotti/info-legno'
  },
  'info-surgelati': {
    title: 'Info-Surgelati - Software per Aziende Surgelate',
    description: 'Soluzione gestionale dedicata al settore alimentare e surgelati, con gestione lotti, scadenze e magazzino refrigerato.',
    keywords: 'Info-Surgelati, gestionale surgelati, software settore alimentare, aziende surgelati, gestione lotti, scadenze alimentari',
    image: 'https://www.informatic-assistance.it/assets/images/seo/info-surgelati.jpg',
    url: 'https://www.informatic-assistance.it/prodotti/info-surgelati'
  }
};
