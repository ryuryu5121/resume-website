const projects = [
    {
        id: 1,
        title: "ハンバーガー屋運営アプリ",
        description: "HTML,CSS,Javascriptで作成したアプリケーション",
        image: "../media/make-burger.png",
        technologies: ["HTML", "CSS", "Javascript"],
        date: "2022-06-15",
        link: "project-details.html?id=1",
        features: [
            "クリックするとお金が貯まる",
            "溜まったお金で新たなお店を出店したり、株を買うことが可能",
            "稼いで稼ぎまくれ！！"
        ],
        process: "DOMを使いながらアプリケーションの実装に取り組みました",
        learnings: "フロントエンド技術の理解とデザインの知識を習得しました"
    },
    {
        id: 2,
        title: "ファイナンシャルプランナー向けマッチング・予約サービス",
        description: "お金に関する相談がしたいユーザーとファイナンシャルプランナーをマッチングするサービス",
        image: "../media/fp-app.png",
        technologies: ["Ruby", "Ruby on Rails", "Javascript"],
        date: "2023-08-01",
        link: "project-details.html?id=2",
        features: [
            "ファイナンシャルプランナー予約機能",
            "勤怠登録機能",
            "家計診断機能"
        ],
        process: "rails tutorialを通じて学んだ知識を活用してアプリを活用しました。",
        learnings: "フレームワークを活用した開発方法とデータベースの設計等の要件定義に関する経験を積んだ。"
    },
    {
        id: 3,
        title: "郵便番号データ取得API&デモアプリ",
        description: "GOを用いたapiアプリケーション",
        image: "../media/go-api.png",
        technologies: ["HTML", "CSS", "Javascript", "GO"],
        date: "2024-4-20",
        link: "project-details.html?id=3",
        features: [
            "郵便番号一覧機能",
            "郵便番号検索機能",
            "郵便番号詳細表示機能"
        ],
        process: "チームで開発に取り組みました。全員で設計に取り組み、機能を分担して開発しました。",
        learnings: "GOを用いた開発経験やチームで開発する経験を得られました。"
    },
    {
        id: 4,
        title: "グループチャットシステム",
        description: "TCP,UDPを用いたチャットシステム",
        image: "../media/oncline-chat-messanger.png",
        technologies: ["Python"],
        date: "2024-3-10",
        link: "project-details.html?id=3",
        features: [
            "グループチャット機能",
            "グループ作成機能",
            "ユーザー認証機能"
        ],
        process: "アジャイル開発方法論を採用し、2週間のスプリントで開発を進めました。",
        learnings: "フロントエンド技術の深い理解と、ユーザー体験を重視したデザインの重要性を学びました。"
    },
];

// スキルと経験のデータ
const skills = [
    {
        year: 2020,
        title: "プログラミング学習開始",
        description: "大学入学前からに興味を持っていたため、独学で学習を始める。機械学習モデルの構築やに挑戦する。"
    },
    {
        year: 2021,
        title: "アプリの事を知り、学習を始める",
        description: "大学のプログラミング研究会に所属したことで、アプリの事を知る。等のフロントエンド領域の学習に取り組んだが、大学が忙しくなるにつれてあまり時間が取れなくなっていく"
    },
    {
        year: 2022,
        title: "友人とハッカソンに参加・インターンを始める",
        description: "研究会の友人と共にハッカソンにはじめて参加する。また、そこでのつながりからインターンに参加させていただく。インターン参加前の事前課題やインターンを通じてバックエンド領域の面白さを知る"
    },
    {
        year: 2023,
        title: "バックエンドエンジニアとして長期インターン",
        description: "バックエンド領域の学習を始める。２社目のインターン先ではバックエンドエンジニアとして機能追加を担当し、要件定義から実装までやり遂げる。"
    }
];

