#!/usr/bin/env bash
# openai-build.sh – Generate site via OpenAI CLI and extract files
# Usage: ./openai-build.sh
# Requires: openai CLI installed and authenticated in WSL

set -euo pipefail

OUTPUT="sito.txt"
PROMPT='Crea un sito web moderno, elegante e completamente responsive dedicato allo Spinone Italiano e al progetto di recupero gestito da Paola. Il sito deve generare tre file: index.html, style.css e script.js, con design pulito, colori naturali (beige, verde oliva, marrone chiaro), layout moderno, sezioni ben distinte, font leggibili e immagini placeholder.

CONTENUTI RICHIESTI:

1. HERO SECTION – "Saving Lives With Love"
Testo emozionale che racconta la missione: Paola da oltre 10 anni accoglie Spinoni provenienti da cacciatori e allevatori. Arrivano spesso magri, stanchi e spaventati. Con cure veterinarie, amore e pazienza ritrovano fiducia, salute e dignità.

2. SEZIONE "Meet Our Spinoni"
Mostra solo 8 storie selezionate, non tutti i cani del rifugio. Per ogni Spinone includi:
- nome
- breve storia del passato
- foto prima/dopo (placeholder)
- stato attuale (recuperato / in riabilitazione)
- messaggio positivo e rispettoso

3. SEZIONE "The Path to Recovery"
Descrivi il percorso di recupero:
- arrivo e valutazione
- cure veterinarie immediate
- test per Leishmania e Filaria
- riabilitazione emotiva
- preparazione alla vita in famiglia

4. SEZIONE "Our Commitment"
Tre colonne:
- Rescue & Comfort
- Medical Treatment
- Adoption Support

5. ARTICOLI INFORMATIVI (BLOG)
Crea 3 articoli brevi:
- Come prendersi cura di uno Spinone Italiano
- Cosa piace davvero a uno Spinone
- Come integrarlo nella vita quotidiana

6. SEZIONE DONAZIONI
Spiega come aiutare Paola: donazioni, volontariato, supporto veterinario, link Facebook.

7. FOOTER
Italian Spinone Rescue – By Paola, link rapidi, © 2026

OUTPUT:
Genera index.html, style.css e script.js con codice pulito e commentato.'

echo "Calling OpenAI API..."
openai api chat.completions.create -m gpt-4o -g "$PROMPT" > "$OUTPUT"
echo "Response saved to $OUTPUT"
echo "Review $OUTPUT and extract index.html, style.css, script.js manually or with your parser."