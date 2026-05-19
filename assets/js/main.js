// =============================================
//  SCROLL-REVEAL OBSERVER (dipakai oleh render functions)
// =============================================

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

// =============================================
//  DATA
// =============================================

const projects = [
    {
        title: "Augmented Reality Media Pembelajaran Pahlawan & Tarian pada Uang Rupiah",
        category: "SKRIPSI / AR",
        desc: "Rancang bangun media pembelajaran Augmented Reality yang mengenalkan pahlawan dan tarian daerah melalui media uang rupiah, ditujukan untuk anak SD kelas 4 (SD UMP).",
        tech: ["AR", "Unity", "Model 3D", "UI/UX"],
        img: "assets/pages/pengalaman projek/ar media belajar pahlawan rupiah/img/halaman beranda.png",
        link: "assets/pages/pengalaman projek/ar media belajar pahlawan rupiah/index.html"
    },
    {
        title: "Website Sistem Monitoring PT Kimia Farma",
        category: "WEB APP / PHP",
        desc: "Aplikasi web multi-modul untuk manajemen aset, pemantauan AC, dan operasional driver dengan dashboard CRUD dan arsitektur modular.",
        tech: ["PHP", "Tailwind CSS", "JavaScript", "MySQL"],
        img: "assets/pages/pengalaman projek/sistem monitoring kimia farma apotek/img/beranda depan.png",
        link: "assets/pages/pengalaman projek/sistem monitoring kimia farma apotek/index.html"
    },
    {
        title: "Portal Berita Winnicode",
        category: "MOBILE / FLUTTER",
        desc: "Aplikasi portal berita berbasis Android dengan UI responsif, integrasi REST API, fitur bookmark, autentikasi, dan pengaturan tema.",
        tech: ["Flutter", "Dart", "REST API"],
        img: "assets/pages/pengalaman projek/winnicode/img/beranda.png",
        link: "assets/pages/pengalaman projek/winnicode/index.html"
    },
    {
        title: "Capstone Project Bangkit 2023 - Inorganic Waste App",
        category: "MOBILE / KOTLIN",
        desc: "Aplikasi tutorial pembuatan benda kerajinan dari bahan plastik yang rekomendasinya muncul berdasarkan hasil scan benda pada aplikasi. Contoh: jika yang discan tas plastik, maka muncul list tutorial kerajinan dari tas plastik.",
        tech: ["Kotlin", "Android", "MLKit"],
        img: "assets/pages/pengalaman projek/capstone projek bangkit benda kerajinan dari bahan plastik/img/beranda.jpg",
        link: "assets/pages/pengalaman projek/capstone projek bangkit benda kerajinan dari bahan plastik/index.html"
    }
];

const skills = [
    { name: "Pengembangan Web", level: 90, color: "bg-blue-500" },
    { name: "Pengembangan Mobile", level: 82, color: "bg-purple-500" },
    { name: "Desain UI/UX", level: 74, color: "bg-pink-500" },
    { name: "Database Management", level: 68, color: "bg-green-500" }
];

const skillTags = [
    "Kotlin", "Dart", "JavaScript", "PHP", "C#", "Flutter", "React Native", "HTML", "CSS",
    "Laravel", "Codeigniter", "MySQL", "SQLite", "Git", "Postman", "Figma",
    "Microsoft Word", "Microsoft PowerPoint", "Unity", "Visual Studio Code",
    "Android Studio", "Pemecahan Masalah (Problem Solving)",
    "Berpikir Analitis", "Manajemen Waktu", "Multitasking", "Kerja Sama Tim",
    "Adaptasi terhadap Teknologi Baru", "Belajar Secara Mandiri"
];

