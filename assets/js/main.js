// =============================================
//  SCROLL-REVEAL OBSERVER
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
//  CURRENT LANG HELPER
// =============================================

function getLang() {
    return localStorage.getItem('selectedLang') || 'id';
}

function getT(key) {
    const lang = getLang();
    return (translations[lang] && translations[lang][key]) ? translations[lang][key] : (translations['id'][key] || key);
}

// =============================================
//  MULTILINGUAL DATA
// =============================================

const projectsData = {
    id: [
        {
            title: "AR Media Pembelajaran Pahlawan & Tarian pada Uang Rupiah",
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
            title: "Capstone Project Bangkit 2023 — Inorganic Waste App",
            category: "MOBILE / KOTLIN",
            desc: "Aplikasi tutorial pembuatan benda kerajinan dari bahan plastik yang rekomendasinya muncul berdasarkan hasil scan benda pada aplikasi.",
            tech: ["Kotlin", "Android", "MLKit"],
            img: "assets/pages/pengalaman projek/capstone projek bangkit benda kerajinan dari bahan plastik/img/beranda.jpg",
            link: "assets/pages/pengalaman projek/capstone projek bangkit benda kerajinan dari bahan plastik/index.html"
        }
    ],
    en: [
        {
            title: "AR Learning Media: Heroes & Dances on Indonesian Rupiah",
            category: "THESIS / AR",
            desc: "An Augmented Reality learning app introducing national heroes and regional dances through Indonesian banknotes, designed for 4th-grade elementary students.",
            tech: ["AR", "Unity", "3D Model", "UI/UX"],
            img: "assets/pages/pengalaman projek/ar media belajar pahlawan rupiah/img/halaman beranda.png",
            link: "assets/pages/pengalaman projek/ar media belajar pahlawan rupiah/index.html"
        },
        {
            title: "Monitoring System Website — PT Kimia Farma",
            category: "WEB APP / PHP",
            desc: "A multi-module web app for asset management, AC monitoring, and driver operations with a CRUD dashboard and modular architecture.",
            tech: ["Laravel 11", "Tailwind CSS", "JavaScript", "MySQL"],
            img: "assets/pages/pengalaman projek/sistem monitoring kimia farma apotek/img/beranda depan.png",
            link: "assets/pages/pengalaman projek/sistem monitoring kimia farma apotek/index.html"
        },
        {
            title: "Winnicode News Portal",
            category: "MOBILE / FLUTTER",
            desc: "An Android news portal app with responsive UI, REST API integration, bookmark feature, authentication, and theme customization.",
            tech: ["Flutter", "Dart", "REST API"],
            img: "assets/pages/pengalaman projek/winnicode/img/beranda.png",
            link: "assets/pages/pengalaman projek/winnicode/index.html"
        },
        {
            title: "Bangkit 2023 Capstone Project — Inorganic Waste App",
            category: "MOBILE / KOTLIN",
            desc: "A craft tutorial app that recommends DIY projects based on scanned plastic waste items using machine learning.",
            tech: ["Kotlin", "Android", "MLKit"],
            img: "assets/pages/pengalaman projek/capstone projek bangkit benda kerajinan dari bahan plastik/img/beranda.jpg",
            link: "assets/pages/pengalaman projek/capstone projek bangkit benda kerajinan dari bahan plastik/index.html"
        }
    ],
    ko: [
        {
            title: "AR 학습 미디어: 루피아 화폐 속 영웅과 전통춤",
            category: "논문 / AR",
            desc: "인도네시아 지폐를 통해 국가 영웅과 지역 전통 춤을 소개하는 증강현실(AR) 학습 앱. 초등학교 4학년 학생 대상.",
            tech: ["AR", "Unity", "3D 모델", "UI/UX"],
            img: "assets/pages/pengalaman projek/ar media belajar pahlawan rupiah/img/halaman beranda.png",
            link: "assets/pages/pengalaman projek/ar media belajar pahlawan rupiah/index.html"
        },
        {
            title: "PT Kimia Farma 모니터링 시스템",
            category: "웹 앱 / PHP",
            desc: "자산 관리, 에어컨 모니터링, 드라이버 운영을 위한 멀티 모듈 웹 앱. CRUD 대시보드 및 모듈식 아키텍처.",
            tech: ["Laravel 11", "Tailwind CSS", "JavaScript", "MySQL"],
            img: "assets/pages/pengalaman projek/sistem monitoring kimia farma apotek/img/beranda depan.png",
            link: "assets/pages/pengalaman projek/sistem monitoring kimia farma apotek/index.html"
        },
        {
            title: "Winnicode 뉴스 포털",
            category: "모바일 / FLUTTER",
            desc: "반응형 UI, REST API 연동, 북마크, 인증, 테마 설정이 있는 Android 뉴스 포털 앱.",
            tech: ["Flutter", "Dart", "REST API"],
            img: "assets/pages/pengalaman projek/winnicode/img/beranda.png",
            link: "assets/pages/pengalaman projek/winnicode/index.html"
        },
        {
            title: "Bangkit 2023 캡스톤 — 무기질 폐기물 앱",
            category: "모바일 / KOTLIN",
            desc: "머신러닝으로 스캔한 플라스틱 폐기물에 따라 DIY 공예 튜토리얼을 추천하는 앱.",
            tech: ["Kotlin", "Android", "MLKit"],
            img: "assets/pages/pengalaman projek/capstone projek bangkit benda kerajinan dari bahan plastik/img/beranda.jpg",
            link: "assets/pages/pengalaman projek/capstone projek bangkit benda kerajinan dari bahan plastik/index.html"
        }
    ],
    ja: [
        {
            title: "ARルピア紙幣の英雄・踊り学習メディア",
            category: "卒業論文 / AR",
            desc: "インドネシア紙幣を通じて国民的英雄と地域の伝統舞踊を紹介するAR学習アプリ。小学4年生向け。",
            tech: ["AR", "Unity", "3Dモデル", "UI/UX"],
            img: "assets/pages/pengalaman projek/ar media belajar pahlawan rupiah/img/halaman beranda.png",
            link: "assets/pages/pengalaman projek/ar media belajar pahlawan rupiah/index.html"
        },
        {
            title: "PT Kimia Farma モニタリングシステム",
            category: "ウェブアプリ / PHP",
            desc: "資産管理・エアコン監視・ドライバー業務のためのマルチモジュールWebアプリ。",
            tech: ["Laravel 11", "Tailwind CSS", "JavaScript", "MySQL"],
            img: "assets/pages/pengalaman projek/sistem monitoring kimia farma apotek/img/beranda depan.png",
            link: "assets/pages/pengalaman projek/sistem monitoring kimia farma apotek/index.html"
        },
        {
            title: "Winnicode ニュースポータル",
            category: "モバイル / FLUTTER",
            desc: "レスポンシブUI・REST API連携・ブックマーク・認証・テーマ設定を備えたAndroidニュースアプリ。",
            tech: ["Flutter", "Dart", "REST API"],
            img: "assets/pages/pengalaman projek/winnicode/img/beranda.png",
            link: "assets/pages/pengalaman projek/winnicode/index.html"
        },
        {
            title: "Bangkit 2023 キャップストーン — 廃プラスチックアプリ",
            category: "モバイル / KOTLIN",
            desc: "スキャンしたプラスチックごみに基づき、機械学習でDIY工芸チュートリアルを推薦するアプリ。",
            tech: ["Kotlin", "Android", "MLKit"],
            img: "assets/pages/pengalaman projek/capstone projek bangkit benda kerajinan dari bahan plastik/img/beranda.jpg",
            link: "assets/pages/pengalaman projek/capstone projek bangkit benda kerajinan dari bahan plastik/index.html"
        }
    ],
    zh: [
        {
            title: "AR学习媒体：卢比纸币上的英雄与舞蹈",
            category: "毕业论文 / AR",
            desc: "通过印尼纸币介绍民族英雄和地区舞蹈的AR学习应用，面向小学四年级学生。",
            tech: ["AR", "Unity", "3D模型", "UI/UX"],
            img: "assets/pages/pengalaman projek/ar media belajar pahlawan rupiah/img/halaman beranda.png",
            link: "assets/pages/pengalaman projek/ar media belajar pahlawan rupiah/index.html"
        },
        {
            title: "PT Kimia Farma 监控系统网站",
            category: "网页应用 / PHP",
            desc: "用于资产管理、空调监控和司机运营的多模块Web应用，含CRUD仪表板和模块化架构。",
            tech: ["Laravel 11", "Tailwind CSS", "JavaScript", "MySQL"],
            img: "assets/pages/pengalaman projek/sistem monitoring kimia farma apotek/img/beranda depan.png",
            link: "assets/pages/pengalaman projek/sistem monitoring kimia farma apotek/index.html"
        },
        {
            title: "Winnicode 新闻门户",
            category: "移动端 / FLUTTER",
            desc: "响应式UI的Android新闻门户，集成REST API、书签、认证和主题设置功能。",
            tech: ["Flutter", "Dart", "REST API"],
            img: "assets/pages/pengalaman projek/winnicode/img/beranda.png",
            link: "assets/pages/pengalaman projek/winnicode/index.html"
        },
        {
            title: "Bangkit 2023 毕业项目 — 无机废物应用",
            category: "移动端 / KOTLIN",
            desc: "通过机器学习扫描塑料废物，推荐相应DIY手工教程的应用程序。",
            tech: ["Kotlin", "Android", "MLKit"],
            img: "assets/pages/pengalaman projek/capstone projek bangkit benda kerajinan dari bahan plastik/img/beranda.jpg",
            link: "assets/pages/pengalaman projek/capstone projek bangkit benda kerajinan dari bahan plastik/index.html"
        }
    ],
    fr: [
        {
            title: "Média AR d'apprentissage : Héros & Danses sur les Roupies",
            category: "MÉMOIRE / AR",
            desc: "Application d'apprentissage en réalité augmentée présentant des héros nationaux et des danses régionales via les billets de roupie, pour les élèves de CM1.",
            tech: ["AR", "Unity", "Modèle 3D", "UI/UX"],
            img: "assets/pages/pengalaman projek/ar media belajar pahlawan rupiah/img/halaman beranda.png",
            link: "assets/pages/pengalaman projek/ar media belajar pahlawan rupiah/index.html"
        },
        {
            title: "Système de Surveillance — PT Kimia Farma",
            category: "APPLICATION WEB / PHP",
            desc: "Application web multi-modules pour la gestion des actifs, surveillance de la climatisation et opérations des chauffeurs avec tableau de bord CRUD.",
            tech: ["Laravel 11", "Tailwind CSS", "JavaScript", "MySQL"],
            img: "assets/pages/pengalaman projek/sistem monitoring kimia farma apotek/img/beranda depan.png",
            link: "assets/pages/pengalaman projek/sistem monitoring kimia farma apotek/index.html"
        },
        {
            title: "Portail d'Actualités Winnicode",
            category: "MOBILE / FLUTTER",
            desc: "Application Android d'actualités avec UI responsive, intégration REST API, favoris, authentification et personnalisation du thème.",
            tech: ["Flutter", "Dart", "REST API"],
            img: "assets/pages/pengalaman projek/winnicode/img/beranda.png",
            link: "assets/pages/pengalaman projek/winnicode/index.html"
        },
        {
            title: "Projet Capstone Bangkit 2023 — Application Déchets Plastiques",
            category: "MOBILE / KOTLIN",
            desc: "Application recommandant des tutoriels de bricolage à partir de déchets plastiques scannés grâce au machine learning.",
            tech: ["Kotlin", "Android", "MLKit"],
            img: "assets/pages/pengalaman projek/capstone projek bangkit benda kerajinan dari bahan plastik/img/beranda.jpg",
            link: "assets/pages/pengalaman projek/capstone projek bangkit benda kerajinan dari bahan plastik/index.html"
        }
    ],
    ar: [
        {
            title: "وسائط AR التعليمية: أبطال ورقصات على الروبية",
            category: "أطروحة / AR",
            desc: "تطبيق تعليمي بتقنية الواقع المعزز يقدم الأبطال الوطنيين والرقصات الإقليمية عبر أوراق الروبية الإندونيسية، لطلاب الصف الرابع الابتدائي.",
            tech: ["AR", "Unity", "نموذج 3D", "UI/UX"],
            img: "assets/pages/pengalaman projek/ar media belajar pahlawan rupiah/img/halaman beranda.png",
            link: "assets/pages/pengalaman projek/ar media belajar pahlawan rupiah/index.html"
        },
        {
            title: "موقع نظام المراقبة — PT Kimia Farma",
            category: "تطبيق ويب / PHP",
            desc: "تطبيق ويب متعدد الوحدات لإدارة الأصول ومراقبة المكيفات وعمليات السائقين مع لوحة تحكم CRUD.",
            tech: ["Laravel 11", "Tailwind CSS", "JavaScript", "MySQL"],
            img: "assets/pages/pengalaman projek/sistem monitoring kimia farma apotek/img/beranda depan.png",
            link: "assets/pages/pengalaman projek/sistem monitoring kimia farma apotek/index.html"
        },
        {
            title: "بوابة أخبار Winnicode",
            category: "موبايل / FLUTTER",
            desc: "تطبيق بوابة أخبار أندرويد بواجهة متجاوبة وتكامل REST API وإشارات مرجعية ومصادقة وإعدادات السمة.",
            tech: ["Flutter", "Dart", "REST API"],
            img: "assets/pages/pengalaman projek/winnicode/img/beranda.png",
            link: "assets/pages/pengalaman projek/winnicode/index.html"
        },
        {
            title: "مشروع Bangkit 2023 — تطبيق النفايات غير العضوية",
            category: "موبايل / KOTLIN",
            desc: "تطبيق يوصي بدروس الحرف اليدوية من البلاستيك المُمسوح باستخدام التعلم الآلي.",
            tech: ["Kotlin", "Android", "MLKit"],
            img: "assets/pages/pengalaman projek/capstone projek bangkit benda kerajinan dari bahan plastik/img/beranda.jpg",
            link: "assets/pages/pengalaman projek/capstone projek bangkit benda kerajinan dari bahan plastik/index.html"
        }
    ]
};

