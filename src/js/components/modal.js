
const agreements = {
  1: {
    title: "License Agreement — Uso personale",
    body: "Questo accordo regola l'utilizzo del software per scopi personali e non commerciali. L'utente non è autorizzato a ridistribuire, sublicenziare o modificare il codice sorgente senza previo consenso scritto."
  },
  2: {
    title: "License Agreement — Uso commerciale",
    body: "Questa licenza consente l'utilizzo del prodotto in ambienti commerciali. Ogni installazione richiede una licenza separata. È vietata la reverse engineering o la decompilazione del software."
  },
  3: {
    title: "License Agreement — Open Source",
    body: "Il software è distribuito sotto licenza MIT. È possibile utilizzare, copiare, modificare e distribuire il codice a condizione che venga mantenuto l'avviso di copyright originale in tutte le copie."
  },
  4: {
    title: "License Agreement — Enterprise",
    body: "La licenza enterprise include supporto prioritario, aggiornamenti illimitati e diritto di installazione su più macchine all'interno della stessa organizzazione. Contattare il team vendite per i dettagli."
  }
};

const overlay = document.getElementById('modal-overlay');
const titleEl = document.getElementById('modal-title');
const bodyEl = document.getElementById('modal-body');

document.querySelectorAll('.btn_agreement a').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    const id = btn.dataset.modal;
    const data = agreements[id];
    titleEl.textContent = data.title;
    bodyEl.textContent = data.body;
    overlay.classList.add('open');
  });
});

document.getElementById('modal-close-btn').addEventListener('click', () => {
  overlay.classList.remove('open');
});

// Chiude cliccando fuori dal modale
overlay.addEventListener('click', e => {
  if (e.target === overlay) overlay.classList.remove('open');
});