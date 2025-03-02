const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navClose = document.getElementById('nav-close');

// Toggle Menu
navToggle.addEventListener('click', () => {
  navMenu.classList.add('active');
});

// Close Menu
navClose.addEventListener('click', () => {
  navMenu.classList.remove('active');
});

// Close menu when clicking nav links
document.querySelectorAll('.navmenu a').forEach(navLink => {
  navLink.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});

document.getElementById("contactForm").addEventListener("submit", async function (event) {
  event.preventDefault(); // Cegah reload halaman

  const form = event.target;
  const formData = new FormData(form);
  // Gunakan access key yang valid dari dashboard Web3Forms (pastikan tanpa spasi ekstra)
  formData.append("access_key", "74a8ca4c-549c-4122-8182-8d44646718da");

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });
    const json = await response.json();

    if (json.success) {
      document.getElementById("successModal").classList.add("show");
      form.reset();
    } else {
      alert("Error: " + json.message);
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Terjadi kesalahan saat mengirim pesan.");
  }
});

function closeModal() {
  document.getElementById("successModal").classList.remove("show");
}

// Konfigurasi ScrollReveal dengan reset false agar animasi hanya terjadi sekali
const sr = ScrollReveal({
  distance: '60px',
  duration: 1200,
  easing: 'cubic-bezier(0.5, 0, 0, 1)',
  reset: false,
  viewFactor: 0.2,
});

// Home Section: Memisahkan reveal untuk teks dan gambar agar lebih dinamis
sr.reveal('.home-text', {
  origin: 'left',
  delay: 200
});
sr.reveal('.home-img', {
  origin: 'right',
  delay: 400
});

// About Section: Kombinasi animasi dari atas dan bawah
sr.reveal('.about-img', {
  origin: 'bottom',
  delay: 300
});
sr.reveal('.text-1', {
  origin: 'left',
  delay: 500
});
sr.reveal('.text-2', {
  origin: 'right',
  delay: 600
});
sr.reveal('.text-3', {
  origin: 'left',
  delay: 700
});

// Skills Section: Memperlihatkan container skills dan grid pengalaman secara stagger
sr.reveal('.lang-js', {
  origin: 'bottom',
  delay: 300
});
sr.reveal('.lang-java', {
  origin: 'top',
  delay: 400
});
sr.reveal('.lang-html', {
  origin: 'bottom',
  delay: 500
});
sr.reveal('.lang-php', {
  origin: 'top',
  delay: 600
});
sr.reveal('.experience__grid', {
  origin: 'left',
  delay: 500
});

// Education Section: Animasi pada container dan tiap timeline item secara bergantian
sr.reveal('.smk', {
  origin: 'right',
  delay: 300
});
sr.reveal('.smp', {
  origin: 'left',
  delay: 400
});
sr.reveal('.timeline-item', {
  origin: 'bottom',
  interval: 200
});

// Projects Section: Menerapkan reveal pada tiap card project dengan interval
sr.reveal('.project-card', {
  origin: 'bottom',
  delay: 300,
  interval: 200
});

// Contact Section: Menampilkan container kontak dengan animasi dari atas
sr.reveal('.contact-container', {
  origin: 'top',
  delay: 300
});