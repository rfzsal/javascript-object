document.addEventListener('DOMContentLoaded', () => {
  const pAngkot1 = document.getElementById('angkot1');
  const pAngkot2 = document.getElementById('angkot2');

  const btAngkot1 = document.getElementById('tambahPenumpang1');
  const btAngkot2 = document.getElementById('tambahPenumpang2');

  const bhAngkot1 = document.getElementById('hapusPenumpang1');
  const bhAngkot2 = document.getElementById('hapusPenumpang2');

  const angkot1 = new Angkot('Sopir 1');
  const angkot2 = new Angkot('Sopir 2');

  pAngkot1.innerText = `${angkot1.namaSopir} (${angkot1.kas})`;
  pAngkot2.innerText = `${angkot2.namaSopir} (${angkot2.kas})`;

  btAngkot1.addEventListener('click', () => {
    const namaPenumpang = prompt('Masukan nama penumpang...');
    alert(angkot1.penumpangNaik(namaPenumpang));

    pAngkot1.innerText = `${angkot1.namaSopir} (${
      angkot1.kas
    }) : ${angkot1.penumpang.join(', ')}`;

    console.log(angkot1);
  });

  btAngkot2.addEventListener('click', () => {
    const namaPenumpang = prompt('Masukan nama penumpang...');
    alert(angkot2.penumpangNaik(namaPenumpang));

    pAngkot2.innerText = `${angkot2.namaSopir} (${
      angkot2.kas
    }) : ${angkot2.penumpang.join(', ')}`;

    console.log(angkot2);
  });

  bhAngkot1.addEventListener('click', () => {
    const namaPenumpang = prompt('Masukan nama penumpang...');
    const jumlahBayar = prompt('Masukan jumlah bayar...');
    alert(angkot1.penumpangTurun(namaPenumpang, parseInt(jumlahBayar)));

    pAngkot1.innerText = `${angkot1.namaSopir} (${
      angkot1.kas
    }) : ${angkot1.penumpang.join(', ')}`;

    console.log(angkot1);
  });

  bhAngkot2.addEventListener('click', () => {
    const namaPenumpang = prompt('Masukan nama penumpang...');
    const jumlahBayar = prompt('Masukan jumlah bayar...');
    alert(angkot2.penumpangTurun(namaPenumpang, parseInt(jumlahBayar)));

    pAngkot2.innerText = `${angkot2.namaSopir} (${
      angkot2.kas
    }) : ${angkot2.penumpang.join(', ')}`;

    console.log(angkot2);
  });
});
