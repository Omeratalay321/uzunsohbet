// script2.js dosyasının içeriği:

// ÖNEMLİ: Bu script, script.js'teki 'questions' objesini genişletecektir.
// Bu yüzden 'questions' objesinin var olduğunu varsayıyoruz (bu yüzden önce script.js çağrılmalı).

// =========================================================
//               PARTNER KOLU ZİNCİRİ (Mutlu başlangıçtan derinleşme)
// =========================================================
// Partnerinle arandaki sevgi, günlük rutinlerinizi ne kadar etkiliyor? (3. Katman)
questions["sevgi_partner_3"] = {
    question: "Partnerinle aranızdaki sevgi, günlük rutinlerinizi ne kadar etkiliyor? Rutinlerinizin dışına çıkıyor musunuz?",
    options: [
        { text: "Rutinler dışına çıkmayı seviyoruz.", next: "partner_rutin_4a" }, // 4. Katman
        { text: "Çoğunlukla rutine bağlıyız.", next: "partner_rutin_4b" }      // 4. Katman
    ]
};

// 4. Katman Partner Alt Kolları
questions["partner_rutin_4a"] = {
    question: "Birlikte geçirdiğiniz bu sıra dışı zamanlar, ortak geleceğinizi planlamanıza yardımcı oluyor mu?",
    options: [
        { text: "Evet, sürekli yeni hayaller kuruyoruz.", next: "son_tavsiye_pozitif" }, // Sonuç
        { text: "Hayır, sadece o anı yaşıyoruz.", next: "son_tavsiye_akis" }  // Sonuç
    ]
};

questions["partner_rutin_4b"] = {
    question: "Rutin hayatınızda sizi en çok ne zorluyor? Yeterince heyecan var mı?",
    options: [
        { text: "Bazen birbirimizden sıkılıyoruz.", next: "partner_rutin_5a" }, // 5. Katman
        { text: "Güven veriyor ama heyecanı düşük.", next: "partner_rutin_5b" }      // 5. Katman
    ]
};

// 5. Katman Partner Alt Kolları
questions["partner_rutin_5a"] = {
    question: "Sıkılma hissi, sence partnerine olan bağlılığını azaltıyor mu?",
    options: [
        { text: "Evet, kendimi uzaklaşıyor hissediyorum.", next: "son_tavsiye_degisim" }, // Sonuç
        { text: "Hayır, bağlılık farklı bir şey.", next: "son_tavsiye_akis" }  // Sonuç
    ]
};
questions["partner_rutin_5b"] = {
    question: "Sizce heyecanı artırmak için kimin ilk adımı atması gerekiyor?",
    options: [
        { text: "İkimiz de sorumluyuz.", next: "son_tavsiye_akis" }, 
        { text: "Benim daha yaratıcı olmam lazım.", next: "son_tavsiye_degisim" }      
    ]
};


// =========================================================
//               EKSİK AİLE KOLU ZİNCİRİ (Zor başlangıçtan derinleşme)
// =========================================================
// Ailenle arandaki sevgisizlik en çok hangi yaşanmışlıktan sonra arttı? (3. Katman)
questions["eksik_aile_3"] = {
    question: "Ailenle arandaki sevgisizlik en çok hangi yaşanmışlıktan sonra arttı?",
    options: [
        { text: "Son bir olaydan sonra (Büyük bir tartışma, vs.).", next: "aile_olay_4a" }, // 4. Katman
        { text: "Yıllar içinde yavaşça oldu (İletişimsizlik).", next: "aile_yavas_4b" }      // 4. Katman
    ]
};

// 4. Katman Eksik Aile Alt Kolları
questions["aile_olay_4a"] = {
    question: "Bu olaydan sonra duygularını onlara net olarak ifade ettin mi?",
    options: [
        { text: "Hayır, içimde tutuyorum.", next: "aile_olay_5a" }, // 5. Katman
        { text: "Evet, ama anlaşılmadım.", next: "aile_olay_5b" }  // 5. Katman
    ]
};
questions["aile_yavas_4b"] = {
    question: "İletişimsizliği düzeltmek için son 6 ayda bir deneme yaptın mı?",
    options: [
        { text: "Evet, ama düzelmedi.", next: "aile_olay_5b" }, // 5. Katman
        { text: "Hayır, bir adım atmadım.", next: "aile_olay_5a" }      // 5. Katman
    ]
};

// 5. Katman Eksik Aile Alt Kolları
questions["aile_olay_5a"] = {
    question: "İçinde tuttuğun bu duygular veya adım atmaman, sence başka ilişkilerine de yansıyor mu?",
    options: [
        { text: "Evet, açılmaktan korkuyorum.", next: "son_tavsiye_degisim" }, // Sonuç
        { text: "Hayır, başka ilişkilerimde daha rahatım.", next: "son_tavsiye_akis" }  // Sonuç
    ]
};
questions["aile_olay_5b"] = {
    question: "Anlaşılmadığını hissetmek, ailene karşı duvar örmene neden oldu mu?",
    options: [
        { text: "Evet, kendimi izole ettim.", next: "son_tavsiye_degisim" }, 
        { text: "Hayır, sadece durumu kabullendim.", next: "son_tavsiye_akis" }      
    ]
};

// =========================================================
// SON: Yeni scriptin başarıyla yüklendiğini kontrol etmek için basit bir değişken (isteğe bağlı)
// Bu değişkeni kullanmıyoruz, sadece mantığı oturtmak için burada duruyor.
let script2Yuklendi = true;
