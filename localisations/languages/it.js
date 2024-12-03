const it = {
    USER_NOTIFICATIONS: {
        pending: '',
        accepted: "Il tuo ordine di taxi è stato accettato.",
        rejected: "Il tuo ordine di taxi è stato rifiutato. Un nuovo autista accetterà la tua richiesta a breve.",
        canceled: "Il tuo ordine di taxi è stato annullato.",
        waiting: "Il tuo autista ti sta aspettando.",
        driving: "Il tuo autista è in arrivo.",
        arrived: "Il tuo autista è arrivato.",
        completed: "Il tuo viaggio è stato completato. Grazie per aver utilizzato il nostro servizio!",
        customerCanceled: "",
    },
    DRIVER_NOTIFICATIONS: {
        pending: "",
        accepted: "",
        rejected: "",
        canceled: "L'ordine del taxi è stato annullato.",
        waiting: "",
        driving: "",
        arrived: "Sei arrivato al punto di raccolta.",
        completed: "",
        customerCanceled: "Il cliente ha annullato l'ordine.",
    }
}
module.exports = it;