const experiences = [
    {
        role: "Flutter Developer Application",
        company: "PT Winnicode Garuda Teknologi",
        period: "Oktober 2025 – April 2026",
        location: "Purwokerto, Indonesia",
        desc: "Mengembangkan aplikasi portal berita berbasis Android menggunakan Flutter mulai dari perancangan tampilan, pembuatan fitur, hingga pengujian fungsional. Mengintegrasikan aplikasi dengan API backend, melakukan debugging, serta berkolaborasi dengan tim dalam review kode.",
        icon: "fas fa-mobile-alt",
        color: "bg-blue-600",
        certificateLabel: "Lihat Sertifikat (PDF)",
        certificateLink: "assets/docs/sertifikat maganghub batch 1.pdf"
    },
    {
        role: "Mobile Development",
        company: "Bangkit Academy — Google, GoTo & Traveloka",
        period: "Februari 2023 – Juli 2023",
        location: "Purwokerto, Indonesia",
        desc: "Mengembangkan aplikasi Android menggunakan Kotlin dengan menerapkan Android Fundamental (Activity, Fragment, RecyclerView, ViewModel), prinsip SOLID, konsumsi API, Room, DataStore, dan integrasi MLKit. Berkolaborasi dalam Capstone Project bersama 6 anggota tim lintas bidang.",
        icon: "fas fa-graduation-cap",
        color: "bg-purple-600",
        certificateLabel: "Lihat Sertifikat (PDF)",
        certificateLink: "assets/docs/sertifikat bangkit academy.pdf"
    }
];

const educations = [
    {
        degree: "S1 Teknik Informatika",
        school: "Universitas Muhammadiyah Purwokerto",
        period: "Agustus 2020 – Agustus 2025",
        gpa: "IPK: 3.57 / 4.00 (Cumlaude)",
        desc: "Skripsi: Rancang Bangun Media Pembelajaran Pengenalan Pahlawan dan Tarian Pada Uang Rupiah Berbasis Augmented Reality. Mata kuliah relevan: Pemrograman Web, Pemrograman Mobile, Rekayasa Perangkat Lunak, Basis Data, Desain Multimedia, Grafika Komputer.",
        icon: "fas fa-graduation-cap",
        color: "from-blue-600 to-purple-600"
    }
];