const skillsData = {
    id: [
        { name: "Pengembangan Web", level: 90 },
        { name: "Pengembangan Mobile", level: 82 },
        { name: "Desain UI/UX", level: 74 },
        { name: "Manajemen Database", level: 68 }
    ],
    en: [
        { name: "Web Development", level: 90 },
        { name: "Mobile Development", level: 82 },
        { name: "UI/UX Design", level: 74 },
        { name: "Database Management", level: 68 }
    ],
    ko: [
        { name: "웹 개발", level: 90 },
        { name: "모바일 개발", level: 82 },
        { name: "UI/UX 디자인", level: 74 },
        { name: "데이터베이스 관리", level: 68 }
    ],
    ja: [
        { name: "Web開発", level: 90 },
        { name: "モバイル開発", level: 82 },
        { name: "UI/UXデザイン", level: 74 },
        { name: "データベース管理", level: 68 }
    ],
    zh: [
        { name: "网页开发", level: 90 },
        { name: "移动开发", level: 82 },
        { name: "UI/UX设计", level: 74 },
        { name: "数据库管理", level: 68 }
    ],
    fr: [
        { name: "Développement Web", level: 90 },
        { name: "Développement Mobile", level: 82 },
        { name: "Conception UI/UX", level: 74 },
        { name: "Gestion de Base de Données", level: 68 }
    ],
    ar: [
        { name: "تطوير الويب", level: 90 },
        { name: "تطوير تطبيقات الموبايل", level: 82 },
        { name: "تصميم UI/UX", level: 74 },
        { name: "إدارة قواعد البيانات", level: 68 }
    ]
};

