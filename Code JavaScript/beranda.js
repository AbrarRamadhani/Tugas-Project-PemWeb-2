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
function simpanTugas() {
  let hasil = "";

  tugas.forEach(function(item, index) {
    hasil += item.id + "###";
    hasil += item.judul + "###";
    hasil += item.matkul + "###";
    hasil += item.tenggat + "###";
    hasil += item.catatan + "###";
    hasil += item.selesai;

    if (index < tugas.length - 1) {
      hasil += "|||";
    }
  });

  localStorage.deadlinetugas = hasil;
}
function tampilkanTugas() {
  let hasil = "";

  if (tugas.length === 0) {
    listTugas.innerHTML = "";
    kosongBeranda.style.display = "block";
  } else {
    kosongBeranda.style.display = "none";

    tugas.forEach(function(item) {
      let status = "";
      let kelas = "item";

      if (item.selesai) {
        status = " checked";
        kelas += " selesai";
      }

      hasil +=
        '<li class="' + kelas + '">' +
        '<input type="checkbox" onclick="ubahStatus(\'' +
        item.id + '\')" ' + status + ">" +
        '<div class="info">' +
        '<div class="nama">' + item.judul + "</div>" +
        '<div class="meta">' +
        (item.matkul || "Tanpa mata kuliah") +
        " - " +
        formatTanggal(item.tenggat) +
        "</div>" +
        "</div>" +
        '<button class="hapus" onclick="hapusTugas(\'' +
        item.id + '\')">×</button>' +
        "</li>";
    });

    listTugas.innerHTML = hasil;
  }

  hitungStatistik();
}
function ubahStatus(id) {
  tugas.forEach(function(item) {
    if (item.id === id) {
      item.selesai = !item.selesai;
    }
  });

  simpanTugas();
  tampilkanTugas();
}
function ubahStatus(id) {
  tugas.forEach(function(item) {
    if (item.id === id) {
      item.selesai = !item.selesai;
    }
  });

  simpanTugas();
  tampilkanTugas();
}

function hapusTugas(id) {
  tugas = tugas.filter(function(item) {
    return item.id !== id;
  });

  simpanTugas();
  tampilkanTugas();
}