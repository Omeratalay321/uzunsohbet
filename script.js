// Tüm soruların ve yolların tanımlandığı ana obje (Nihai ve Eksiksiz Hali)
const questions = {
    // ---------------------------------------------------------
    // 1. KATMAN: BAŞLANGIÇ
    // ---------------------------------------------------------
    "start": {
        question: "Kendini, hayatındaki en yakın 3 kişi tarafından koşulsuz sevilen biri olarak görüyor musun?",
        options: [
            { text: "Evet, kesinlikle.", next: "sevgi_detaylari_2" },
            { text: "Hayır, tam olarak değil.", next: "eksik_sevgi_kaynagi_2" }
        ]
    },

    // ---------------------------------------------------------
    // 2. KATMAN: KAYNAK SEÇİMİ
    // ---------------------------------------------------------
    "sevgi_detaylari_2": {
        question: "Harika! Bu hissi aldığın en önemli üç kaynak (kişi/grup) nedir?",
        options: [
            { text: "Ailem.", next: "sevgi_aile_3" },
            { text: "Arkadaş çevrem.", next: "sevgi_arkadas_3" },
            { text: "Partnerim / Romantik ilişkim.", next: "sevgi_partner_3" }
        ]
    },

    "eksik_sevgi_kaynagi_2": {
        question: "Üzgünüm. Bu eksiklik hissi, en çok hangi alanda kendini gösteriyor?",
        options: [
            { text: "Ailemden gelen sevgide.", next: "eksik_aile_3" },
            { text: "Kendi kendimi kabul edişimde.", next: "eksik_benlik_3" },
            { text: "Romantik bir ilişkide olma isteğinde.", next: "eksik_partner_3" }
        ]
    },

    // =========================================================
    //               AİLE KOLU ZİNCİRİ (5. Katmana Kadar Uzatıldı)
    // =========================================================
    "sevgi_aile_3": {
        question: "Ailenden gelen sevgiyi en çok hangi yolla (Sevgi Dili) hissediyorsun?",
        options: [
            { text: "Bana söylenen takdir sözleriyle.", next: "aile_sozlu_4a" }, 
            { text: "Bana ayrılan kaliteli zamanla.", next: "aile_zaman_4b" } 
        ]
    },
    "aile_sozlu_4a": {
        question: "Ailenin sözleri sana ilham veriyor mu, yoksa sadece sorumluluk yüklüyor mu?",
        options: [
            { text: "Motive ediyor ve ilham veriyorlar.", next: "aile_sozlu_5a" },
            { text: "Bazen baskı hissediyorum.", next: "aile_zaman_5b" }
        ]
    },
    "aile_zaman_4b": {
        question: "Bu zamanı birlikte geçirme şekliniz, gerçekten 'kaliteli' mi, yoksa sadece aynı ortamda bulunmak mı?",
        options: [
            { text: "Birlikteyken telefondan uzak durulur, anlamlıdır.", next: "aile_sozlu_5a" }, 
            { text: "Çoğunlukla herkes kendi işine bakar.", next: "aile_zaman_5b" }
        ]
    },
    "aile_sozlu_5a": {
        question: "Peki bu pozitifliği kendi hayatına nasıl yansıtıyorsun? Başkalarını da kolayca takdir ediyor musun?",
        options: [
            { text: "Evet, ben de takdir etmeyi seviyorum.", next: "son_tavsiye_pozitif" },
            { text: "Hayır, bu yönüm zayıf.", next: "son_tavsiye_akis" }
        ]
    },
    "aile_zaman_5b": {
        question: "Ailenden aldığın sevgiye rağmen hissettiğin bu baskı/yüzeyellik, sence seni nasıl bir ilişki kurmaya itiyor?",
        options: [
            { text: "Kendimi kanıtlama ihtiyacı hissediyorum.", next: "son_tavsiye_degisim" },
            { text: "Duygusuz biri olmaktan korkuyorum.", next: "son_tavsiye_akis" }
        ]
    },
    
    // =========================================================
    //               ARKADAŞ KOLU ZİNCİRİ (5. Katmana Kadar Uzatıldı)
    // =========================================================
    "sevgi_arkadas_3": {
        question: "Arkadaşlarının senin için önceliği nedir? Eğlence mi, zor zamanlar mı?",
        options: [
            { text: "Birlikte eğlenmek ve anı yaşamak.", next: "arkadas_eglence_4" }, 
            { text: "Kötü günde ilk aradığım kişi olmaları.", next: "arkadas_zorluk_4" } 
        ]
    },
    "arkadas_eglence_4": {
        question: "E