// Skill tags: technical tools stay in original, soft-skill tags translated
const skillTagsData = {
    technical: ["Kotlin", "Dart", "JavaScript", "PHP", "C#", "Flutter", "React Native", "HTML", "CSS",
        "Laravel", "Codeigniter", "MySQL", "SQLite", "Git", "Postman", "Figma",
        "Microsoft Word", "Microsoft PowerPoint", "Unity", "Visual Studio Code", "Android Studio"],
    soft: {
        id: ["Pemecahan Masalah", "Berpikir Analitis", "Manajemen Waktu", "Multitasking", "Kerja Sama Tim", "Adaptasi Teknologi Baru", "Belajar Mandiri"],
        en: ["Problem Solving", "Analytical Thinking", "Time Management", "Multitasking", "Teamwork", "Tech Adaptability", "Self-Learning"],
        ko: ["문제 해결", "분석적 사고", "시간 관리", "멀티태스킹", "팀워크", "기술 적응력", "자기 학습"],
        ja: ["問題解決", "分析的思考", "時間管理", "マルチタスク", "チームワーク", "技術適応力", "自己学習"],
        zh: ["解决问题", "分析思维", "时间管理", "多任务处理", "团队合作", "技术适应能力", "自主学习"],
        fr: ["Résolution de Problèmes", "Pensée Analytique", "Gestion du Temps", "Multitâche", "Travail d'Équipe", "Adaptabilité Tech", "Auto-apprentissage"],
        ar: ["حل المشكلات", "التفكير التحليلي", "إدارة الوقت", "تعدد المهام", "العمل الجماعي", "التكيف مع التقنيات", "التعلم الذاتي"]
    }
};

