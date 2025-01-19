// backend.js
// Mesajlar dizisi
const messages = [
    "Allah'ın rahmeti, bereketi ve mağfireti üzerinize olsun. Hayırlı Cumalar dilerim.",
    "Cumanız bereket, dualarınız kabul, gününüz aydınlık olsun. Hayırlı Cumalar.",
    "Bu mübarek Cuma gününde, tüm dileklerinizin kabul olmasını dilerim. Hayırlı Cumalar.",
    "Günlerin en faziletlisi Cuma'dır. Bu güzel gün, hayırlara vesile olsun. Hayırlı Cumalar.",
    "Rabbim, Cuma'nızı bereketli, kalbinizi huzurlu, ailenizi mutlu kılsın. Hayırlı Cumalar.",
    "Dualarımız, sevdiklerimiz için kabul olsun. Cuma gününüz hayırlı olsun.",
    "Yüce Allah'ın rahmeti, Cuma gününün huzuru ile kalplerimize dolsun. Hayırlı Cumalar.",
    "Rabbim, tüm güzellikleri hayatınıza sunsun. Cuma'nız mübarek olsun.",
    "Rabbim, Cuma günümüzü vesile kılsın; günahlarımızı affetsin, dualarımızı kabul etsin. Hayırlı Cumalar.",
    "Cuma, umutların tazelandığı, duaların kabul olduğu mübarek bir gündür. Cumanız hayırlı olsun.",
    "Rabbim birliğimizi, dirliğimizi ve beraberliğimizi daim eylesin. (Amin) Hayırlı Cumalar...",
    "Eğer imtihan oluyorsanız, bu ALLAH’ın sizi unutmadığının müjdesidir… Ellhamdülillah! Hayırlı Cumalar…",
    "Allah'ım; Yolda olana 'Selâmet' Hasta olana 'Afiyet' Darda olana 'Metanet' Nasip Eyle.. Hayırlı cumalar."
];

let currentIndex = parseInt(localStorage.getItem('currentIndex')) || 0;

function displayMessage() {
    const message = messages[currentIndex];
    const fullMessage = message ;
    document.getElementById('message').textContent = fullMessage;
    const whatsappLink = `https://wa.me/?text=${encodeURIComponent(fullMessage)}`;
    document.getElementById('whatsappLink').href = whatsappLink;

    currentIndex = (currentIndex + 1) % messages.length;
    localStorage.setItem('currentIndex', currentIndex);
}

window.onload = displayMessage;
