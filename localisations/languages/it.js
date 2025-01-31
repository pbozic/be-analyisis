const it = {
    USER_NOTIFICATIONS: {
        scheduled_tomorrow: "Il tuo ordine di taxi è programmato per domani alle ",
        scheduled_hour: "Il tuo ordine di taxi è programmato per un'ora",
        pending: '',
        accepted: "Il tuo ordine di taxi è stato accettato.",
        rejected: "Il tuo ordine di taxi è stato rifiutato. Un nuovo autista accetterà la tua richiesta a breve.",
        canceled: "Il tuo ordine di taxi è stato annullato.",
        waiting: "Il tuo autista ti sta aspettando.",
        driving: "Il tuo autista è in arrivo.",
        arrived: "Il tuo autista è arrivato.",
        completed: "Il tuo viaggio è stato completato. Grazie per aver utilizzato il nostro servizio!",
        customerCanceled: "",
        vehicleTransferCompleted: "Il trasferimento del veicolo è stato completato."
    },
    DRIVER_NOTIFICATIONS: {
        offline: "Sei ora offline, per favore apri KlikniApp",
        inactive: "Sei inattivo, per favore apri KlikniApp",
        pending: "Hai un nuovo ordine di taxi.",
        accepted: "",
        rejected: "",
        canceled: "L'ordine del taxi è stato annullato.",
        waiting: "",
        driving: "",
        arrived: "Sei arrivato al punto di raccolta.",
        completed: "",
        customerCanceled: "Il cliente ha annullato l'ordine.",
    },
    DELIVERY_NOTIFICATIONS: {
        accepted: "Il tuo ordine di consegna è stato accettato.",
        ready_for_pickup: "",
        canceled: "Il tuo ordine di consegna è stato annullato.",
        delayed: "",
    },
    DELIVERY_DRIVER_NOTIFICATIONS: {
        accepted: "Hai un nuovo ordine di consegna.",
        ready_for_pickup: "L'ordine di consegna è pronto per il ritiro.",
        canceled: "L'ordine di consegna è stato annullato.",
        delayed: "L'ordine di consegna è stato ritardato dal commerciante.",
    },
    HEADING: {
        completed: 'Corsa in Taxi Completata',
        accepted: "Corsa in Taxi Accettata",
        pending: "Nuova Prenotazione Taxi",
        pending_delivery: "Nuovo ordine di consegna",
        scheduled_tomorrow: "Corsa in Taxi Programmata",
        scheduled_hour: "Corsa in Taxi Programmata",
        driver: "Autista Klikni",
        taxi: "Aggiornamento Corsa Taxi",
        delivery: "Aggiornamento Consegna",
    }
}
module.exports = it;
