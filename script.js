// Sample mods data
const modsData = [
    {
        id: 1,
        title: "Advanced UI Theme",
        category: "ui",
        description: "Tema UI modern dengan desain gelap yang elegan dan responsif",
        author: "DesignMaster",
        rating: 4.8,
        downloads: 1250,
        image: "🎨",
        downloadLink: "#"
    },
    {
        id: 2,
        title: "Game Enhancer Pro",
        category: "game",
        description: "Tingkatkan performa game dengan mod optimisasi grafis canggih",
        author: "GameDev",
        rating: 4.6,
        downloads: 2340,
        image: "🎮",
        downloadLink: "#"
    },
    {
        id: 3,
        title: "App Customizer",
        category: "app",
        description: "Personalisasi aplikasi Anda dengan berbagai pilihan warna dan font",
        author: "CustomPro",
        rating: 4.7,
        downloads: 890,
        image: "📱",
        downloadLink: "#"
    },
    {
        id: 4,
        title: "Dark Mode Master",
        category: "ui",
        description: "Mode gelap sempurna untuk mengurangi kelelahan mata di malam hari",
        author: "NightCoder",
        rating: 4.9,
        downloads: 3450,
        image: "🌙",
        downloadLink: "#"
    },
    {
        id: 5,
        title: "Gaming FPS Boost",
        category: "game",
        description: "Optimalkan FPS dan mengurangi lag untuk pengalaman bermain yang lebih smooth",
        author: "PerformanceKing",
        rating: 4.5,
        downloads: 2890,
        image: "⚡",
        downloadLink: "#"
    },
    {
        id: 6,
        title: "Productivity Suite",
        category: "app",
        description: "Kumpulan tools produktivitas untuk meningkatkan efisiensi kerja Anda",
        author: "ProTools",
        rating: 4.7,
        downloads: 1560,
        image: "📊",
        downloadLink: "#"
    },
    {
        id: 7,
        title: "Neon Glow Theme",
        category: "ui",
        description: "Tema futuristik dengan efek cahaya neon yang memukau",
        author: "ArtisticDev",
        rating: 4.8,
        downloads: 2120,
        image: "✨",
        downloadLink: "#"
    },
    {
        id: 8,
        title: "RPG Quest Mod",
        category: "game",
        description: "Tambahkan quest baru dan konten eksklusif untuk RPG favorit Anda",
        author: "QuestMaker",
        rating: 4.6,
        downloads: 1780,
        image: "🗡️",
        downloadLink: "#"
    }
];

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    renderMods(modsData);
    setupNavigation();
});

// Render mods to grid
function renderMods(mods) {
    const modsGrid = document.getElementById('modsGrid');
    modsGrid.innerHTML = '';
    
    if (mods.length === 0) {
        modsGrid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-muted);"><p>Tidak ada mods yang ditemukan</p></div>';
        return;
    }
    
    mods.forEach(mod => {
        const modCard = document.createElement('div');
        modCard.className = 'mod-card';
        modCard.innerHTML = `
            <div class="mod-image">${mod.image}</div>
            <div class="mod-content">
                <span class="mod-category">${mod.category.toUpperCase()}</span>
                <h3 class="mod-title">${mod.title}</h3>
                <p class="mod-description">${mod.description}</p>
                <p class="mod-author"><i class="fas fa-user"></i> ${mod.author}</p>
                <div class="mod-footer">
                    <a href="${mod.downloadLink}" class="mod-download">Download</a>
                    <div class="mod-rating">
                        <i class="fas fa-star"></i>
                        <span>${mod.rating}</span>
                    </div>
                </div>
            </div>
        `;
        modsGrid.appendChild(modCard);
    });
}

// Filter mods by category
function filterByCategory(element) {
    document.querySelectorAll('.filter-tag').forEach(tag => {
        tag.classList.remove('active');
    });
    element.classList.add('active');
    
    const category = element.getAttribute('data-filter');
    let filtered = modsData;
    
    if (category !== 'all') {
        filtered = modsData.filter(mod => mod.category === category);
    }
    
    renderMods(filtered);
}

// Filter mods by search
function filterMods() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filtered = modsData.filter(mod => 
        mod.title.toLowerCase().includes(searchInput) ||
        mod.description.toLowerCase().includes(searchInput) ||
        mod.author.toLowerCase().includes(searchInput)
    );
    renderMods(filtered);
}

// Open upload modal
function openUploadModal() {
    document.getElementById('uploadModal').style.display = 'block';
}

// Close upload modal
function closeUploadModal() {
    document.getElementById('uploadModal').style.display = 'none';
}

// Handle upload form
function handleUpload(event) {
    event.preventDefault();
    
    const newMod = {
        id: modsData.length + 1,
        title: document.getElementById('modName').value,
        category: document.getElementById('modCategory').value,
        description: document.getElementById('modDescription').value,
        author: document.getElementById('modAuthor').value,
        downloadLink: document.getElementById('modDownload').value,
        image: "📦",
        rating: 5,
        downloads: 0
    };
    
    modsData.unshift(newMod);
    renderMods(modsData);
    
    document.getElementById('uploadForm').reset();
    closeUploadModal();
    
    // Show success message
    showNotification('Mods berhasil diupload!');
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #6366f1, #8b5cf6);
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        z-index: 2000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('uploadModal');
    if (event.target == modal) {
        closeUploadModal();
    }
}

// Scroll to section
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Setup navigation
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    // Hamburger menu
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
    
    // Nav links active state
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if (link.getAttribute('href').startsWith('#') && link.getAttribute('href') !== '#') {
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
                navMenu.classList.remove('active');
            }
        });
    });
    
    // Update active link on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section[id]');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
}