const experiencesData = {
    id: [
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
    ],
    en: [
        {
            role: "Flutter Developer Application",
            company: "PT Winnicode Garuda Teknologi",
            period: "October 2025 – April 2026",
            location: "Purwokerto, Indonesia",
            desc: "Developed an Android news portal app using Flutter, from UI design, feature development, to functional testing. Integrated the app with a backend API, performed debugging, and collaborated on code reviews.",
            icon: "fas fa-mobile-alt",
            color: "bg-blue-600",
            certificateLabel: "View Certificate (PDF)",
            certificateLink: "assets/docs/sertifikat maganghub batch 1.pdf"
        },
        {
            role: "Mobile Development",
            company: "Bangkit Academy — Google, GoTo & Traveloka",
            period: "February 2023 – July 2023",
            location: "Purwokerto, Indonesia",
            desc: "Built Android apps using Kotlin, applying Android Fundamentals (Activity, Fragment, RecyclerView, ViewModel), SOLID principles, API consumption, Room, DataStore, and MLKit integration. Collaborated on a Capstone Project with a 6-member cross-discipline team.",
            icon: "fas fa-graduation-cap",
            color: "bg-purple-600",
            certificateLabel: "View Certificate (PDF)",
            certificateLink: "assets/docs/sertifikat bangkit academy.pdf"
        }
    ],
    ko: [
        {
            role: "Flutter 앱 개발자",
            company: "PT Winnicode Garuda Teknologi",
            period: "2025년 10월 – 2026년 4월",
            location: "Purwokerto, 인도네시아",
            desc: "Flutter를 활용하여 Android 뉴스 포털 앱 UI 설계, 기능 개발, 기능 테스트를 담당. 백엔드 API 연동, 디버깅, 코드 리뷰 협업 수행.",
            icon: "fas fa-mobile-alt",
            color: "bg-blue-600",
            certificateLabel: "자격증 보기 (PDF)",
            certificateLink: "assets/docs/sertifikat maganghub batch 1.pdf"
        },
        {
            role: "모바일 개발",
            company: "Bangkit Academy — Google, GoTo & Traveloka",
            period: "2023년 2월 – 2023년 7월",
            location: "Purwokerto, 인도네시아",
            desc: "Kotlin을 사용하여 Android 앱 개발. Android Fundamental, SOLID 원칙, API 소비, Room, DataStore, MLKit 통합 적용. 6인 다학제 팀의 캡스톤 프로젝트 협업.",
            icon: "fas fa-graduation-cap",
            color: "bg-purple-600",
            certificateLabel: "자격증 보기 (PDF)",
            certificateLink: "assets/docs/sertifikat bangkit academy.pdf"
        }
    ],
    ja: [
        {
            role: "Flutter アプリ開発者",
            company: "PT Winnicode Garuda Teknologi",
            period: "2025年10月 – 2026年4月",
            location: "プルウォケルト、インドネシア",
            desc: "FlutterでAndroidニュースポータルアプリのUI設計・機能開発・機能テストを担当。バックエンドAPIとの連携、デバッグ、コードレビューの共同作業を実施。",
            icon: "fas fa-mobile-alt",
            color: "bg-blue-600",
            certificateLabel: "証明書を見る (PDF)",
            certificateLink: "assets/docs/sertifikat maganghub batch 1.pdf"
        },
        {
            role: "モバイル開発",
            company: "Bangkit Academy — Google, GoTo & Traveloka",
            period: "2023年2月 – 2023年7月",
            location: "プルウォケルト、インドネシア",
            desc: "KotlinでAndroidアプリを開発。Android Fundamental、SOLIDの原則、API消費、Room、DataStore、MLKit統合を適用。6名の多分野チームでキャップストーンプロジェクトに協力。",
            icon: "fas fa-graduation-cap",
            color: "bg-purple-600",
            certificateLabel: "証明書を見る (PDF)",
            certificateLink: "assets/docs/sertifikat bangkit academy.pdf"
        }
    ],
    zh: [
        {
            role: "Flutter 应用开发者",
            company: "PT Winnicode Garuda Teknologi",
            period: "2025年10月 – 2026年4月",
            location: "普尔沃克托，印度尼西亚",
            desc: "使用Flutter开发Android新闻门户应用，负责UI设计、功能开发及功能测试。完成后端API集成、调试及代码审查协作。",
            icon: "fas fa-mobile-alt",
            color: "bg-blue-600",
            certificateLabel: "查看证书 (PDF)",
            certificateLink: "assets/docs/sertifikat maganghub batch 1.pdf"
        },
        {
            role: "移动端开发",
            company: "Bangkit Academy — Google, GoTo & Traveloka",
            period: "2023年2月 – 2023年7月",
            location: "普尔沃克托，印度尼西亚",
            desc: "使用Kotlin开发Android应用，运用Android基础、SOLID原则、API调用、Room、DataStore及MLKit集成。参与6人跨学科团队的毕业项目协作。",
            icon: "fas fa-graduation-cap",
            color: "bg-purple-600",
            certificateLabel: "查看证书 (PDF)",
            certificateLink: "assets/docs/sertifikat bangkit academy.pdf"
        }
    ],
    fr: [
        {
            role: "Développeur Application Flutter",
            company: "PT Winnicode Garuda Teknologi",
            period: "Octobre 2025 – Avril 2026",
            location: "Purwokerto, Indonésie",
            desc: "Développement d'une application portail d'actualités Android avec Flutter, de la conception UI au test fonctionnel. Intégration API backend, débogage et révision de code en équipe.",
            icon: "fas fa-mobile-alt",
            color: "bg-blue-600",
            certificateLabel: "Voir le Certificat (PDF)",
            certificateLink: "assets/docs/sertifikat maganghub batch 1.pdf"
        },
        {
            role: "Développement Mobile",
            company: "Bangkit Academy — Google, GoTo & Traveloka",
            period: "Février 2023 – Juillet 2023",
            location: "Purwokerto, Indonésie",
            desc: "Développement d'applications Android avec Kotlin en appliquant les principes SOLID, Room, DataStore et l'intégration MLKit. Collaboration sur un projet Capstone avec 6 membres interdisciplinaires.",
            icon: "fas fa-graduation-cap",
            color: "bg-purple-600",
            certificateLabel: "Voir le Certificat (PDF)",
            certificateLink: "assets/docs/sertifikat bangkit academy.pdf"
        }
    ],
    ar: [
        {
            role: "مطور تطبيق Flutter",
            company: "PT Winnicode Garuda Teknologi",
            period: "أكتوبر 2025 – أبريل 2026",
            location: "بورووكيرتو، إندونيسيا",
            desc: "تطوير تطبيق بوابة أخبار Android باستخدام Flutter من تصميم الواجهة وتطوير الميزات إلى الاختبار الوظيفي. تكامل API الخلفي، تصحيح الأخطاء، والتعاون في مراجعة الكود.",
            icon: "fas fa-mobile-alt",
            color: "bg-blue-600",
            certificateLabel: "عرض الشهادة (PDF)",
            certificateLink: "assets/docs/sertifikat maganghub batch 1.pdf"
        },
        {
            role: "تطوير تطبيقات الموبايل",
            company: "Bangkit Academy — Google, GoTo & Traveloka",
            period: "فبراير 2023 – يوليو 2023",
            location: "بورووكيرتو، إندونيسيا",
            desc: "تطوير تطبيقات Android باستخدام Kotlin مع تطبيق أسس Android ومبادئ SOLID وRoom وDataStore وتكامل MLKit. التعاون في مشروع Capstone مع 6 أعضاء متعددي التخصصات.",
            icon: "fas fa-graduation-cap",
            color: "bg-purple-600",
            certificateLabel: "عرض الشهادة (PDF)",
            certificateLink: "assets/docs/sertifikat bangkit academy.pdf"
        }
    ]
};

