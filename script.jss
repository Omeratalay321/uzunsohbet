// Tüm soruların ve yolların tanımlandığı ana obje
const questions = {
    // --- BAŞLANGIÇ: 1. Katman Giriş Sorusu ---
    "start": {
        question: "Kendini, hayatındaki en yakın 3 kişi tarafından koşulsuz sevilen biri olarak görüyor musun?",
        options: [
            { text: "Evet, kesinlikle.", next: "sevgi_detaylari_1" },
            { text: "Hayır, tam olarak değil.", next: "eksik_sevgi_kaynagi_1" }
        ]
    },

    // --- 2. Katman (Evet Kolu) ---
    "sevgi_detaylari_1": {
        question: "Harika! Bu sevgiyi en çok kimden alıyorsun?",
        options: [
            { text: "Ailemden.", next: "sevgi_aile_2" },
            { text: "Arkadaşlarımdan.", next: "sevgi_arkadas_2" }, // YENİ YOL
            { text: "Partnerimden.", next: "eksik_partner_2" } // Partner yolu da şimdilik bir son mesaja bağlandı
        ]
    },

    // --- 2. Katman (Hayır Kolu) ---
    "eksik_sevgi_kaynagi_1": {
        question: "Üzgünüm. Peki, bu eksiklik en çok hangi ilişkide seni rahatsız ediyor?",
        options: [
            { text: "Aile ilişkileri.", next: "eksik_aile_2" },
            { text: "Romantik ilişkiler.", next: "eksik_partner_2" },
            { text: "Kendi kendime olan ilişkimde.", next: "eksik_benlik_2" }
        ]
    },
    
    // =========================================================
    //               AİLE KOLU (Sevgi-Aile)
    // =========================================================
    "sevgi_aile_2": {
        question: "Ailenden gelen sevgiyi nasıl hissediyorsun? Sözlü onay mı yoksa eylemlerle mi?",
        options:
