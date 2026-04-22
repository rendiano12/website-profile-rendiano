
const projects = [
    {
        title: "Augmented Reality Education",
        category: "SKRIPSI / UNITY",
        desc: "Menghidupkan sejarah pahlawan di atas lembaran rupiah melalui lensa kamera.",
        tech: ["Unity", "Vuforia", "C#"],
        img: "assets/img/ar-project.jpg"
    },
    {
        title: "Sistem Monitoring Kimia Farma",
        category: "WEB APP / PHP",
        desc: "Digitalisasi pemantauan aset dan logistik driver untuk efisiensi korporat.",
        tech: ["Tailwind", "Alpine.js", "PHP"],
        img: "assets/img/kf-project.jpg"
    },
    {
        title: "Winnicode News Portal",
        category: "MOBILE / FLUTTER",
        desc: "Aplikasi berita responsif dengan pengalaman membaca yang seamless.",
        tech: ["Flutter", "Dart", "API"],
        img: "assets/img/news-project.jpg"
    }
];

const container = document.getElementById('projects-container');

projects.forEach((item, index) => {
    container.innerHTML += `
        <div class="group relative bg-white rounded-[32px] overflow-hidden shadow-xl hover:-translate-y-4 transition-all duration-500" 
             data-aos="fade-up" data-aos-delay="${index * 100}">
            <div class="h-64 overflow-hidden relative">
                <img src="${item.img}" class="w-full h-full object-cover group-hover:scale-110 transition duration-700">
                <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <span class="text-white text-sm italic underline">Lihat Detail Proyek</span>
                </div>
            </div>
            <div class="p-8">
                <span class="text-xs font-bold text-blue-600 tracking-widest uppercase mb-3 block">${item.category}</span>
                <h4 class="text-2xl font-bold mb-3 text-slate-800">${item.title}</h4>
                <p class="text-slate-500 text-sm mb-6 leading-relaxed italic">"${item.desc}"</p>
                <div class="flex flex-wrap gap-2">
                    ${item.tech.map(t => `<span class="px-3 py-1 bg-slate-100 text-slate-600 text-[10px] rounded-full font-bold uppercase tracking-tighter">${t}</span>`).join('')}
                </div>
            </div>
        </div>
    `;
});

function changeLang(lang) {
    // Simpan preferensi bahasa di LocalStorage
    localStorage.setItem('selectedLang', lang);
    
    // Update label tombol bahasa
    document.getElementById('current-lang').innerText = lang.toUpperCase();

    // Loop semua elemen yang punya atribut data-t
    const elements = document.querySelectorAll('[data-t]');
    elements.forEach(el => {
        const key = el.getAttribute('data-t');
        if (translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });

    // Handle RTL untuk Bahasa Arab
    if (lang === 'ar') {
        document.body.dir = "rtl";
        document.body.classList.add('font-arabic'); // Jika ingin font khusus
    } else {
        document.body.dir = "ltr";
        document.body.classList.remove('font-arabic');
    }
}

// Inisialisasi saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('selectedLang') || 'id';
    changeLang(savedLang);
});