const educationsData = {
    id: [
        {
            degree: "S1 Teknik Informatika",
            school: "Universitas Muhammadiyah Purwokerto",
            period: "Agustus 2020 – Agustus 2025",
            gpa: "IPK: 3.57 / 4.00 (Cumlaude)",
            desc: "Skripsi: Rancang Bangun Media Pembelajaran Pengenalan Pahlawan dan Tarian Pada Uang Rupiah Berbasis Augmented Reality. Mata kuliah relevan: Pemrograman Web, Pemrograman Mobile, Rekayasa Perangkat Lunak, Basis Data, Desain Multimedia, Grafika Komputer.",
            icon: "fas fa-graduation-cap",
            color: "from-blue-600 to-purple-600"
        }
    ],
    en: [
        {
            degree: "Bachelor of Computer Science (Informatics Engineering)",
            school: "Universitas Muhammadiyah Purwokerto",
            period: "August 2020 – August 2025",
            gpa: "GPA: 3.57 / 4.00 (Cum Laude)",
            desc: "Thesis: Design and Development of an Augmented Reality Learning Media Introducing Heroes and Dances on Indonesian Rupiah. Relevant courses: Web Programming, Mobile Programming, Software Engineering, Databases, Multimedia Design, Computer Graphics.",
            icon: "fas fa-graduation-cap",
            color: "from-blue-600 to-purple-600"
        }
    ],
    ko: [
        {
            degree: "정보공학 학사",
            school: "Universitas Muhammadiyah Purwokerto",
            period: "2020년 8월 – 2025년 8월",
            gpa: "GPA: 3.57 / 4.00 (우등)",
            desc: "졸업논문: 인도네시아 루피아 지폐의 영웅과 전통춤 소개 AR 학습 미디어 설계 및 개발. 관련 과목: 웹 프로그래밍, 모바일 프로그래밍, 소프트웨어 공학, 데이터베이스, 멀티미디어 설계, 컴퓨터 그래픽.",
            icon: "fas fa-graduation-cap",
            color: "from-blue-600 to-purple-600"
        }
    ],
    ja: [
        {
            degree: "情報工学 学士",
            school: "Universitas Muhammadiyah Purwokerto",
            period: "2020年8月 – 2025年8月",
            gpa: "GPA: 3.57 / 4.00 (優等)",
            desc: "卒業論文：ルピア紙幣の英雄と踊りを紹介するAR学習メディアの設計・開発。関連科目：Webプログラミング、モバイルプログラミング、ソフトウェア工学、データベース、マルチメディアデザイン、コンピュータグラフィックス。",
            icon: "fas fa-graduation-cap",
            color: "from-blue-600 to-purple-600"
        }
    ],
    zh: [
        {
            degree: "计算机科学学士（信息工程）",
            school: "Universitas Muhammadiyah Purwokerto",
            period: "2020年8月 – 2025年8月",
            gpa: "GPA: 3.57 / 4.00 (优等)",
            desc: "毕业论文：设计并开发基于AR的印尼卢比纸币英雄与舞蹈学习媒体。相关课程：网页编程、移动编程、软件工程、数据库、多媒体设计、计算机图形学。",
            icon: "fas fa-graduation-cap",
            color: "from-blue-600 to-purple-600"
        }
    ],
    fr: [
        {
            degree: "Licence en Informatique (Génie Informatique)",
            school: "Universitas Muhammadiyah Purwokerto",
            period: "Août 2020 – Août 2025",
            gpa: "GPA: 3.57 / 4.00 (Mention Très Bien)",
            desc: "Mémoire : Conception et développement d'un média d'apprentissage en réalité augmentée pour présenter les héros et danses sur les billets de roupie. Cours pertinents : Programmation Web, Mobile, Génie Logiciel, Bases de Données, Design Multimédia, Infographie.",
            icon: "fas fa-graduation-cap",
            color: "from-blue-600 to-purple-600"
        }
    ],
    ar: [
        {
            degree: "بكالوريوس علوم الحاسب (هندسة المعلوماتية)",
            school: "Universitas Muhammadiyah Purwokerto",
            period: "أغسطس 2020 – أغسطس 2025",
            gpa: "المعدل: 3.57 / 4.00 (مع مرتبة الشرف)",
            desc: "رسالة التخرج: تصميم وتطوير وسيلة تعليمية بتقنية الواقع المعزز لتعريف الأبطال والرقصات على الروبية الإندونيسية. المقررات ذات الصلة: برمجة الويب، برمجة الموبايل، هندسة البرمجيات، قواعد البيانات، تصميم الوسائط المتعددة، الحاسوبية الرسومية.",
            icon: "fas fa-graduation-cap",
            color: "from-blue-600 to-purple-600"
        }
    ]
};

