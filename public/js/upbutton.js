// Ambil tombol
const mybutton = document.getElementById("btn-back-to-top");

// Fungsi untuk menampilkan atau menyembunyikan tombol
const scrollFunction = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.classList.remove("hidden");
  } else {
    mybutton.classList.add("hidden");
  }
};

// Fungsi untuk kembali ke atas
const backToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Tambahkan event listener
mybutton.addEventListener("click", backToTop);
window.addEventListener("scroll", scrollFunction);