const certificates = [
    {
        title: "Belajar Prinsip Pemrograman SOLID",
        issuer: "Dicoding Indonesia",
        date: "2023",
        icon: "fas fa-code",
        color: "bg-blue-100 text-blue-600",
        link: "https://www.dicoding.com/certificates/81P233YDOXOY"
    },
    {
        title: "Memulai Pemrograman Dengan Java",
        issuer: "Dicoding Indonesia",
        date: "2023",
        icon: "fab fa-java",
        color: "bg-indigo-100 text-indigo-600",
        link: "https://www.dicoding.com/certificates/1OP810YNVZQK"
    },
    {
        title: "Kelas Mengenal Pemrograman Komputer",
        issuer: "Codepolitan",
        date: "2022",
        icon: "fas fa-laptop-code",
        color: "bg-purple-100 text-purple-600",
        link: "https://www.codepolitan.com/c/KV2H6AW"
    },
    {
        title: "Belajar Dasar UX Design",
        issuer: "Dicoding Indonesia",
        date: "2023",
        icon: "fas fa-wand-magic-sparkles",
        color: "bg-pink-100 text-pink-600",
        link: "https://www.dicoding.com/certificates/QLZ9Q9L07Z5D"
    },
    {
        title: "Belajar Pengembangan Aplikasi Android Intermediate",
        issuer: "Dicoding Indonesia",
        date: "2023",
        icon: "fab fa-android",
        color: "bg-green-100 text-green-600",
        link: "https://www.dicoding.com/certificates/MRZMQW8JLPYQ"
    },
    {
        title: "Learning HTML",
        issuer: "Sololearn",
        date: "2021",
        icon: "fab fa-html5",
        color: "bg-orange-100 text-orange-600",
        link: "https://www.sololearn.com/en/certificates/CT-GHXQUSVS"
    },
    {
        title: "Learning Javascript and JQuery From Scratch",
        issuer: "Eduonix",
        date: "2021",
        icon: "fab fa-js",
        color: "bg-yellow-100 text-yellow-600",
        link: "https://www.eduonix.com/certificate/504e8eb244"
    },
    {
        title: "Front End Development - HTML",
        issuer: "Great Learning",
        date: "2021",
        icon: "fas fa-border-all",
        color: "bg-blue-100 text-blue-600",
        link: "https://olympus.mygreatlearning.com/courses/12761/certificate"
    },
    {
        title: "CSS Properties",
        issuer: "Great Learning",
        date: "2021",
        icon: "fab fa-css3-alt",
        color: "bg-sky-100 text-sky-700",
        link: "https://olympus.mygreatlearning.com/courses/47912/certificate"
    },
    {
        title: "PHP for Beginners",
        issuer: "Great Learning",
        date: "2021",
        icon: "fab fa-php",
        color: "bg-purple-100 text-purple-600",
        link: "https://olympus.mygreatlearning.com/courses/61375/certificate"
    },
    {
        title: "Belajar Membuat Aplikasi Android dengan Jetpack Compose",
        issuer: "Dicoding Indonesia",
        date: "2023",
        icon: "fas fa-layer-group",
        color: "bg-cyan-100 text-cyan-600",
        link: "https://www.dicoding.com/certificates/ERZRG125QPYV"
    },
    {
        title: "Learning CSS",
        issuer: "Sololearn",
        date: "2022",
        icon: "fab fa-css3-alt",
        color: "bg-slate-100 text-slate-700",
        link: "https://www.sololearn.com/en/certificates/CT-YKS2SYB5"
    },
    {
        title: "Learning JavaScript",
        issuer: "Sololearn",
        date: "2021",
        icon: "fab fa-js",
        color: "bg-yellow-100 text-yellow-600",
        link: "https://www.sololearn.com/en/certificates/CT-FA1TYJET"
    },
    {
        title: "Learning PHP",
        issuer: "Sololearn",
        date: "2022",
        icon: "fab fa-php",
        color: "bg-indigo-100 text-indigo-600",
        link: "https://www.sololearn.com/en/certificates/CT-RPGL7QKW"
    },
    {
        title: "Belajar Membuat Aplikasi Android untuk Pemula",
        issuer: "Dicoding Indonesia",
        date: "2023",
        icon: "fas fa-mobile-alt",
        color: "bg-green-100 text-green-600",
        link: "https://www.dicoding.com/certificates/1RXYO80W1PVM"
    },
    {
        title: "Memulai Pemrograman Dengan Kotlin",
        issuer: "Dicoding Indonesia",
        date: "2023",
        icon: "fab fa-kotlin",
        color: "bg-purple-100 text-purple-600",
        link: "https://www.dicoding.com/certificates/MRZM43E03XYQ"
    },
    {
        title: "Belajar Fundamental Aplikasi Android",
        issuer: "Dicoding Indonesia",
        date: "2023",
        icon: "fab fa-android",
        color: "bg-blue-100 text-blue-600",
        link: "https://www.dicoding.com/certificates/1OP80D221XQK"
    },
    {
        title: "Sertifikat Kelas Belajar JavaScript Dasar",
        issuer: "Codepolitan",
        date: "2021",
        icon: "fab fa-js",
        color: "bg-orange-100 text-orange-600",
        link: "https://www.codepolitan.com/c/RXUGLST"
    },
    {
        title: "Sertifikat Kelas Belajar Dasar-dasar HTML dan CSS",
        issuer: "Codepolitan",
        date: "2021",
        icon: "fas fa-code",
        color: "bg-slate-100 text-slate-700",
        link: "https://www.codepolitan.com/c/WKWHXJJ/"
    }
];

// =============================================
//  RENDER FUNCTIONS
// =============================================


