// Tüm soruların ve yolların tanımlandığı ana obje
const questions = {
    // ---------------------------------------------------------
    // 1. KATMAN: BAŞLANGIÇ
    // ---------------------------------------------------------
    "start": {
        question: "Kendini, hayatındaki en yakın 3 kişi tarafından koşulsuz sevilen biri olarak görüyor musun?",
        options: [
            { text: "Evet, kesinlikle.", next: "sevgi_detaylari_2" }, // 2. Katman
            { text: "Hayır, tam olarak değil.", next: "eksik_sevgi_kaynagi_2" } // 2. Katman
        ]
    },

    // ---------------------------------------------------------
    // 2. KATMAN: KAYNAK SEÇİMİ
    // ---------------------------------------------------------
    "sevgi_detaylari_2": {
        question: "Harika! Bu hissi aldığın en önemli üç kaynak (kişi/grup) nedir?",
        options: [
            { text: "Ailem.", next: "sevgi_aile_3" }, // 3. Katman Aile
            { text: "Arkadaş çevrem.", next: "sevgi_arkadas_3" }, // 3. Katman Arkadaş
            { text: "Partnerim / Romantik ilişkim.", next: "sevgi_partner_3" } // 3. Katman Partner
        ]
    },

    "eksik_sevgi_kaynagi_2": {
        question: "Üzgünüm. Bu eksiklik hissi, en çok hangi alanda kendini gösteriyor?",
        options: [
            { text: "Ailemden gelen sevgide.", next: "eksik_aile_3" }, // 3. Katman Eksik Aile
            { text: "Kendi kendimi kabul edişimde.", next: "eksik_benlik_3" }, // 3. Katman Eksik Benlik
            { text: "Romantik bir ilişkide olma isteğinde.", next: "eksik_partner_3" } // 3. Katman Eksik Partner
        ]
    },

    // =========================================================
    //               AİLE KOLU ZİNCİRİ (Mutlu başlangıç)
    // =========================================================
    "sevgi_aile_3": {
        question: "Ailenden gelen sevgiyi en çok hangi yolla (Sevgi Dili) hissediyorsun?",
        options: [
            { text: "Bana söylenen takdir sözleriyle.", next: "aile_sozlu_4a" }, 
            { text: "Bana ayrılan kaliteli zamanla.", next: "aile_zaman_4b" } 
        ]
    },
    
    // 4. Katman Aile Alt Kolları
    "aile_sozlu_4a": {
        question: "Ailenin sözleri sana ilham veriyor mu, yoksa sadece sorumluluk yüklüyor mu?",
        options: [
            { text: "Motive ediyor ve ilham veriyorlar.", next: "aile_sozlu_5a" }, // 5. Katman
            { text: "Bazen baskı hissediyorum.", next: "aile_zaman_5b" }  // 5. Katman
        ]
    },
    "aile_zaman_4b": {
        question: "Bu zamanı birlikte geçirme şekliniz, gerçekten 'kaliteli' mi, yoksa sadece aynı ortamda bulunmak mı?",
        options: [
            { text: "Birlikteyken telefondan uzak durulur, anlamlıdır.", next: "aile_sozlu_5a" }, 
            { text: "Çoğunlukla herkes kendi işine bakar.", next: "aile_zaman_5b" }      
        ]
    },
    // 5. Katman Aile Alt Kolları
    "aile_sozlu_5a": {
        question: "Peki bu pozitifliği kendi hayatına nasıl yansıtıyorsun? Başkalarını da kolayca takdir ediyor musun?",
        options: [
            { text: "Evet, ben de takdir etmeyi seviyorum.", next: "son_tavsiye_pozitif" }, // Sonuç
            { text: "Hayır, bu yönüm zayıf.", next: "son_tavsiye_akis" }  // Sonuç
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
    //               ARKADAŞ KOLU ZİNCİRİ (Mutlu başlangıç)
    // =========================================================
    "sevgi_arkadas_3": {
        question: "Arkadaşlarının senin için önceliği nedir? Eğlence mi, zor zamanlar mı?",
        options: [
            { text: "Birlikte eğlenmek ve anı yaşamak.", next: "arkadas_eglence_4" }, 
            { text: "Kötü günde ilk aradığım kişi olmaları.", next: "arkadas_zorluk_4" } 
        ]
    },

    // 4. Katman Arkadaş Alt Kolları
    "arkadas_eglence_4": {
        question: "Eğlence bittiğinde aranızdaki bağ da bitiyor mu? Yoksa ortak hayalleriniz var mı?",
        options: [
            { text: "Ortak gelecek planlarımız var.", next: "son_tavsiye_pozitif" }, 
            { text: "Sadece anlık bir ilişki gibi.", next: "son_tavsiye_akis" }  
        ]
    },

    "arkadas_zorluk_4": {
        question: "Zor zamanında yanındalar, peki sen de onların zor zamanında aynı fedakarlığı yapıyor musun?",
        options: [
            { text: "Kesinlikle, bu karşılıklıdır.", next: "son_tavsiye_pozitif" }, 
            { text: "Bazen kendimi geri çekiyorum.", next: "son_tavsiye_degisim" }      
        ]
    },
    
    // =========================================================
    //               EKSİK BENLİK KOLU ZİNCİRİ (Zor başlangıç)
    // =========================================================
    "eksik_benlik_3": {
        question: "Kendini yeterince sevememenin temel sebebi ne olabilir?",
        options: [
            { text: "Başarısızlık korkusu.", next: "benlik_basarisizlik_4" }, 
            { text: "Sürekli başkalarıyla kıyaslama.", next: "benlik_kiyaslama_4" } 
        ]
    },

    // 4. Katman Eksik Benlik Alt Kolları
    "benlik_basarisizlik_4": {
        question: "Başarısızlık korkusu seni eyleme geçmekten alıkoyuyor mu, yoksa tam tersi mi?",
        options: [
            { text: "Eylemsiz kalıyorum, bu beni yoruyor.", next: "son_tavsiye_degisim" }, 
            { text: "Daha çok çalışmaya itiyor ama hiç tatmin olmuyorum.", next: "son_tavsiye_akis" }  
        ]
    },
    "benlik_kiyaslama_4": {
        question: "Kıyasladığın kişiler, sana gerçekten ilham verenler mi yoksa sadece daha mutlu görünenler mi?",
        options: [
            { text: "Daha mutlu görünen, ulaşılmaz kişiler.", next: "son_tavsiye_degisim" }, 
            { text: "İlham veren, mentorum olabilecek kişiler.", next: "son_tavsiye_akis" }      
        ]
    },

    // =========================================================
    //               SONUÇ VE TAVSİYELER (Tüm yollar buraya bağlanır)
    // =========================================================
    "son_tavsiye_pozitif": {
        question: "Harika! Görünen o ki, ilişkilerinde sağlam ve pozitif bir temel kurmuşsun. Bu pozitifliği hayatının diğer alanlarına yaymayı ve büyütmeyi dene. Mutluluğun sırrı, verdiğin sevgiyi görmekte saklı! 😊",
        options: []
    },
    "son_tavsiye_degisim": {
        question: "Şu anki hislerin, bazı şeyleri değiştirmen gerektiğini gösteriyor. Küçük adımlarla başla. Örneğin, kendini kıyasladığın kişileri sosyal medyadan takip etmeyi bırakmak ilk adım olabilir. Unutma, en önemli ilişki, kendinle kurduğun ilişkidir! 🛠️",
        options: []
    },
    "son_tavsiye_akis": {
        question: "Aldığın cevaplar, hayatındaki sevgi akışında bazı pürüzler olduğunu gösteriyor. Bu durumu hemen düzeltmeye çalışma. Önce ne istediğini netleştir. Bir hafta boyunca sadece gözlemci ol ve seni kimin gerçekten mutlu ettiğini not et. Değişim, farkındalıkla başlar. 💡",
        options: []
    },
    
    // Eksik Partner ve Eksik Aile kollarını da son tavsiyelere bağlayalım
    "eksik_partner_3": { question: "Romantik bir ilişkide olma isteğin, yalnız kalma korkusundan mı yoksa gerçekten hayatına birini katma arzusundan mı geliyor?", options: [ { text: "Yalnızlık korkusu.", next: "son_tavsiye_degisim" }, { text: "Gerçekten sevme isteği.", next: "son_tavsiye_akis" } ] },
    "eksik_aile_3": { question: "Ailenle arandaki sevgisizlik en çok hangi yaşanmışlıktan sonra arttı?", options: [ { text: "Son bir olaydan sonra.", next: "son_tavsiye_degisim" }, { text: "Yıllar içinde yavaşça oldu.", next: "son_tavsiye_akis" } ] },
    "sevgi_partner_3": { question: "Partnerinle arandaki sevgi, günlük rutinlerinizi ne kadar etkiliyor? Rutinlerinizin dışına çıkıyor musunuz?", options: [ { text: "Rutinler dışına çıkmayı seviyoruz.", next: "son_tavsiye_pozitif" }, { text: "Çoğunlukla rutine bağlıyız.", next: "son_tavsiye_akis" } ] }
    
};

// Site içi durumu takip eden değişken
let currentQuestionId = "start";

// Soru yükleme ve gösterme fonksiyonu (Bu kısım aynı kalmalı)
function loadQuestion(questionId) {
    const data = questions[questionId];
    const questionEl = document.getElementById("question");
    const optionsContainer = document.getElementById("options-container");

    if (!data) {
        questionEl.textContent = `Hata: Bir sonraki soru bulunamadı. ID: ${questionId}. Lütfen JS kodunu kontrol et.`;
        optionsContainer.innerHTML = "";
        return;
    }

    questionEl.textContent = data.question;
    optionsContainer.innerHTML = ""; 

    data.options.forEach(option => {
        const button = document.createElement("button");
        button.className = "option-button";
        button.textContent = option.text;
        
        if (option.next) {
            button.onclick = () => {
                currentQuestionId = option.next;
                loadQuestion(currentQuestionId);
            };
        }
        optionsContainer.appendChild(button);
    });
}

// Sayfa yüklendiğinde sohbeti başlat
loadQuestion(currentQuestionId);
