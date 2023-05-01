   let daftarBelanja = []; // Array untuk menyimpan daftar barang dan harga
    let totalHarga = 0; // Variabel untuk menyimpan total harga
    let bayar = 0; // Variabel untuk menyimpan jumlah uang yang dibayar

    // Fungsi untuk menambah barang ke daftar belanja
    function tambahBarang() {
      let barang = document.getElementById("barang").value;
      let harga = parseFloat(document.getElementById("harga").value);

      // Validasi input
      if (barang === "" || isNaN(harga)) {
        alert("Input tidak valid!");
        return;
      }

      // Tambahkan barang dan harga ke array
      daftarBelanja.push({
        barang: barang, harga: harga
      });

      // Tampilkan daftar barang
      let daftarBarangElem = document.getElementById("daftarBarang");
      let liElem = document.createElement("li");
      liElem.innerHTML = barang + " - Rp " + harga.toFixed(3);
      daftarBarangElem.appendChild(liElem);

      // Tambahkan harga ke total harga
      totalHarga += harga;
      document.getElementById("totalHarga").innerHTML = "Rp " + totalHarga.toFixed(3);

      // Reset input
      document.getElementById("barang").value = "";
      document.getElementById("harga").value = "";
    }

    // Fungsi untuk menghitung kembalian
    function hitungKembalian() {
      bayar = parseFloat(document.getElementById("bayar").value);

      // Validasi input
      if (isNaN(bayar) || bayar < totalHarga) {
        alert("Input tidak valid atau jumlah uang yang dibayar kurang!");
        return;
      }

      // Hitung kembalian
      let kembalian = bayar - totalHarga;
      document.getElementById("kembalian").innerHTML = "Rp " + kembalian.toFixed(3);
      // to.Fixed (3) menyatakan nilai ribuan
    }