let name = prompt("Masukkan nama kamu:");
if (!name || name.trim() === "") {
  name = "User"; // fallback kalau kosong
}
document.getElementById("userName").innerText = name;

document.getElementById("messageForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Ambil data dari form
  let nama = document.getElementById("nama").value;
  let tglLahir = document.getElementById("tglLahir").value;
  let gender = document.querySelector('input[name="gender"]:checked').value;
  let pesan = document.getElementById("pesan").value;

  // Waktu sekarang
  let currentTime = new Date().toString();

  // Tampilkan ke box kanan
  document.getElementById("outputBox").innerHTML = `
            <p><strong>Current time :</strong> ${currentTime}</p>
            <p><strong>Nama :</strong> ${nama}</p>
            <p><strong>Tanggal Lahir :</strong> ${tglLahir}</p>
            <p><strong>Jenis Kelamin :</strong> ${gender}</p>
            <p><strong>Pesan :</strong> ${pesan}</p> `;
  // Kosongkan form
  document.getElementById("messageForm").reset();
  // Fokus kembali ke input nama
  document.getElementById("nama").focus();
});

//Toggle class active
const navbarNav = document.querySelector(".navbar");

//Hamburger di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik luar sidebar buat ngilangin nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
