document.addEventListener("DOMContentLoaded", function() {
  const h1 = document.querySelector("h1");

  h1.addEventListener("click", function() {
    h1.textContent = "Kamu barusan ngeklik judul 😎";
    h1.style.color = "#e91e63";
  });
});
document.getElementById("form-kontak").addEventListener("submit", function(e) {
  e.preventDefault(); // biar gak reload halaman

  const nama = document.getElementById("nama").value.trim();
  const email = document.getElementById("email").value.trim();

  if (nama === "" || email === "") {
    alert("Nama dan email wajib diisi!");
  } else {
    alert(`Terima kasih, ${nama}! Kami akan menghubungi kamu di ${email}.`);
  }
});
