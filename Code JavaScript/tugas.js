formTugas.onsubmit = function(e) {
  e.preventDefault();

  let judulTugas = judul.value.trim();
  let mataKuliah = matkul.value.trim();
  let tanggal = tenggat.value;
  let isiCatatan = catatan.value.trim();

  pesanError.textContent = "";