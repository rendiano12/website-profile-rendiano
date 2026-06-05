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
        tech: ["Laravel 11", "Tailwind CSS", "JavaScript", "MySQL"],
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
    },
    {
        title: "Introducing Coding for Beginners — HTML & CSS Online Course",
        issuer: "BitDegree",
        date: "2021",
        icon: "fab fa-html5",
        color: "bg-orange-100 text-orange-600",
        link: "assets/docs/Introducing Coding for Beginners - an HTML and CSS Online Course.pdf"
    },
    {
        title: "Learn Command Line — Mac & Linux Command Line Tutorial",
        issuer: "BitDegree",
        date: "2021",
        icon: "fas fa-terminal",
        color: "bg-slate-100 text-slate-600",
        link: "assets/docs/Learn Command Line - Mac and Linux Command Line Tutorial.pdf"
    },
    {
        title: "Learn JavaScript — Quick Course for Beginners",
        issuer: "BitDegree",
        date: "2021",
        icon: "fab fa-js",
        color: "bg-yellow-100 text-yellow-600",
        link: "assets/docs/Learn JavaScript - Quick Course for Beginners.pdf"
    },
    {
        title: "PyQt5 — Create an AMAZING Calculator!!",
        issuer: "BitDegree",
        date: "2021",
        icon: "fab fa-python",
        color: "bg-blue-100 text-blue-600",
        link: "assets/docs/PyQt5 - Create an AMAZING Calculator!!.pdf"
    },
    {
        title: "Proposal Program Kegiatan Mahasiswa (PKM)",
        issuer: "Universitas Muhammadiyah Purwokerto (Student Scientific Center)",
        date: "2025",
        icon: "fas fa-scroll",
        color: "bg-emerald-100 text-emerald-600",
        link: "assets/docs/sertifikat rendiano pkm.pdf"
    }
];

// =============================================
//  RENDER FUNCTIONS
// =============================================


