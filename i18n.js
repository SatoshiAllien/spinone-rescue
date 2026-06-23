/**
 * Spinone Italiano Rescue – Internationalisation (IT / EN)
 */
(function () {
  'use strict';

  var STORAGE_KEY = 'spinone-lang';

  var T = {
    it: {
      'meta.title': 'Spinone Italiano Rescue – By Paola',
      'meta.description': 'Spinone Italiano Rescue – Il rifugio di Paola. Recupero, cura e amore per lo Spinone Italiano.',
      'fb.bar.text': '<strong>Segui Paola su Facebook</strong> — adozioni, donazioni e aggiornamenti sui nostri Spinoni!',
      'fb.bar.btn': 'Clicca qui →',
      'fb.bar.close': 'Chiudi',
      'nav.open': 'Apri menu',
      'nav.close': 'Chiudi menu',
      'nav.home': 'Home',
      'nav.spinoni': 'Spinoni',
      'nav.recovery': 'Recupero',
      'nav.foto': 'Foto',
      'nav.blog': 'Guide',
      'nav.donate': 'Aiuta',
      'nav.contact': 'Contatti',
      'nav.facebook': 'Facebook',
      'lang.label': 'Lingua',
      'hero.logo.alt': 'Logo Spinone Italiano Rescue',
      'hero.eyebrow': 'Passione per lo Spinone Italiano',
      'hero.title': 'Salvare vite<br><em>con amore</em>',
      'hero.text': 'Da oltre dieci anni Paola dedica la sua vita allo Spinone Italiano — una razza nobile, sensibile, meravigliosa. Accoglie cani provenienti da cacciatori e allevamenti: arrivano stanchi, spaventati, feriti nell\'anima. Con cure veterinarie, pazienza e un amore profondo, ognuno ritrova fiducia, salute e dignità. Perché ogni Spinone merita una seconda possibilità.',
      'hero.btn.spinoni': 'I nostri Spinoni',
      'hero.btn.facebook': 'Contatta Paola su Facebook',
      'fb.banner.badge': 'Resta con noi',
      'fb.banner.title': 'Unisciti alla famiglia degli amanti dello Spinone',
      'fb.banner.text': 'Segui Paola su Facebook per adozioni, storie e aggiornamenti dai campi.',
      'fb.banner.btn': 'Vai al profilo Facebook',
      'spinoni.label': 'Storie di speranza',
      'spinoni.title': 'I nostri Spinoni',
      'spinoni.desc': 'Otto storie di coraggio e seconda possibilità. Ogni cane merita di essere raccontato con rispetto e amore.',
      'spinoni.before': 'Prima',
      'spinoni.after': 'Dopo',
      'spinoni.badge.recovered': 'Recuperato',
      'spinoni.badge.rehab': 'In riabilitazione',
      'spinoni.bruno.past': 'Trovato incatenato in un cortile, sottopeso e diffidente verso ogni contatto umano.',
      'spinoni.bruno.msg': 'Oggi Bruno cammina sicuro accanto a Paola, accogliendo i visitatori con una dolce carezza. I suoi occhi brillano di nuovo.',
      'spinoni.luna.past': 'Consegnata dopo anni di riproduzione, terrorizzata dai rumori forti e dai movimenti improvvisi.',
      'spinoni.luna.msg': 'Luna sta imparando che le mani possono offrire conforto, non paura. Ogni piccolo passo avanti è una vittoria.',
      'spinoni.arturo.past': 'Arrivato con una grave infezione cutanea e profonda diffidenza dopo la vita da cane da caccia.',
      'spinoni.arturo.msg': 'Arturo ora ama le lunghe passeggiate nei campi — la sua vera casa. Ha trovato una famiglia per sempre.',
      'spinoni.giada.past': 'Scoperta denutrita in un canile, si nascondeva negli angoli a ogni avvicinamento.',
      'spinoni.giada.msg': 'Giada emerge lentamente dal suo guscio. Ora accetta premietti e cerca compagnia tranquilla.',
      'spinoni.marco.past': 'Abbandonato quando non era più utile per la caccia, zoppicante e chiuso emotivamente.',
      'spinoni.marco.msg': 'Dopo un intervento chirurgico e mesi di cure, Marco corre di nuovo libero. La gioia è tornata nel suo passo.',
      'spinoni.sofia.past': 'Proveniente da una struttura sovraffollata, ansiosa e incapace di riposare in pace.',
      'spinoni.sofia.msg': 'Sofia dorme sonni tranquilli per la prima volta. Scopre il ritmo calmo di una casa sicura.',
      'spinoni.enzo.past': 'Salvato all\'età di otto anni, con cicatrici da trascuratezza e otiti non curate.',
      'spinoni.enzo.msg': 'Enzo dimostra che non è mai troppo tardi. Accoglie ogni mattina con gratitudine e calore.',
      'spinoni.stella.past': 'Una giovane Spinone che non ha mai conosciuto gentilezza, sussultando al minimo rumore.',
      'spinoni.stella.msg': 'La coda di Stella scodinzola in brevi, preziosi momenti. La speranza cresce ogni giorno gentile.',
      'recovery.label': 'Cura e riabilitazione',
      'recovery.title': 'Il percorso di recupero',
      'recovery.desc': 'Ogni Spinone segue un cammino di cura, pazienza e fiducia — dall\'arrivo alla vita in famiglia.',
      'recovery.s1.title': 'Arrivo e valutazione',
      'recovery.s1.text': 'Ogni cane viene accolto con calma. Osserviamo il comportamento, le ferite e creiamo un piano di cura personalizzato dal primo giorno.',
      'recovery.s2.title': 'Cure veterinarie immediate',
      'recovery.s2.text': 'Le ferite vengono curate, l\'alimentazione ripristinata e i bisogni medici urgenti affrontati senza ritardo.',
      'recovery.s3.title': 'Test Leishmania e Filaria',
      'recovery.s3.text': 'Screening completo per Leishmania e filaria per garantire a ogni cane il trattamento appropriato.',
      'recovery.s4.title': 'Riabilitazione emotiva',
      'recovery.s4.text': 'Attraverso routine, esposizione graduale e pazienza, i cani spaventati imparano che il mondo può essere sicuro.',
      'recovery.s5.title': 'Preparazione alla vita in famiglia',
      'recovery.s5.text': 'Socializzazione, addestramento al guinzaglio e visite domestiche preparano ogni Spinone all\'adozione.',
      'commitment.label': 'La missione di Paola',
      'commitment.title': 'Il nostro impegno',
      'commitment.desc': 'Tre pilastri guidano ogni giorno il lavoro di Paola per ogni Spinone che accoglie.',
      'commitment.c1.title': 'Salvataggio e conforto',
      'commitment.c1.text': 'Offriamo riparo immediato, calore e sicurezza emotiva. Nessun cane viene dimenticato — ognuno è visto, nominato e valorizzato dal primo momento.',
      'commitment.c2.title': 'Cure mediche',
      'commitment.c2.text': 'Dalle vaccinazioni alla chirurgia, dalle patologie croniche al benessere quotidiano — ogni Spinone riceve le cure necessarie, per tutto il tempo che serve.',
      'commitment.c3.title': 'Supporto all\'adozione',
      'commitment.c3.text': 'Abbiniamo i cani alle famiglie con cura e restiamo disponibili dopo l\'adozione. Il nostro obiettivo sono legami duraturi e felici.',
      'foto.label': 'Vita al rifugio',
      'foto.title': 'Album Foto',
      'foto.desc': 'Momenti autentici di recupero, affetto e quotidianità con Paola e i suoi amati Spinoni.',
      'foto.filter.all': 'Tutte',
      'foto.filter.paola': 'Paola & cani',
      'foto.filter.spinoni': 'I nostri Spinoni',
      'foto.filter.cure': 'Recupero & cure',
      'foto.filter.label': 'Filtra album foto',
      'foto.count': '{n} foto',
      'foto.count.one': '1 foto',
      'blog.label': 'Per gli amanti dello Spinone',
      'blog.title': 'Guide utili',
      'blog.desc': 'Consigli pratici per chi ama, accoglie o convive con uno Spinone Italiano.',
      'blog.a1.title': 'Come prendersi cura di uno Spinone Italiano',
      'blog.a1.text': 'Il mantello irsuto dello Spinone richiede spazzolatura regolare, soprattutto barba e zampe. Controlla le orecchie settimanalmente. Dieta equilibrata e esercizio quotidiano. Rispondi alla sua natura sensibile con costanza e gentilezza.',
      'blog.a2.title': 'Cosa ama davvero uno Spinone',
      'blog.a2.text': 'Giganti gentili dal temperamento calmo e affettuoso. Amano la compagnia e non sopportano di restare soli a lungo. Adorano passeggiate, nuoto ed esplorazione, ma sono felici anche accanto alla famiglia.',
      'blog.a3.title': 'Integrare uno Spinone nella vita di famiglia',
      'blog.a3.text': 'Introduci lentamente uno Spinone salvato: spazi tranquilli, routine prevedibili, presentazioni delicate. Coinvolgi tutta la famiglia. Sii paziente — il passato difficile richiede tempo. La ricompensa è un compagno leale e amorevole.',
      'blog.readmore': 'Leggi di più',
      'donate.label': 'Sostieni il progetto',
      'donate.title': 'Come puoi aiutare',
      'donate.desc': 'Il lavoro di Paola vive grazie a chi crede che ogni Spinone meriti dignità e una vita felice.',
      'donate.c1.title': 'Donazioni',
      'donate.c1.text': 'Ogni contributo copre cibo, medicine, spese veterinarie e miglioramenti del rifugio. Nessuna somma è troppo piccola — tutto va direttamente ai cani.',
      'donate.c2.title': 'Volontariato',
      'donate.c2.text': 'Aiuta con passeggiate, toelettatura, trasporti dal veterinario o semplicemente trascorrendo tempo tranquillo con i cani.',
      'donate.c3.title': 'Supporto veterinario',
      'donate.c3.text': 'Veterinari e cliniche che offrono servizi scontati o donazioni di materiali fanno un\'enorme differenza.',
      'donate.c4.title': 'Contattaci',
      'donate.c4.text': 'Scrivi a Paola su Facebook per adozioni, donazioni, volontariato o semplicemente per incoraggiarla.',
      'donate.c4.btn': 'Contatta Paola su Facebook',
      'footer.title': 'Spinone Italiano Rescue – By Paola',
      'footer.tagline': 'Salvare vite con amore, uno Spinone alla volta.',
      'footer.contact.title': 'Contatti',
      'footer.contact.text': 'Scrivi a Paola per adozioni, donazioni o volontariato.',
      'footer.contact.btn': 'Facebook – Paola',
      'footer.nav.home': 'Home',
      'footer.nav.spinoni': 'Spinoni',
      'footer.nav.recovery': 'Recupero',
      'footer.nav.foto': 'Album Foto',
      'footer.nav.contact': 'Contatti',
      'footer.copy': '© 2026 Spinone Italiano Rescue. Tutti i diritti riservati.',
      'fb.float.label': 'Facebook',
      'fb.float.aria': 'Contatta Paola su Facebook',
      'lightbox.aria': 'Visualizzatore foto',
      'lightbox.close': 'Chiudi foto',
      'lightbox.prev': 'Foto precedente',
      'lightbox.next': 'Foto successiva'
    },
    en: {
      'meta.title': 'Italian Spinone Rescue – By Paola',
      'meta.description': 'Italian Spinone Rescue – Paola\'s shelter. Rescue, care and love for the Italian Spinone.',
      'fb.bar.text': '<strong>Follow Paola on Facebook</strong> — adoptions, donations and updates about our Spinoni!',
      'fb.bar.btn': 'Click here →',
      'fb.bar.close': 'Close',
      'nav.open': 'Open menu',
      'nav.close': 'Close menu',
      'nav.home': 'Home',
      'nav.spinoni': 'Our Spinoni',
      'nav.recovery': 'Recovery',
      'nav.foto': 'Photos',
      'nav.blog': 'Guides',
      'nav.donate': 'Help',
      'nav.contact': 'Contact',
      'nav.facebook': 'Facebook',
      'lang.label': 'Language',
      'hero.logo.alt': 'Italian Spinone Rescue logo',
      'hero.eyebrow': 'Passion for the Italian Spinone',
      'hero.title': 'Saving lives<br><em>with love</em>',
      'hero.text': 'For over ten years Paola has dedicated her life to the Italian Spinone — a noble, sensitive, wonderful breed. She welcomes dogs from hunters and breeders: they arrive tired, frightened, wounded in spirit. With veterinary care, patience and deep love, each one rediscovers trust, health and dignity. Because every Spinone deserves a second chance.',
      'hero.btn.spinoni': 'Meet Our Spinoni',
      'hero.btn.facebook': 'Contact Paola on Facebook',
      'fb.banner.badge': 'Stay with us',
      'fb.banner.title': 'Join the family of Spinone lovers',
      'fb.banner.text': 'Follow Paola on Facebook for adoptions, stories and updates from the fields.',
      'fb.banner.btn': 'Go to Facebook profile',
      'spinoni.label': 'Stories of hope',
      'spinoni.title': 'Our Spinoni',
      'spinoni.desc': 'Eight stories of courage and second chances. Every dog deserves to be told with respect and love.',
      'spinoni.before': 'Before',
      'spinoni.after': 'After',
      'spinoni.badge.recovered': 'Recovered',
      'spinoni.badge.rehab': 'In rehabilitation',
      'spinoni.bruno.past': 'Found chained in a yard, underweight and wary of every human touch.',
      'spinoni.bruno.msg': 'Today Bruno walks confidently beside Paola, greeting visitors with a gentle nuzzle. His eyes finally shine.',
      'spinoni.luna.past': 'Surrendered after years of breeding, terrified of loud sounds and sudden movements.',
      'spinoni.luna.msg': 'Luna is learning that hands can offer comfort, not fear. Each small step forward is celebrated.',
      'spinoni.arturo.past': 'Arrived with a severe skin infection and deep mistrust after life as a hunting dog.',
      'spinoni.arturo.msg': 'Arturo now enjoys long walks in the fields — his true home. He has found a forever family.',
      'spinoni.giada.past': 'Discovered malnourished in a kennel, hiding in corners whenever someone approached.',
      'spinoni.giada.msg': 'Giada is slowly emerging from her shell. She now accepts treats and seeks quiet companionship.',
      'spinoni.marco.past': 'Left behind when no longer useful for hunting, limping and emotionally shut down.',
      'spinoni.marco.msg': 'After surgery and months of care, Marco runs freely again. Joy has returned to his stride.',
      'spinoni.sofia.past': 'Came from an overcrowded facility, anxious and unable to rest peacefully.',
      'spinoni.sofia.msg': 'Sofia sleeps soundly now for the first time. She is discovering the calm rhythm of a safe home.',
      'spinoni.enzo.past': 'Rescued at age eight, bearing scars from neglect and untreated ear infections.',
      'spinoni.enzo.msg': 'Enzo proves that it is never too late. He greets each morning with quiet gratitude and warmth.',
      'spinoni.stella.past': 'A young Spinone who never knew kindness, flinching at the slightest sound.',
      'spinoni.stella.msg': 'Stella\'s tail now wags in brief, precious moments. Hope grows with every gentle day.',
      'recovery.label': 'Care & rehabilitation',
      'recovery.title': 'The path to recovery',
      'recovery.desc': 'Every Spinone follows a journey of care, patience and trust — from arrival to family life.',
      'recovery.s1.title': 'Arrival & assessment',
      'recovery.s1.text': 'Each dog is welcomed calmly. We observe behaviour, note injuries, and create a personalised care plan from day one.',
      'recovery.s2.title': 'Immediate veterinary care',
      'recovery.s2.text': 'Wounds are treated, nutrition is restored, and urgent medical needs are addressed without delay.',
      'recovery.s3.title': 'Leishmania & Filaria testing',
      'recovery.s3.text': 'Comprehensive screening for Leishmania and heartworm ensures every dog receives appropriate treatment.',
      'recovery.s4.title': 'Emotional rehabilitation',
      'recovery.s4.text': 'Through routine, gentle exposure, and patience, frightened dogs learn that the world can be safe and kind.',
      'recovery.s5.title': 'Preparing for family life',
      'recovery.s5.text': 'Socialisation, leash training, and home visits prepare each Spinone for adoption into a loving forever home.',
      'commitment.label': 'Paola\'s mission',
      'commitment.title': 'Our commitment',
      'commitment.desc': 'Three pillars guide Paola\'s daily work for every Spinone she welcomes.',
      'commitment.c1.title': 'Rescue & comfort',
      'commitment.c1.text': 'We provide immediate shelter, warmth, and emotional safety. No dog arrives only to be forgotten — each one is seen, named, and valued from the first moment.',
      'commitment.c2.title': 'Medical treatment',
      'commitment.c2.text': 'From vaccinations to surgery, from chronic conditions to routine wellness — every Spinone receives the veterinary care they need, for as long as it takes.',
      'commitment.c3.title': 'Adoption support',
      'commitment.c3.text': 'We match dogs with families carefully and stay available after adoption. Our goal is lasting, happy bonds — not just a quick placement.',
      'foto.label': 'Life at the shelter',
      'foto.title': 'Photo Album',
      'foto.desc': 'Authentic moments of recovery, affection and daily life with Paola and her beloved Spinoni.',
      'foto.filter.all': 'All',
      'foto.filter.paola': 'Paola & dogs',
      'foto.filter.spinoni': 'Our Spinoni',
      'foto.filter.cure': 'Recovery & care',
      'foto.filter.label': 'Filter photo album',
      'foto.count': '{n} photos',
      'foto.count.one': '1 photo',
      'blog.label': 'For Spinone lovers',
      'blog.title': 'Helpful guides',
      'blog.desc': 'Practical advice for anyone who loves, welcomes or lives with an Italian Spinone.',
      'blog.a1.title': 'How to care for an Italian Spinone',
      'blog.a1.text': 'The Spinone\'s wiry coat needs regular brushing, especially around the beard and paws. Check ears weekly. A balanced diet and daily exercise keep this active breed healthy. Respond to their sensitive nature with consistency and kindness.',
      'blog.a2.title': 'What a Spinone truly loves',
      'blog.a2.text': 'Gentle giants with a calm, affectionate temperament. They thrive on companionship and dislike being left alone. They love outdoor adventures but are equally content lounging beside their family.',
      'blog.a3.title': 'Integrating a Spinone into family life',
      'blog.a3.text': 'Introduce a rescued Spinone slowly: quiet spaces, predictable routines, gentle introductions. Involve the whole family. Be patient with setbacks — the reward is a loyal, loving companion.',
      'blog.readmore': 'Read more',
      'donate.label': 'Support the project',
      'donate.title': 'How you can help',
      'donate.desc': 'Paola\'s work lives thanks to those who believe every Spinone deserves dignity and a happy life.',
      'donate.c1.title': 'Donations',
      'donate.c1.text': 'Every contribution covers food, medicine, veterinary bills, and shelter improvements. No amount is too small — it all goes directly to the dogs.',
      'donate.c2.title': 'Volunteering',
      'donate.c2.text': 'Help with walks, grooming, transport to vet appointments, or simply spending quiet time with dogs who need human connection.',
      'donate.c3.title': 'Veterinary support',
      'donate.c3.text': 'Veterinarians and clinics willing to offer discounted services or donations of supplies make an enormous difference.',
      'donate.c4.title': 'Get in touch',
      'donate.c4.text': 'Reach Paola directly through Facebook for adoptions, donations, volunteering, or simply to send encouragement.',
      'donate.c4.btn': 'Contact Paola on Facebook',
      'footer.title': 'Italian Spinone Rescue – By Paola',
      'footer.tagline': 'Saving lives with love, one Spinone at a time.',
      'footer.contact.title': 'Contact',
      'footer.contact.text': 'Write to Paola for adoptions, donations or volunteering.',
      'footer.contact.btn': 'Facebook – Paola',
      'footer.nav.home': 'Home',
      'footer.nav.spinoni': 'Our Spinoni',
      'footer.nav.recovery': 'Recovery',
      'footer.nav.foto': 'Photo Album',
      'footer.nav.contact': 'Contact',
      'footer.copy': '© 2026 Italian Spinone Rescue. All rights reserved.',
      'fb.float.label': 'Facebook',
      'fb.float.aria': 'Contact Paola on Facebook',
      'lightbox.aria': 'Photo viewer',
      'lightbox.close': 'Close photo',
      'lightbox.prev': 'Previous photo',
      'lightbox.next': 'Next photo'
    }
  };

  /* Photo translations keyed by data-photo id */
  var PHOTOS = {
    p07: { it: { caption: 'Paola con un gruppo di Spinoni Italiani nel giardino del rifugio', alt: 'Paola circondata da diversi Spinoni Italiani in un\'area verde', overlay: 'Paola con i suoi Spinoni' }, en: { caption: 'Paola with a group of Italian Spinoni in the shelter garden', alt: 'Paola surrounded by several Italian Spinoni in a green area', overlay: 'Paola with her Spinoni' } },

    p02: { it: { caption: 'Un momento di affetto tra Paola e uno dei cani del rifugio', alt: 'Paola che bacia affettuosamente uno Spinone Italiano', overlay: 'Affetto e fiducia' }, en: { caption: 'A moment of affection between Paola and one of the shelter dogs', alt: 'Paola affectionately kissing an Italian Spinone', overlay: 'Affection & trust' } },
    p03: { it: { caption: 'Paola con i Spinoni durante la riabilitazione emotiva nel giardino', alt: 'Paola seduta sull\'erba con diversi Spinoni Italiani nel giardino', overlay: 'Nel giardino' }, en: { caption: 'Paola with the Spinoni during emotional rehabilitation in the garden', alt: 'Paola sitting on the grass with several Italian Spinoni', overlay: 'In the garden' } },
    p04: { it: { caption: 'Paola nel parco con i cani durante una giornata di socializzazione', alt: 'Paola seduta sull\'erba circondata da Spinoni Italiani in un parco', overlay: 'Socializzazione' }, en: { caption: 'Paola in the park with the dogs during a socialisation day', alt: 'Paola sitting on the grass surrounded by Italian Spinoni', overlay: 'Socialisation' } },
    p05: { it: { caption: 'Un momento di conforto: Paola abbraccia uno Spinone bianco', alt: 'Paola abbraccia affettuosamente un grande Spinone Italiano bianco', overlay: 'Un abbraccio speciale' }, en: { caption: 'A comforting moment: Paola hugs a white Spinone', alt: 'Paola affectionately hugging a large white Italian Spinone', overlay: 'A special hug' } },
    p06: { it: { caption: 'Paola con i cani durante un momento di cura quotidiana', alt: 'Paola interagisce con diversi Spinoni Italiani sull\'erba', overlay: 'Cura quotidiana' }, en: { caption: 'Paola with the dogs during daily care', alt: 'Paola interacting with several Italian Spinoni on the grass', overlay: 'Daily care' } },
    p08: { it: { caption: 'Paola sotto l\'albero con i suoi Spinoni in un ambiente naturale', alt: 'Paola appoggiata a un albero mentre accarezza i Spinoni Italiani', overlay: 'Sotto l\'albero' }, en: { caption: 'Paola under the tree with her Spinoni in a natural setting', alt: 'Paola leaning against a tree petting Italian Spinoni', overlay: 'Under the tree' } },
    p09: { it: { caption: 'Paola nell\'area verde del progetto di recupero', alt: 'Paola inginocchiata sull\'erba con un gruppo di Spinoni Italiani', overlay: 'Area verde' }, en: { caption: 'Paola in the green area of the recovery project', alt: 'Paola kneeling on the grass with a group of Italian Spinoni', overlay: 'Green area' } },
    p10: { it: { caption: 'Paola seduta sull\'erba, circondata dai suoi Spinoni in un momento di serenità', alt: 'Paola seduta sull\'erba circondata dai suoi Spinoni Italiani', overlay: 'Momenti di serenità' }, en: { caption: 'Paola sitting on the grass, surrounded by her Spinoni in a peaceful moment', alt: 'Paola sitting on the grass surrounded by her Italian Spinoni', overlay: 'Moments of serenity' } },
    p11: { it: { caption: 'Paola abbraccia e accarezza i suoi Spinoni in un\'area verde del rifugio', alt: 'Paola inginocchiata sull\'erba con cinque Spinoni Italiani', overlay: 'Legame e fiducia' }, en: { caption: 'Paola hugging and petting her Spinoni in the shelter\'s green area', alt: 'Paola kneeling on the grass with five Italian Spinoni', overlay: 'Bond & trust' } },
    p12: { it: { caption: 'Paola nel parco con i cani, sotto un grande albero', alt: 'Paola seduta sull\'erba circondata da Spinoni Italiani vicino a un albero', overlay: 'Giornata al parco' }, en: { caption: 'Paola in the park with the dogs, under a large tree', alt: 'Paola on the grass surrounded by Italian Spinoni near a tree', overlay: 'Day at the park' } },
    p13: { it: { caption: 'Un momento di affetto: Paola bacia uno Spinone circondata dagli altri cani', alt: 'Paola che bacia uno Spinone Italiano circondata da altri cani', overlay: 'Cura emotiva' }, en: { caption: 'A moment of affection: Paola kisses a Spinone surrounded by other dogs', alt: 'Paola kissing an Italian Spinone surrounded by other dogs', overlay: 'Emotional care' } },
    p14: { it: { caption: 'Paola gioca e abbraccia due Spinoni in un\'area verde', alt: 'Paola che abbraccia due Spinoni Italiani sull\'erba', overlay: 'Gioco e affetto' }, en: { caption: 'Paola playing and hugging two Spinoni in a green area', alt: 'Paola hugging two Italian Spinoni on the grass', overlay: 'Play & affection' } },
    p15: { it: { caption: 'Paola circondata dai suoi Spinoni durante un momento di socializzazione', alt: 'Paola inginocchiata tra diversi Spinoni Italiani che la circondano', overlay: 'Insieme' }, en: { caption: 'Paola surrounded by her Spinoni during socialisation', alt: 'Paola kneeling among several Italian Spinoni', overlay: 'Together' } },
    p16: { it: { caption: 'Paola con un gruppo di Spinoni felici durante un\'uscita all\'aperto', alt: 'Paola inginocchiata in un parco con un gruppo di Spinoni Italiani', overlay: 'Uscita di gruppo' }, en: { caption: 'Paola with a happy group of Spinoni on an outdoor outing', alt: 'Paola kneeling in a park with a group of Italian Spinoni', overlay: 'Group outing' } },
    p17: { it: { caption: 'Paola bacia e abbraccia uno Spinone in un momento di tenerezza', alt: 'Paola che bacia uno Spinone Italiano in un\'area verde', overlay: 'Tenerezza' }, en: { caption: 'Paola kissing and hugging a Spinone in a tender moment', alt: 'Paola kissing an Italian Spinone in a green area', overlay: 'Tenderness' } },
    p18: { it: { caption: 'Primo piano di uno Spinone bianco durante le cure quotidiane', alt: 'Primo piano di uno Spinone Italiano bianco con occhi azzurri', overlay: 'Uno dei nostri' }, en: { caption: 'Close-up of a white Spinone during daily care', alt: 'Close-up of a white Italian Spinone with blue eyes', overlay: 'One of ours' } },
    p19: { it: { caption: 'Uno Spinone durante una visita veterinaria — cure mediche e attenzione', alt: 'Spinone Italiano bianco con guinzaglio verde durante una visita dal veterinario', overlay: 'Cure veterinarie' }, en: { caption: 'A Spinone during a veterinary visit — medical care and attention', alt: 'White Italian Spinone with green leash at the vet', overlay: 'Veterinary care' } }
  };

  var currentLang = 'it';

  function t(key) {
    var pack = T[currentLang] || T.it;
    return pack[key] !== undefined ? pack[key] : (T.it[key] || key);
  }

  function applyTranslations() {
    document.documentElement.lang = currentLang;
    document.title = t('meta.title');

    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', t('meta.description'));

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var value = t(key);
      /* Preserve SVG/img icons inside parent buttons */
      if (el.querySelector('svg, img')) {
        var label = el.querySelector('[data-i18n-label]') || el.querySelector('span:not(.fb-float__pulse)');
        if (label) {
          label.textContent = value;
          return;
        }
      }
      el.textContent = value;
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      el.innerHTML = t(el.getAttribute('data-i18n-html'));
    });

    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria')));
    });

    document.querySelectorAll('[data-photo]').forEach(function (trigger) {
      var id = trigger.getAttribute('data-photo');
      var photo = PHOTOS[id];
      if (!photo) return;
      var data = photo[currentLang] || photo.it;
      trigger.setAttribute('data-caption', data.caption);
      var img = trigger.querySelector('img');
      if (img) img.setAttribute('alt', data.alt);
      var overlay = trigger.querySelector('.foto__caption');
      if (overlay) overlay.textContent = data.overlay;
    });

    document.querySelectorAll('.lang-switch__btn').forEach(function (btn) {
      btn.classList.toggle('lang-switch__btn--active', btn.getAttribute('data-lang') === currentLang);
      btn.setAttribute('aria-pressed', btn.getAttribute('data-lang') === currentLang ? 'true' : 'false');
    });

    if (window.SpinoneApp && window.SpinoneApp.onLanguageChange) {
      window.SpinoneApp.onLanguageChange(currentLang);
    }
  }

  function setLanguage(lang) {
    if (!T[lang]) return;
    currentLang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    applyTranslations();
  }

  function init() {
    var saved = localStorage.getItem(STORAGE_KEY);
    var browser = (navigator.language || '').slice(0, 2);
    if (saved && T[saved]) {
      currentLang = saved;
    } else if (T[browser]) {
      currentLang = browser;
    }

    document.querySelectorAll('.lang-switch__btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        setLanguage(btn.getAttribute('data-lang'));
      });
    });

    applyTranslations();
  }

  window.SpinoneI18n = {
    t: t,
    getLang: function () { return currentLang; },
    setLanguage: setLanguage,
    applyTranslations: applyTranslations
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();