// Certificates: titles translated, issuer/date stays
const certificatesData = {
    id: [
        { title: "Belajar Prinsip Pemrograman SOLID", issuer: "Dicoding Indonesia", date: "2023", icon: "fas fa-code", color: "bg-blue-100 text-blue-600", link: "https://www.dicoding.com/certificates/81P233YDOXOY" },
        { title: "Memulai Pemrograman Dengan Java", issuer: "Dicoding Indonesia", date: "2023", icon: "fab fa-java", color: "bg-indigo-100 text-indigo-600", link: "https://www.dicoding.com/certificates/1OP810YNVZQK" },
        { title: "Kelas Mengenal Pemrograman Komputer", issuer: "Codepolitan", date: "2022", icon: "fas fa-laptop-code", color: "bg-purple-100 text-purple-600", link: "https://www.codepolitan.com/c/KV2H6AW" },
        { title: "Belajar Dasar UX Design", issuer: "Dicoding Indonesia", date: "2023", icon: "fas fa-wand-magic-sparkles", color: "bg-pink-100 text-pink-600", link: "https://www.dicoding.com/certificates/QLZ9Q9L07Z5D" },
        { title: "Belajar Pengembangan Aplikasi Android Intermediate", issuer: "Dicoding Indonesia", date: "2023", icon: "fab fa-android", color: "bg-green-100 text-green-600", link: "https://www.dicoding.com/certificates/MRZMQW8JLPYQ" },
        { title: "Learning HTML", issuer: "Sololearn", date: "2021", icon: "fab fa-html5", color: "bg-orange-100 text-orange-600", link: "https://www.sololearn.com/en/certificates/CT-GHXQUSVS" },
        { title: "Learning Javascript and JQuery From Scratch", issuer: "Eduonix", date: "2021", icon: "fab fa-js", color: "bg-yellow-100 text-yellow-600", link: "https://www.eduonix.com/certificate/504e8eb244" },
        { title: "Front End Development - HTML", issuer: "Great Learning", date: "2021", icon: "fas fa-border-all", color: "bg-blue-100 text-blue-600", link: "https://olympus.mygreatlearning.com/courses/12761/certificate" },
        { title: "CSS Properties", issuer: "Great Learning", date: "2021", icon: "fab fa-css3-alt", color: "bg-sky-100 text-sky-700", link: "https://olympus.mygreatlearning.com/courses/47912/certificate" },
        { title: "PHP for Beginners", issuer: "Great Learning", date: "2021", icon: "fab fa-php", color: "bg-purple-100 text-purple-600", link: "https://olympus.mygreatlearning.com/courses/61375/certificate" },
        { title: "Belajar Membuat Aplikasi Android dengan Jetpack Compose", issuer: "Dicoding Indonesia", date: "2023", icon: "fas fa-layer-group", color: "bg-cyan-100 text-cyan-600", link: "https://www.dicoding.com/certificates/ERZRG125QPYV" },
        { title: "Learning CSS", issuer: "Sololearn", date: "2022", icon: "fab fa-css3-alt", color: "bg-slate-100 text-slate-700", link: "https://www.sololearn.com/en/certificates/CT-YKS2SYB5" },
        { title: "Learning JavaScript", issuer: "Sololearn", date: "2021", icon: "fab fa-js", color: "bg-yellow-100 text-yellow-600", link: "https://www.sololearn.com/en/certificates/CT-FA1TYJET" },
        { title: "Learning PHP", issuer: "Sololearn", date: "2022", icon: "fab fa-php", color: "bg-indigo-100 text-indigo-600", link: "https://www.sololearn.com/en/certificates/CT-RPGL7QKW" },
        { title: "Belajar Membuat Aplikasi Android untuk Pemula", issuer: "Dicoding Indonesia", date: "2023", icon: "fas fa-mobile-alt", color: "bg-green-100 text-green-600", link: "https://www.dicoding.com/certificates/1RXYO80W1PVM" },
        { title: "Memulai Pemrograman Dengan Kotlin", issuer: "Dicoding Indonesia", date: "2023", icon: "fab fa-kotlin", color: "bg-purple-100 text-purple-600", link: "https://www.dicoding.com/certificates/MRZM43E03XYQ" },
        { title: "Belajar Fundamental Aplikasi Android", issuer: "Dicoding Indonesia", date: "2023", icon: "fab fa-android", color: "bg-blue-100 text-blue-600", link: "https://www.dicoding.com/certificates/1OP80D221XQK" },
        { title: "Sertifikat Kelas Belajar JavaScript Dasar", issuer: "Codepolitan", date: "2021", icon: "fab fa-js", color: "bg-orange-100 text-orange-600", link: "https://www.codepolitan.com/c/RXUGLST" },
        { title: "Sertifikat Kelas Belajar Dasar-dasar HTML dan CSS", issuer: "Codepolitan", date: "2021", icon: "fas fa-code", color: "bg-slate-100 text-slate-700", link: "https://www.codepolitan.com/c/WKWHXJJ/" },
        { title: "Introducing Coding for Beginners — HTML & CSS Online Course", issuer: "BitDegree", date: "2021", icon: "fab fa-html5", color: "bg-orange-100 text-orange-600", link: "assets/docs/Introducing Coding for Beginners - an HTML and CSS Online Course.pdf" },
        { title: "Learn Command Line — Mac & Linux Command Line Tutorial", issuer: "BitDegree", date: "2021", icon: "fas fa-terminal", color: "bg-slate-100 text-slate-600", link: "assets/docs/Learn Command Line - Mac and Linux Command Line Tutorial.pdf" },
        { title: "Learn JavaScript — Quick Course for Beginners", issuer: "BitDegree", date: "2021", icon: "fab fa-js", color: "bg-yellow-100 text-yellow-600", link: "assets/docs/Learn JavaScript - Quick Course for Beginners.pdf" },
        { title: "PyQt5 — Create an AMAZING Calculator!!", issuer: "BitDegree", date: "2021", icon: "fab fa-python", color: "bg-blue-100 text-blue-600", link: "assets/docs/PyQt5 - Create an AMAZING Calculator!!.pdf" },
        { title: "Proposal Program Kegiatan Mahasiswa (PKM)", issuer: "Universitas Muhammadiyah Purwokerto", date: "2025", icon: "fas fa-scroll", color: "bg-emerald-100 text-emerald-600", link: "assets/docs/sertifikat rendiano pkm.pdf" }
    ],
    en: [
        { title: "Learn SOLID Programming Principles", issuer: "Dicoding Indonesia", date: "2023", icon: "fas fa-code", color: "bg-blue-100 text-blue-600", link: "https://www.dicoding.com/certificates/81P233YDOXOY" },
        { title: "Getting Started with Java Programming", issuer: "Dicoding Indonesia", date: "2023", icon: "fab fa-java", color: "bg-indigo-100 text-indigo-600", link: "https://www.dicoding.com/certificates/1OP810YNVZQK" },
        { title: "Introduction to Computer Programming", issuer: "Codepolitan", date: "2022", icon: "fas fa-laptop-code", color: "bg-purple-100 text-purple-600", link: "https://www.codepolitan.com/c/KV2H6AW" },
        { title: "Learning UX Design Fundamentals", issuer: "Dicoding Indonesia", date: "2023", icon: "fas fa-wand-magic-sparkles", color: "bg-pink-100 text-pink-600", link: "https://www.dicoding.com/certificates/QLZ9Q9L07Z5D" },
        { title: "Intermediate Android App Development", issuer: "Dicoding Indonesia", date: "2023", icon: "fab fa-android", color: "bg-green-100 text-green-600", link: "https://www.dicoding.com/certificates/MRZMQW8JLPYQ" },
        { title: "Learning HTML", issuer: "Sololearn", date: "2021", icon: "fab fa-html5", color: "bg-orange-100 text-orange-600", link: "https://www.sololearn.com/en/certificates/CT-GHXQUSVS" },
        { title: "Learning Javascript and JQuery From Scratch", issuer: "Eduonix", date: "2021", icon: "fab fa-js", color: "bg-yellow-100 text-yellow-600", link: "https://www.eduonix.com/certificate/504e8eb244" },
        { title: "Front End Development - HTML", issuer: "Great Learning", date: "2021", icon: "fas fa-border-all", color: "bg-blue-100 text-blue-600", link: "https://olympus.mygreatlearning.com/courses/12761/certificate" },
        { title: "CSS Properties", issuer: "Great Learning", date: "2021", icon: "fab fa-css3-alt", color: "bg-sky-100 text-sky-700", link: "https://olympus.mygreatlearning.com/courses/47912/certificate" },
        { title: "PHP for Beginners", issuer: "Great Learning", date: "2021", icon: "fab fa-php", color: "bg-purple-100 text-purple-600", link: "https://olympus.mygreatlearning.com/courses/61375/certificate" },
        { title: "Building Android Apps with Jetpack Compose", issuer: "Dicoding Indonesia", date: "2023", icon: "fas fa-layer-group", color: "bg-cyan-100 text-cyan-600", link: "https://www.dicoding.com/certificates/ERZRG125QPYV" },
        { title: "Learning CSS", issuer: "Sololearn", date: "2022", icon: "fab fa-css3-alt", color: "bg-slate-100 text-slate-700", link: "https://www.sololearn.com/en/certificates/CT-YKS2SYB5" },
        { title: "Learning JavaScript", issuer: "Sololearn", date: "2021", icon: "fab fa-js", color: "bg-yellow-100 text-yellow-600", link: "https://www.sololearn.com/en/certificates/CT-FA1TYJET" },
        { title: "Learning PHP", issuer: "Sololearn", date: "2022", icon: "fab fa-php", color: "bg-indigo-100 text-indigo-600", link: "https://www.sololearn.com/en/certificates/CT-RPGL7QKW" },
        { title: "Android App Development for Beginners", issuer: "Dicoding Indonesia", date: "2023", icon: "fas fa-mobile-alt", color: "bg-green-100 text-green-600", link: "https://www.dicoding.com/certificates/1RXYO80W1PVM" },
        { title: "Getting Started with Kotlin Programming", issuer: "Dicoding Indonesia", date: "2023", icon: "fab fa-kotlin", color: "bg-purple-100 text-purple-600", link: "https://www.dicoding.com/certificates/MRZM43E03XYQ" },
        { title: "Android App Fundamentals", issuer: "Dicoding Indonesia", date: "2023", icon: "fab fa-android", color: "bg-blue-100 text-blue-600", link: "https://www.dicoding.com/certificates/1OP80D221XQK" },
        { title: "Basic JavaScript Course", issuer: "Codepolitan", date: "2021", icon: "fab fa-js", color: "bg-orange-100 text-orange-600", link: "https://www.codepolitan.com/c/RXUGLST" },
        { title: "HTML & CSS Fundamentals Course", issuer: "Codepolitan", date: "2021", icon: "fas fa-code", color: "bg-slate-100 text-slate-700", link: "https://www.codepolitan.com/c/WKWHXJJ/" },
        { title: "Introducing Coding for Beginners — HTML & CSS Online Course", issuer: "BitDegree", date: "2021", icon: "fab fa-html5", color: "bg-orange-100 text-orange-600", link: "assets/docs/Introducing Coding for Beginners - an HTML and CSS Online Course.pdf" },
        { title: "Learn Command Line — Mac & Linux Command Line Tutorial", issuer: "BitDegree", date: "2021", icon: "fas fa-terminal", color: "bg-slate-100 text-slate-600", link: "assets/docs/Learn Command Line - Mac and Linux Command Line Tutorial.pdf" },
        { title: "Learn JavaScript — Quick Course for Beginners", issuer: "BitDegree", date: "2021", icon: "fab fa-js", color: "bg-yellow-100 text-yellow-600", link: "assets/docs/Learn JavaScript - Quick Course for Beginners.pdf" },
        { title: "PyQt5 — Create an AMAZING Calculator!!", issuer: "BitDegree", date: "2021", icon: "fab fa-python", color: "bg-blue-100 text-blue-600", link: "assets/docs/PyQt5 - Create an AMAZING Calculator!!.pdf" },
        { title: "Student Scientific Program (PKM) Proposal", issuer: "Universitas Muhammadiyah Purwokerto", date: "2025", icon: "fas fa-scroll", color: "bg-emerald-100 text-emerald-600", link: "assets/docs/sertifikat rendiano pkm.pdf" }
    ]
};
// For languages without full cert translation, fall back to 'en'
['ko', 'ja', 'zh', 'fr', 'ar'].forEach(lang => { certificatesData[lang] = certificatesData.en; });