function renderProjects() {
    const container = document.getElementById('projects-container');
    if (!container) return;

    // Card accent colors per project
    const accents = [
        'from-indigo-500 to-blue-500',
        'from-blue-500 to-cyan-500',
        'from-purple-500 to-pink-500',
        'from-emerald-500 to-teal-500'
    ];

    container.innerHTML = projects.map((item, i) => `
        <div class="reveal reveal-delay-${(i % 3) + 1} group relative bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 card-hover card-accent-top">
            <div class="h-48 overflow-hidden relative bg-slate-100">
                <img src="${item.img}" alt="${item.title}"
                     class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                     onerror="this.parentElement.innerHTML='<div class=\'w-full h-full flex items-center justify-center text-slate-300\'><i class=\'fas fa-image text-4xl\'></i></div>'">
                <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5">
                    <a href="${item.link}" class="text-white text-sm font-semibold flex items-center gap-2">
                        Lihat Detail <i class="fas fa-arrow-right text-xs"></i>
                    </a>
                </div>
                <!-- Category badge -->
                <span class="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white shadow"
                    style="background:linear-gradient(135deg,#6366f1,#3b82f6);">${item.category}</span>
            </div>
            <div class="p-6">
                <h4 class="text-base font-bold mb-2 text-slate-800 leading-snug">${item.title}</h4>
                <p class="text-slate-500 text-sm mb-4 leading-relaxed italic">"${item.desc}"</p>
                <div class="flex flex-wrap gap-2">
                    ${item.tech.map(t => `<span class="px-3 py-1 text-[10px] rounded-full font-bold uppercase tracking-tighter"
                        style="background:rgba(99,102,241,0.1);color:#4f46e5;">${t}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');

    container.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}

function renderSkills() {
    const barsEl = document.getElementById('skill-bars');
    const tagsEl = document.getElementById('skill-tags');
    if (!barsEl || !tagsEl) return;

    // Colors per skill bar
    const barColors = [
        { from: '#6366f1', to: '#3b82f6' },
        { from: '#8b5cf6', to: '#6366f1' },
        { from: '#ec4899', to: '#a855f7' },
        { from: '#10b981', to: '#06b6d4' }
    ];

    barsEl.innerHTML = skills.map((s, idx) => {
        const c = barColors[idx % barColors.length];
        return `
        <div>
            <div class="flex justify-between mb-2">
                <span class="text-sm font-bold text-slate-700">${s.name}</span>
                <span class="text-sm font-bold" style="color:${c.from};">${s.level}%</span>
            </div>
            <div class="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                <div class="skill-bar h-full rounded-full" style="width:0%;background:linear-gradient(90deg,${c.from},${c.to});" data-width="${s.level}%"></div>
            </div>
        </div>`;
    }).join('');

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
        <div class="relative pl-8 space-y-10">
            <!-- Gradient timeline line -->
            <div class="absolute left-3 top-0 bottom-0 w-0.5 timeline-line rounded-full"></div>
            ${experiences.map((exp, i) => `
                <div class="reveal relative">
                    <div class="absolute -left-[29px] w-9 h-9 ${exp.color} rounded-xl flex items-center justify-center text-white text-sm shadow-lg">
                        <i class="${exp.icon}"></i>
                    </div>
                    <div class="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 card-hover card-accent-top ml-4">
                        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                            <div>
                                <h3 class="text-lg font-bold text-slate-800">${exp.role}</h3>
                                <p class="font-semibold text-sm" style="background:linear-gradient(90deg,#6366f1,#3b82f6);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">${exp.company}</p>
                            </div>
                            <div class="text-right flex-shrink-0">
                                <span class="inline-block px-3 py-1 rounded-full text-xs font-bold"
                                    style="background:rgba(99,102,241,0.1);color:#4f46e5;">${exp.period}</span>
                                <p class="text-xs text-slate-400 mt-1"><i class="fas fa-map-marker-alt mr-1"></i>${exp.location}</p>
                            </div>
                        </div>
                        <p class="text-slate-500 text-sm leading-relaxed">${exp.desc}</p>
                        ${exp.certificateLink ? `
                            <a href="${exp.certificateLink}" target="_blank" rel="noopener noreferrer"
                                class="mt-4 inline-flex items-center gap-3 px-4 py-3 rounded-xl font-bold shadow-sm btn-anim transition text-white text-sm"
                                style="background:linear-gradient(135deg,#1e293b,#312e81);">
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
            <div class="flex-shrink-0 w-16 h-16 bg-gradient-to-br ${edu.color} rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg">
                <i class="${edu.icon}"></i>
            </div>
            <div class="flex-1 bg-white rounded-2xl p-6 shadow-sm border border-indigo-100 card-hover card-accent-top">
                <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <h3 class="text-lg font-bold text-slate-800">${edu.degree}</h3>
                    <span class="inline-block px-3 py-1 rounded-full text-xs font-bold flex-shrink-0"
                        style="background:rgba(99,102,241,0.1);color:#4f46e5;">${edu.period}</span>
                </div>
                <p class="font-semibold text-sm mb-1" style="background:linear-gradient(90deg,#6366f1,#3b82f6);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">${edu.school}</p>
                ${edu.gpa ? `<p class="text-emerald-600 text-xs font-bold mb-3 flex items-center gap-1"><i class="fas fa-star text-yellow-400"></i>${edu.gpa}</p>` : ''}
                <p class="text-slate-500 text-sm leading-relaxed">${edu.desc}</p>
            </div>
        </div>
    `).join('');
    container.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}

function renderCertificates() {
    const track = document.getElementById('cert-track');
    const dotsEl = document.getElementById('cert-dots');
    const pageInfo = document.getElementById('cert-page-info');
    const prevBtn = document.getElementById('cert-prev');
    const nextBtn = document.getElementById('cert-next');
    if (!track || !dotsEl) return;

    const PER_SLIDE = 9;
    const totalSlides = Math.ceil(certificates.length / PER_SLIDE);
    let current = 0;

    // Build card HTML
    function certCard(cert, delay) {
        return `
            <div class="reveal reveal-delay-${delay} bg-white rounded-xl p-5 shadow-sm border border-slate-100 card-hover card-accent-top flex gap-4 items-start">
                <div class="w-12 h-12 ${cert.color} rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                    <i class="${cert.icon}"></i>
                </div>
                <div class="flex-1 min-w-0">
                    <h4 class="font-bold text-slate-800 mb-1 leading-snug text-sm">${cert.title}</h4>
                    <p class="text-xs text-slate-500 mb-1">${cert.issuer}</p>
                    <p class="text-xs text-slate-400"><i class="fas fa-calendar-alt mr-1"></i>${cert.date}</p>
                </div>
                <a href="${cert.link}" target="_blank" rel="noopener noreferrer"
                   class="flex-shrink-0 mt-1 w-8 h-8 rounded-lg flex items-center justify-center transition"
                   style="color:#a5b4fc;" onmouseover="this.style.background='rgba(99,102,241,0.12)'" onmouseout="this.style.background='transparent'"
                   title="Lihat Sertifikat">
                    <i class="fas fa-external-link-alt text-xs"></i>
                </a>
            </div>`;
    }

    // Build slides
    track.innerHTML = '';
    for (let s = 0; s < totalSlides; s++) {
        const slice = certificates.slice(s * PER_SLIDE, s * PER_SLIDE + PER_SLIDE);
        const slide = document.createElement('div');
        slide.className = 'cert-slide';
        slide.innerHTML = `
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                ${slice.map((cert, i) => certCard(cert, (i % 3) + 1)).join('')}
            </div>`;
        track.appendChild(slide);
    }

    // Build dots
    dotsEl.innerHTML = '';
    for (let s = 0; s < totalSlides; s++) {
        const dot = document.createElement('button');
        dot.className = 'cert-dot' + (s === 0 ? ' active' : '');
        dot.setAttribute('aria-label', `Halaman ${s + 1}`);
        dot.addEventListener('click', () => goTo(s));
        dotsEl.appendChild(dot);
    }

    function updateUI() {
        // Move track
        track.style.transform = `translateX(-${current * 100}%)`;

        // Dots
        dotsEl.querySelectorAll('.cert-dot').forEach((d, i) => {
            d.classList.toggle('active', i === current);
        });

        // Page info
        const start = current * PER_SLIDE + 1;
        const end = Math.min(start + PER_SLIDE - 1, certificates.length);
        if (pageInfo) pageInfo.textContent = `${start}–${end} dari ${certificates.length} sertifikat`;

        // Buttons
        if (prevBtn) prevBtn.disabled = current === 0;
        if (nextBtn) nextBtn.disabled = current === totalSlides - 1;

        // Observe reveal elements in current slide
        const currentSlide = track.children[current];
        if (currentSlide) {
            currentSlide.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
        }
    }

    function goTo(index) {
        current = Math.max(0, Math.min(index, totalSlides - 1));
        updateUI();
    }

    if (prevBtn) prevBtn.addEventListener('click', () => goTo(current - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => goTo(current + 1));

    // Keyboard navigation when section is focused
    document.addEventListener('keydown', (e) => {
        const section = document.getElementById('certificates');
        if (!section) return;
        const rect = section.getBoundingClientRect();
        const inView = rect.top < window.innerHeight && rect.bottom > 0;
        if (!inView) return;
        if (e.key === 'ArrowLeft') goTo(current - 1);
        if (e.key === 'ArrowRight') goTo(current + 1);
    });

    updateUI();
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
            btn.style.background = 'linear-gradient(135deg,#10b981,#06b6d4)';
            btn.disabled = true;
            setTimeout(() => {
                btn.innerHTML = '<i class="fas fa-paper-plane"></i> <span data-t="form_send">Kirim Pesan</span>';
                btn.style.background = '';
                btn.disabled = false;
                form.reset();
            }, 3000);
        });
    }
});
