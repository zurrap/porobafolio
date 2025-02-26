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