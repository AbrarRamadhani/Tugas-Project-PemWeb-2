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