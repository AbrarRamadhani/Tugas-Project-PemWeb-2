formTugas.onsubmit = function(e) {
  e.preventDefault();

  let judulTugas = judul.value.trim();
  let mataKuliah = matkul.value.trim();
  let tanggal = tenggat.value;
  let isiCatatan = catatan.value.trim();

  pesanError.textContent = "";

  if (judulTugas === "") {
    pesanError.textContent = "Judul tugas wajib diisi.";
    judul.focus();
    return;
  }
  if (tanggal === "") {
    pesanError.textContent = "Tenggat waktu wajib diisi.";
    tenggat.focus();
    return;
  }
}
