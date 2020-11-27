function Angkot(namaSopir, penumpang = [], kas = 0) {
  this.namaSopir = namaSopir;
  this.penumpang = penumpang;
  this.kas = kas;

  this.penumpangNaik = function (namaPenumpang) {
    this.penumpang.push(namaPenumpang);

    return `${namaPenumpang} naik ke dalam angkot`;
  };

  this.penumpangTurun = function (namaPenumpang, jumlahBayar = 5000) {
    if (this.penumpang.length === 0) {
      return `Tidak ada penumpang di dalam angkot`;
    }

    let index = 0;
    for (index; index < this.penumpang.length; index++) {
      if (this.penumpang[index] === namaPenumpang) {
        this.penumpang.splice(index, 1);
        this.kas += jumlahBayar;

        return `${namaPenumpang} turun dari angkot dan bayar ${jumlahBayar}`;
      }
    }

    return `${namaPenumpang} tidak ada di dalam angkot`;
  };
}
