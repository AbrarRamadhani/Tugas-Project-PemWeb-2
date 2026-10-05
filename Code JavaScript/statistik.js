let tugas = [];
let data = localStorage.deadlinetugas || "";

if (data !== "") {
  let daftar = data.split("|||");

  daftar.forEach(function(item) {
    let bagian = item.split("###");

    if (bagian.length === 6) {
      tugas.push({
        id: bagian[0],
        judul: bagian[1],
        matkul: bagian[2],
        tenggat: bagian[3],
        catatan: bagian[4],
        selesai: bagian[5] === "true"
      });
    }
  });
}
function formatTanggal(tanggal) {
  if (tanggal === "") {
    return "-";
  }

  let bagian = tanggal.split("-");

  return bagian[2] + "/" + bagian[1] + "/" + bagian[0];
}
function hitungStatistik() {
  let selesai = 0;

  tugas.forEach(function(item) {
    if (item.selesai) {
      selesai++;
    }
  });

  let total = tugas.length;
  let belum = total - selesai;

  let progress = 0;

  if (total > 0) {
    progress = Math.round((selesai / total) * 100);
  }

  statTotal.textContent = total;
  statSelesai.textContent = selesai;
  statBelum.textContent = belum;
  statProgress.textContent = progress + "%";
}
function tampilkanRiwayat(daftarTugas) {
  let hasil = "";

  if (daftarTugas.length === 0) {
    listRiwayat.innerHTML = "";
    kosongRiwayat.style.display = "block";
    return;
  }

  kosongRiwayat.style.display = "none";

  daftarTugas.forEach(function(item) {
    let status = "Selesai";
    let kelas = "badge";

    if (!item.selesai) {
      status = "Belum";
      kelas = "badge belum";
    }

    hasil +=
      '<li class="item">' +
      '<div class="info">' +
      '<div class="nama">' + item.judul + "</div>" +
      '<div class="meta">' +
      (item.matkul || "Tanpa mata kuliah") +
      " - " +
      formatTanggal(item.tenggat) +
      "</div>" +
      "</div>" +
      '<span class="' + kelas + '">' +
      status +
      "</span>" +
      "</li>";
  });

  listRiwayat.innerHTML = hasil;
}