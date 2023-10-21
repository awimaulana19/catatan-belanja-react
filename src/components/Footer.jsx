/* eslint-disable react/prop-types */
export default function Footer({ items }) {
    let percent = "";
    let sell = "";
    if (items.length != 0) {
      sell = items.filter((item) => item.checked);
      percent = Math.round((sell.length / items.length) * 100);
    } else {
      percent = 0;
    }
  
    return (
      <footer className="stats">
        Ada {items.length} barang di daftar belanjaan, {sell.length} barang sudah
        dibeli ({percent}%)
      </footer>
    );
  }