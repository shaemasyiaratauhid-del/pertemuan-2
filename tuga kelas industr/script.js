// 2. Array keranjang dengan operasi dasar
let keranjang = ["Apel", "Jeruk", "Pisang"];
console.log("Keranjang awal:", keranjang);

// Tambah barang ke akhir
keranjang.push("Mangga");
console.log("Setelah push (Mangga):", keranjang);

// Tambah barang ke awal
keranjang.unshift("Anggur");
console.log("Setelah unshift (Anggur):", keranjang);

// Hapus barang terakhir
keranjang.pop();
console.log("Setelah pop:", keranjang);

// Hapus barang pertama
keranjang.shift();
console.log("Setelah shift:", keranjang);

// 3. Perulangan for untuk menampilkan isi keranjang dengan nomor urut
console.log("Isi keranjang dengan nomor urut:");
for (let i = 0; i < keranjang.length; i++) {
  console.log(`${i + 1}. ${keranjang[i]}`);
}

// 4. Array of objects produk
const produk = [
  { nama: "Beras", harga: 50000 },
  { nama: "Minyak", harga: 20000 }
];

// Tambah produk baru
produk.push({ nama: "Gula", harga: 15000 });
console.log("Setelah tambah produk baru:", produk);

// Hapus produk terakhir
produk.pop();
console.log("Setelah hapus produk terakhir:", produk);

// Tampilkan produk dengan console.table
console.table(produk);

// Fungsi tambahProduk
function tambahProduk(nama, harga) {
  produk.push({ nama, harga });
  console.log(`Produk "${nama}" dengan harga ${harga} telah ditambahkan.`);
}

// Fungsi hitungTotal
function hitungTotal() {
  let total = 0;
  for (let p of produk) {
    total += p.harga;
  }
  return total;
}

// Contoh penggunaan fungsi tambahProduk dan hitungTotal
tambahProduk("Teh", 10000);
console.table(produk);

console.log("Total harga semua produk:", hitungTotal());

// Struktur kontrol if produk.length > 0
if (produk.length > 0) {
  console.log("Produk tersedia");
} else {
  console.log("Produk kosong");
}

// Switch untuk nama hari berdasarkan angka 0-6
function namaHari(angka) {
  switch (angka) {
    case 0:
      return "Minggu";
    case 1:
      return "Senin";
    case 2:
      return "Selasa";
    case 3:
      return "Rabu";
    case 4:
      return "Kamis";
    case 5:
      return "Jumat";
    case 6:
      return "Sabtu";
    default:
      return "Hari tidak valid";
  }
}

// Contoh penggunaan namaHari
for (let i = 0; i <= 7; i++) {
  console.log(`Hari ke-${i}: ${namaHari(i)}`);
}