const projectData = {
    vnce: {
        title: "我用 AI 和 Vibe Coding，把《新概念英语》重做了一遍",
        author: "肖斌 (Xiao Bin)",
        date: "2025-12-28",
        description: "拒绝浮夸，回归学习本质。Visual NCE：一个免费、沉浸式的可视化英语学习网站。",
        content: `
            <div class="detail-content">
                <h1>我用 AI 和 Vibe Coding，把《新概念英语》重做了一遍</h1>
                <div class="meta">作者: 肖斌 (Xiao Bin) | 发布日期: 2025-12-28</div>
                
                <p class="main-text">最近我做了一个小小的实验：利用 <strong>AI 绘图</strong>能力，结合最新的 <strong>Vibe Coding</strong> 开发模式，把经典的《新概念英语》重新“装修”了一遍，做成了一个完全免费的英语学习网站——<strong>Visual NCE</strong>。</p>
                
                <p>没有复杂的套路，初衷很简单：我希望英语学习不再是枯燥的“背课文”，而是像看漫画一样有趣、自然。</p>

                <section>
                    <h3>01. 经典教材的“视觉化”重生</h3>
                    <p>《新概念英语》是一套非常优秀的教材，但对于今天的学习者来说，纯文字的排版在某种程度上确实容易让人产生畏难情绪——也就是大家常说的“打开书就想困”。</p>
                    <img src="uploaded_image_0_1767160607399.jpg" alt="Visual NCE 首页">
                    <p>我选择了吉卜力（Ghibli）的画风，为每一课都生成了专属的题图。当你打开网站时，不再是密密麻麻的单词表，而是一张张由 AI 绘制的故事场景。</p>
                </section>

                <section>
                    <h3>02. 技术赋能：Vibe Coding 带来的可能性</h3>
                    <p>作为一个程序员，我最近也在实践 Andrej Karpathy 提到的 <strong>Vibe Coding</strong>（氛围编码）。简单来说，就是利用 AI 辅助编程，快速将脑海中的创意落地。</p>
                    <img src="uploaded_image_1_1767160607399.jpg" alt="沉浸式学习界面">
                    <p>在学习界面，我去掉了所有多余的干扰元素。这里没有广告，没有付费解锁，只有纯粹的内容。你可以一边听着原版音频，一边看着插图，像看连载漫画一样刷完一课又一课。</p>
                </section>

                <section>
                    <h3>03. 始于颜值，忠于内容</h3>
                    <p>当然，光有好看的皮囊是不够的。为了让它真正具有学习价值，我对每一句课文都进行了深度处理。</p>
                    <img src="uploaded_image_2_1767160607399.jpg" alt="句子深度解析">
                    <ul>
                        <li><strong>句法分析</strong>：点击任意句子，都有详细的语法结构拆解。</li>
                        <li><strong>词汇详解</strong>：哪里不会点哪里，单词的词性、含义一目了然。</li>
                    </ul>
                </section>

                <div style="text-align: center;">
                    <a href="https://nce.xiao27.com" target="_blank" class="visit-link">🌏 立即访问体验</a>
                </div>
            </div>
        `
    }
};

function openDetails(projectId) {
    const project = projectData[projectId];
    if (!project) return;

    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = project.content;

    const modal = document.getElementById('projectModal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scroll
}

function closeDetails() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto'; // Restore scroll
}

// Fade-in animation on scroll
document.addEventListener('DOMContentLoaded', () => {
    const faders = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});
