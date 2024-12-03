const  srb = {
    USER_NOTIFICATIONS: {
        pending: '',
        accepted: "Vaša narudžbina za taksi je prihvaćena.",
        rejected: "Vaša narudžbina za taksi je odbijena. Novi vozač će uskoro prihvatiti vaš zahtev.",
        canceled: "Vaša narudžbina za taksi je otkazana.",
        waiting: "Vaš vozač vas čeka.",
        driving: "Vaš vozač je na putu.",
        arrived: "Vaš vozač je stigao.",
        completed: "Vaša vožnja je završena. Hvala što koristite našu uslugu!",
        customerCanceled: "",
    },
    DRIVER_NOTIFICATIONS: {
        pending: "",
        accepted: "",
        rejected: "",
        canceled: "Narudžbina za taksi je otkazana.",
        waiting: "",
        driving: "",
        arrived: "Stigli ste na mesto preuzimanja.",
        completed: "",
        customerCanceled: "Kupac je otkazao narudžbinu.",
    }
}
module.exports = srb;
