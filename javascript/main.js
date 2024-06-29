// プロジェクトデータ
const projects = [
    {
        id: 1,
        title: "ECサイト開発",
        description: "オンラインショッピングの新しい形を提案",
        image: "images/projects/ecommerce.jpg",
        technologies: ["react", "nodejs", "mongodb", "express"],
        date: "2023-06-15",
        link: "project-details.html?id=1"
    },
    {
        id: 2,
        title: "ポートフォリオサイト",
        description: "私のスキルと経験を紹介",
        image: "images/projects/portfolio.jpg",
        technologies: ["html", "css", "javascript"],
        date: "2023-08-01",
        link: "project-details.html?id=2"
    },
    {
        id: 3,
        title: "天気予報アプリ",
        description: "リアルタイムの気象情報をお届け",
        image: "images/projects/weather-app.jpg",
        technologies: ["vuejs", "api", "css3"],
        date: "2023-10-20",
        link: "project-details.html?id=3"
    }
];

// スキルと経験のデータ
const skills = [
    {
        year: 2020,
        title: "プログラミング学習開始",
        description: "HTML, CSS, JavaScript の基礎を学び始める"
    },
    {
        year: 2021,
        title: "フロントエンド開発に注力",
        description: "React.js と Vue.js のフレームワークを習得"
    },
    {
        year: 2022,
        title: "バックエンド技術の学習",
        description: "Node.js, Express, MongoDB でサーバーサイド開発を学ぶ"
    },
    {
        year: 2023,
        title: "フルスタック開発者として成長",
        description: "複数のフルスタックプロジェクトを完成させる"
    }
];

// DOMが読み込まれた後に実行される関数
document.addEventListener('DOMContentLoaded', () => {
    loadPageContent();
    setupNavigation();
});

function loadHeader() {
    fetch("header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-placeholder").innerHTML = data;
        })
        .catch(error => console.error('Error loading header:', error));
}

// ページコンテンツを読み込む関数
function loadPageContent() {
    const path = window.location.pathname;

    if (path.includes('index.html') || path === '/') {
        loadHomePage();
    } else if (path.includes('skills.html')) {
        loadSkillsPage();
    } else if (path.includes('projects.html')) {
        loadProjectsPage();
    } else if (path.includes('project-details.html')) {
        loadProjectDetails();
    }
}

// ホームページのコンテンツを読み込む関数
function loadHomePage() {
    const recentProjects = document.querySelector('.project-cards');
    if (recentProjects) {
        recentProjects.innerHTML = projects.slice(0, 3).map(createProjectCard).join('');
    }
}

// スキルページのコンテンツを読み込む関数
function loadSkillsPage() {
    const timeline = document.querySelector('.timeline');
    if (timeline) {
        timeline.innerHTML = skills.map(createTimelineItem).join('');
    }
}

// プロジェクトページのコンテンツを読み込む関数
function loadProjectsPage() {
    const projectGrid = document.querySelector('.project-grid');
    if (projectGrid) {
        projectGrid.innerHTML = projects.map(createProjectCard).join('');
    }
}

// プロジェクト詳細ページのコンテンツを読み込む関数
function loadProjectDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = parseInt(urlParams.get('id'));
    const project = projects.find(p => p.id === projectId);

    if (project) {
        document.title = `${project.title} - My Portfolio`;
        const detailsContainer = document.getElementById('project-details');
        if (detailsContainer) {
            const techIcons = project.technologies.map(tech => `<i class="devicon-${tech}-plain" title="${tech}"></i>`).join('');
            
            detailsContainer.innerHTML = `
                <h1>${project.title}</h1>
                <img src="${project.image}" alt="${project.title}" class="project-hero-image">
                <div class="project-info">
                    <p class="project-description">${project.description}</p>
                    <div class="project-meta">
                        <div class="project-technologies">
                            <h3>使用技術:</h3>
                            <div class="tech-icons">${techIcons}</div>
                        </div>
                        <div class="project-date">
                            <h3>作成日:</h3>
                            <p>${project.date}</p>
                        </div>
                    </div>
                </div>
                <div class="project-content">
                    <h2>プロジェクトの詳細</h2>
                    <p>ここにプロジェクトの詳細な説明を記述します。目的、課題、解決策、結果などを含めることができます。</p>
                    <h2>主な機能</h2>
                    <ul>
                        <li>機能1の説明</li>
                        <li>機能2の説明</li>
                        <li>機能3の説明</li>
                    </ul>
                    <h2>開発プロセス</h2>
                    <p>プロジェクトの開発プロセスや直面した課題、それらをどのように克服したかについて説明します。</p>
                </div>
                <a href="projects.html" class="back-button">プロジェクト一覧に戻る</a>
            `;
        }
    }
}

// プロジェクトカードを生成する関数
function createProjectCard(project) {
    const techIcons = project.technologies.map(tech => `<i class="devicon-${tech}-plain" title="${tech}"></i>`).join('');
    
    return `
        <div class="project-card" onclick="window.location.href='${project.link}'">
            <div class="project-image" style="background-image: url('${project.image}')"></div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-footer">
                    <div class="project-technologies">
                        ${techIcons}
                    </div>
                    <div class="project-date">${project.date}</div>
                </div>
            </div>
        </div>
    `;
}

// スキルタイムラインアイテムを生成する関数
function createTimelineItem(skill, index) {
    return `
        <div class="timeline-item ${index % 2 === 0 ? 'left' : 'right'}">
            <div class="timeline-content">
                <h2>${skill.year}</h2>
                <h3>${skill.title}</h3>
                <p>${skill.description}</p>
            </div>
        </div>
    `;
}

// ナビゲーションのセットアップ
function setupNavigation() {
    // スムーズスクロール
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // ナビゲーションのアクティブ状態
    const currentPage = window.location.pathname.split("/").pop();
    document.querySelectorAll('nav a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

// ページトップへ戻るボタンの制御
window.addEventListener('scroll', () => {
    const scrollTopButton = document.querySelector('.scroll-top');
    if (scrollTopButton) {
        if (window.pageYOffset > 100) {
            scrollTopButton.style.display = "block";
        } else {
            scrollTopButton.style.display = "none";
        }
    }
});