const techStack = {
    frontend: [
        { name: "HTML", icon: "html5-plain-wordmark" },
        { name: "CSS", icon: "css3-plain-wordmark" },
        { name: "JavaScript", icon: "javascript-plain" },
        { name: "TypeScript", icon: "typescript-plain" },
        { name: "React", icon: "react-plain-wordmark" },
        { name: "Bootstrap", icon: "bootstrap-plain-wordmark" }
    ],
    backend: [
        { name: "Ruby", icon: "ruby-plain-wordmark" },
        { name: "Rails", icon: "rails-plain-wordmark" },
        { name: "Python", icon: "python-plain-wordmark" },
        { name: "Go", icon: "go-plain-wordmark" },
        { name: "PHP", icon: "php-plain" },
        { name: "Laravel", icon: "laravel-plain-wordmark" }
    ],
    infra: [
        { name: "AWS", icon: "amazonwebservices-plain-wordmark" },
        { name: "Nginx", icon: "nginx-plain-wordmark" },
        { name: "Docker", icon: "docker-plain-wordmark" }
    ]
};

// DOMが読み込まれた後に実行される関数
document.addEventListener('DOMContentLoaded', () => {
    loadPageContent();
    setupNavigation();
    displayTechStack();
});

function displayTechStack() {
    for (const [category, technologies] of Object.entries(techStack)) {
        const iconArea = document.querySelector(`#${category}-icons-area .icon-grid`);
        if (iconArea) {
            iconArea.innerHTML = technologies.map(tech => `
                <div class="icon-item">
                    <i class="devicon-${tech.icon}" title="${tech.name}"></i>
                    <span>${tech.name}</span>
                </div>
            `).join('');
        }
    }
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
        recentProjects.style.display = 'flex';
        recentProjects.style.justifyContent = 'space-between';
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
        projectGrid.style.display = 'grid';
        projectGrid.style.gridTemplateColumns = 'repeat(3, 1fr)';
        projectGrid.style.gap = '20px';
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
            const techIcons = project.technologies.map(tech => {
                const techInfo = [...techStack.frontend, ...techStack.backend, ...techStack.infra].find(t => t.name.toLowerCase() === tech.toLowerCase());
                return techInfo ? `<i class="devicon-${techInfo.icon}" title="${techInfo.name}"></i>` : '';
            }).join('');
            
            detailsContainer.innerHTML = `
                <h1>${project.title}</h1>
                <img src="${project.image}" alt="${project.title}" class="project-hero-image">
                <div class="project-info">
                    <div class="project-description">
                        <h2>プロジェクト概要</h2>
                        <p>${project.description}</p>
                    </div>
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
                    <h2>主な機能</h2>
                    <ul>
                        ${project.features ? project.features.map(feature => `<li>${feature}</li>`).join('') : '<li>詳細な機能情報は準備中です。</li>'}
                    </ul>
                    <h2>開発プロセス</h2>
                    <p>${project.process || 'このプロジェクトの開発プロセスについての詳細情報は準備中です。'}</p>
                    <h2>学んだこと</h2>
                    <p>${project.learnings || 'このプロジェクトを通じて学んだことについての詳細情報は準備中です。'}</p>
                </div>
                <a href="projects.html" class="back-button">プロジェクト一覧に戻る</a>
            `;
        }
    } else {
        // プロジェクトが見つからない場合のエラーハンドリング
        const detailsContainer = document.getElementById('project-details');
        if (detailsContainer) {
            detailsContainer.innerHTML = '<h1>プロジェクトが見つかりません</h1><p>指定されたプロジェクトIDに対応するプロジェクトが存在しません。</p>';
        }
    }
}

// プロジェクトカードを生成する関数
function createProjectCard(project) {
    const techIcons = project.technologies.map(tech => {
        const techInfo = [...techStack.frontend, ...techStack.backend, ...techStack.infra]
            .find(t => t.name.toLowerCase() === tech.toLowerCase());
        return techInfo 
            ? `<i class="devicon-${techInfo.icon}" title="${tech.name}"></i>`
            : '';
    }).join('');
    
    return `
        <div class="project-card" onclick="window.location.href='${project.link}'">
            <div class="project-image" style="background-image: url('${project.image}')"></div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <div class="project-technologies">
                    ${techIcons}
                </div>
                <p>${project.description}</p>
                <div class="project-footer">
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