function renderProjects() {
    const container = document.getElementById('projects-container');
    if (!container) return;
    container.innerHTML = projects.map((item, i) => `
        <div class="reveal reveal-delay-${(i % 3) + 1} group relative bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 card-hover">
                <div class="h-48 overflow-hidden relative bg-slate-100">
                <img src="${item.img}" alt="${item.title}"
                     class="w-full h-full object-cover"
                     onerror="this.parentElement.innerHTML='<div class=\'w-full h-full flex items-center justify-center text-slate-300\'><i class=\'fas fa-image text-4xl\'></i></div>'">
                <div class="absolute inset-0 bg-slate-900/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5">
                    <a href="${item.link}" class="text-white text-sm italic underline">Lihat Detail &rarr;</a>
                </div>
            </div>
            <div class="p-6">
                <span class="text-xs font-bold text-blue-600 tracking-widest uppercase mb-2 block">${item.category}</span>
                <h4 class="text-lg font-bold mb-2 text-slate-800">${item.title}</h4>
                <p class="text-slate-500 text-sm mb-4 leading-relaxed italic">"${item.desc}"</p>
                <div class="flex flex-wrap gap-2">
                    ${item.tech.map(t => `<span class="px-3 py-1 bg-slate-100 text-slate-600 text-[10px] rounded-full font-bold uppercase tracking-tighter">${t}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');

    // Observe newly rendered cards
    container.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}

function renderSkills() {
    const barsEl = document.getElementById('skill-bars');
    const tagsEl = document.getElementById('skill-tags');
    if (!barsEl || !tagsEl) return;

    barsEl.innerHTML = skills.map(s => `
        <div>
            <div class="flex justify-between mb-2">
                <span class="text-sm font-bold text-slate-700">${s.name}</span>
                <span class="text-sm font-bold text-blue-600">${s.level}%</span>
            </div>
            <div class="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                <div class="skill-bar h-full ${s.color} rounded-full" style="width: 0%" data-width="${s.level}%"></div>
            </div>
        </div>
    `).join('');

    tagsEl.innerHTML = skillTags.map(tag => `
        <span class="skill-tag px-4 py-2 bg-white border border-slate-200 text-slate-700 text-sm rounded-full font-semibold shadow-sm cursor-default">${tag}</span>
    `).join('');

    // Animate bars when in view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.querySelectorAll('.skill-bar').forEach(bar => {
                    bar.style.width = bar.dataset.width;
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    observer.observe(barsEl);
}

function renderExperience() {
    const container = document.getElementById('experience-container');
    if (!container) return;

    container.innerHTML = `
        <div class="relative pl-8 border-l-2 border-slate-200 space-y-10">
            ${experiences.map((exp, i) => `
                <div class="reveal relative">
                    <div class="absolute -left-[41px] w-8 h-8 ${exp.color} rounded-full flex items-center justify-center text-white text-xs shadow-md">
                        <i class="${exp.icon}"></i>
                    </div>
                    <div class="bg-white rounded-xl p-6 shadow-sm border border-slate-200 card-hover ml-4">
                        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                            <div>
                                <h3 class="text-lg font-bold text-slate-800">${exp.role}</h3>
                                <p class="text-blue-600 font-semibold text-sm">${exp.company}</p>
                            </div>
                            <div class="text-right">
                                <span class="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full font-bold">${exp.period}</span>
                                <p class="text-xs text-slate-400 mt-1"><i class="fas fa-map-marker-alt mr-1"></i>${exp.location}</p>
                            </div>
                        </div>
                        <p class="text-slate-500 text-sm leading-relaxed">${exp.desc}</p>
                        ${exp.certificateLink ? `
                            <a href="${exp.certificateLink}" target="_blank" rel="noopener noreferrer"
                                class="mt-4 inline-flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-900 text-white font-bold shadow-sm hover:bg-slate-800 transition">
                                <i class="fas fa-file-pdf"></i>
                                ${exp.certificateLabel || 'Lihat Sertifikat (PDF)'}
                            </a>
                        ` : ''}
                    </div>
                </div>
            `).join('')}
        </div>
    `;
    container.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}

function renderEducation() {
    const container = document.getElementById('education-container');
    if (!container) return;

    container.innerHTML = educations.map((edu) => `
        <div class="reveal flex gap-6 items-start">
            <div class="flex-shrink-0 w-14 h-14 bg-gradient-to-br ${edu.color} rounded-xl flex items-center justify-center text-white text-xl shadow-md">
                <i class="${edu.icon}"></i>
            </div>
            <div class="flex-1 bg-white rounded-xl p-6 shadow-sm border border-slate-200 card-hover">
                <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <h3 class="text-lg font-bold text-slate-800">${edu.degree}</h3>
                    <span class="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full font-bold">${edu.period}</span>
                </div>
                <p class="text-blue-600 font-semibold text-sm mb-1">${edu.school}</p>
                ${edu.gpa ? `<p class="text-green-600 text-xs font-bold mb-2"><i class="fas fa-star mr-1"></i>${edu.gpa}</p>` : ''}
                <p class="text-slate-500 text-sm leading-relaxed">${edu.desc}</p>
            </div>
        </div>
    `).join('');
    container.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}

function renderCertificates() {
    const container = document.getElementById('certificates-container');
    if (!container) return;

    container.innerHTML = certificates.map((cert, i) => `
        <div class="reveal reveal-delay-${(i % 3) + 1} bg-white rounded-xl p-6 shadow-sm border border-slate-200 card-hover flex gap-4 items-start">
            <div class="w-12 h-12 ${cert.color} rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                <i class="${cert.icon}"></i>
            </div>
            <div class="flex-1">
                <h4 class="font-bold text-slate-800 mb-1 leading-snug">${cert.title}</h4>
                <p class="text-sm text-slate-500 mb-1">${cert.issuer}</p>
                <p class="text-xs text-slate-400"><i class="fas fa-calendar-alt mr-1"></i>${cert.date}</p>
            </div>
            <a href="${cert.link}" target="_blank" rel="noopener noreferrer" class="text-slate-300 hover:text-blue-600 transition-colors flex-shrink-0 mt-1" title="Lihat Sertifikat (buka tab baru)">
                <i class="fas fa-external-link-alt"></i>
            </a>
        </div>
    `).join('');
    container.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}

// =============================================
//  LANGUAGE SWITCHER
// =============================================

function toggleLangMenu() {
    const menu = document.getElementById('lang-menu');
    const chevron = document.getElementById('lang-chevron');
    const isHidden = menu.classList.contains('hidden');
    menu.classList.toggle('hidden', !isHidden);
    chevron.style.transform = isHidden ? 'rotate(180deg)' : '';
}

// Tutup dropdown saat klik di luar
document.addEventListener('click', (e) => {
    const switcher = document.getElementById('lang-switcher');
    if (switcher && !switcher.contains(e.target)) {
        document.getElementById('lang-menu')?.classList.add('hidden');
        const chevron = document.getElementById('lang-chevron');
        if (chevron) chevron.style.transform = '';
    }
});

function changeLang(lang) {
    localStorage.setItem('selectedLang', lang);
    document.getElementById('current-lang').innerText = lang.toUpperCase();
    // Tutup menu setelah pilih bahasa
    document.getElementById('lang-menu')?.classList.add('hidden');
    const chevron = document.getElementById('lang-chevron');
    if (chevron) chevron.style.transform = '';

    const elements = document.querySelectorAll('[data-t]');
    elements.forEach(el => {
        const key = el.getAttribute('data-t');
        if (translations[lang] && translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });

    if (lang === 'ar') {
        document.body.dir = 'rtl';
    } else {
        document.body.dir = 'ltr';
    }
}

// =============================================
//  CONTACT FORM
// =============================================

document.addEventListener('DOMContentLoaded', () => {
    // Render all sections
    renderProjects();
    renderSkills();
    renderExperience();
    renderEducation();
    renderCertificates();

    // Load saved language
    const savedLang = localStorage.getItem('selectedLang') || 'id';
    changeLang(savedLang);

    // Contact form handler
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button[type="submit"]');
            btn.innerHTML = '<i class="fas fa-check"></i> Pesan Terkirim!';
            btn.classList.replace('bg-blue-600', 'bg-green-500');
            btn.disabled = true;
            setTimeout(() => {
                btn.innerHTML = '<i class="fas fa-paper-plane"></i> <span data-t="form_send">Kirim Pesan</span>';
                btn.classList.replace('bg-green-500', 'bg-blue-600');
                btn.disabled = false;
                form.reset();
            }, 3000);
        });
    }
});