// =============================================
//  GET LOCALIZED DATA
// =============================================

function getProjects() {
    const lang = getLang();
    return projectsData[lang] || projectsData.en;
}
function getSkills() {
    const lang = getLang();
    return skillsData[lang] || skillsData.en;
}
function getSkillTags() {
    const lang = getLang();
    const soft = skillTagsData.soft[lang] || skillTagsData.soft.en;
    return [...skillTagsData.technical, ...soft];
}
function getExperiences() {
    const lang = getLang();
    return experiencesData[lang] || experiencesData.en;
}
function getEducations() {
    const lang = getLang();
    return educationsData[lang] || educationsData.en;
}
function getCertificates() {
    const lang = getLang();
    return certificatesData[lang] || certificatesData.en;
}

// =============================================
//  RENDER FUNCTIONS
// =============================================

function renderProjects() {
    const container = document.getElementById('projects-container');
    if (!container) return;
    const projects = getProjects();

    container.innerHTML = projects.map((item, i) => `
        <div class="reveal reveal-delay-${(i % 3) + 1} group relative bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 card-hover card-accent-top">
            <div class="h-48 overflow-hidden relative bg-slate-100">
                <img src="${item.img}" alt="${item.title}"
                     class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                     onerror="this.parentElement.innerHTML='<div class=\'w-full h-full flex items-center justify-center text-slate-300\'><i class=\'fas fa-image text-4xl\'></i></div>'">
                <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5">
                    <a href="${item.link}" class="text-white text-sm font-semibold flex items-center gap-2">
                        ${getT('project_detail')} <i class="fas fa-arrow-right text-xs"></i>
                    </a>
                </div>
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

    const skills = getSkills();
    const skillTags = getSkillTags();

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
    const experiences = getExperiences();

    container.innerHTML = `
        <div class="relative pl-8 space-y-10">
            <div class="absolute left-3 top-0 bottom-0 w-0.5 timeline-line rounded-full"></div>
            ${experiences.map((exp) => `
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
                                ${exp.certificateLabel}
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
    const educations = getEducations();

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

    const certificates = getCertificates();
    const PER_SLIDE = 9;
    const totalSlides = Math.ceil(certificates.length / PER_SLIDE);
    let current = 0;

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
                   title="${getT('cert_view')}">
                    <i class="fas fa-external-link-alt text-xs"></i>
                </a>
            </div>`;
    }

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

    dotsEl.innerHTML = '';
    for (let s = 0; s < totalSlides; s++) {
        const dot = document.createElement('button');
        dot.className = 'cert-dot' + (s === 0 ? ' active' : '');
        dot.setAttribute('aria-label', `${getT('cert_page')} ${s + 1}`);
        dot.addEventListener('click', () => goTo(s));
        dotsEl.appendChild(dot);
    }

    function updateUI() {
        track.style.transform = `translateX(-${current * 100}%)`;
        dotsEl.querySelectorAll('.cert-dot').forEach((d, i) => {
            d.classList.toggle('active', i === current);
        });
        const start = current * PER_SLIDE + 1;
        const end = Math.min(start + PER_SLIDE - 1, certificates.length);
        if (pageInfo) pageInfo.textContent = `${start}–${end} ${getT('cert_of')} ${certificates.length} ${getT('cert_items')}`;
        if (prevBtn) prevBtn.disabled = current === 0;
        if (nextBtn) nextBtn.disabled = current === totalSlides - 1;
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
    document.getElementById('lang-menu')?.classList.add('hidden');
    const chevron = document.getElementById('lang-chevron');
    if (chevron) chevron.style.transform = '';

    // 1. Translate all data-t elements
    document.querySelectorAll('[data-t]').forEach(el => {
        const key = el.getAttribute('data-t');
        const val = translations[lang]?.[key] || translations['id']?.[key];
        if (val) el.innerText = val;
    });

    // 2. Translate placeholder attributes
    document.querySelectorAll('[data-ph]').forEach(el => {
        const key = el.getAttribute('data-ph');
        const val = translations[lang]?.[key] || translations['id']?.[key];
        if (val) el.placeholder = val;
    });

    // 3. Translate aria-label attributes
    document.querySelectorAll('[data-aria]').forEach(el => {
        const key = el.getAttribute('data-aria');
        const val = translations[lang]?.[key] || translations['id']?.[key];
        if (val) el.setAttribute('aria-label', val);
    });

    // 4. Re-render JS-driven sections with new language
    renderProjects();
    renderSkills();
    renderExperience();
    renderEducation();
    renderCertificates();

    // 5. RTL support
    document.body.dir = (lang === 'ar') ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
}

// =============================================
//  CONTACT FORM
// =============================================

document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    renderSkills();
    renderExperience();
    renderEducation();
    renderCertificates();

    const savedLang = localStorage.getItem('selectedLang') || 'id';
    changeLang(savedLang);

    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button[type="submit"]');
            btn.innerHTML = `<i class="fas fa-check"></i> ${getT('form_sent')}`;
            btn.style.background = 'linear-gradient(135deg,#10b981,#06b6d4)';
            btn.disabled = true;
            setTimeout(() => {
                btn.innerHTML = `<i class="fas fa-paper-plane"></i> <span data-t="form_send">${getT('form_send')}</span>`;
                btn.style.background = '';
                btn.disabled = false;
                form.reset();
            }, 3000);
        });
    }
});
