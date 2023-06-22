import { useState } from "react";
import Product from "./components/Product";
import Header from "./components/Header";
import { BiPlus, BiMinus } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";

export default function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      nama: "Nike",
      harga: 200000,
    },
    {
      id: 2,
      nama: "Air Jordan",
      harga: 400000,
    },
    {
      id: 3,
      nama: "Adidas",
      harga: 300000,
    },
  ]);

  const [newid, setNewId] = useState("");
  const [newNama, setNewNama] = useState("");
  const [newHarga, setNewHarga] = useState("");
  const [id, setId] = useState("");
  const [name, setName] = useState("");

  return (
    <>
      <Header />
      <main>
        <form className="card">
          <h3>Tambah</h3>
          <label>
            ID:
            <input
              type="text"
              value={newid}
              onChange={(e) => setNewId(e.target.value)}
            />
          </label>
          <label>
            Nama:
            <input
              type="text"
              value={newNama}
              onChange={(e) => setNewNama(e.target.value)}
            />
          </label>
          <label>
            Harga:
            <input
              type="text"
              value={newHarga}
              onChange={(e) => setNewHarga(parseInt(e.target.value))}
            />
          </label>
          <button
            onClick={(e) => {
              e.preventDefault();
              setProducts([
                { id: newid, nama: newNama, harga: newHarga },
                ...products,
              ]);
            }}
          >
            <BiPlus />
            Depan
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setProducts([
                ...products,
                { id: newid, nama: newNama, harga: newHarga },
              ]);
            }}
          >
            <BiPlus /> Belakang
          </button>
        </form>

        <form className="card">
          <h3>Edit/Hapus Berdasarkan id</h3>
          <label>
            ID:
            <input
              type="number"
              value={id}
              onChange={(e) => setId(parseInt(e.target.value))}
            />
          </label>
          <label>
            Nama:
            <input
              type="text"
              name="nama"
              value={name}
              onChange={(e) => {
                e.preventDefault();
                setProducts(
                  products.map((p) =>
                    p.id === id
                      ? {
                          ...p,
                          nama: name,
                        }
                      : p
                  )
                );
                setName(e.target.value);
              }}
            />{" "}
          </label>
          <button
            onClick={(e) => {
              e.preventDefault();
              setProducts(
                products.map((p) =>
                  p.id === id
                    ? {
                        ...p,
                        harga: p.harga + 1,
                      }
                    : p
                )
              );
            }}
          >
            <BiPlus />
            Tambah Harga
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setProducts(
                products.map((p) =>
                  p.id === id
                    ? {
                        ...p,
                        harga: p.harga - 1,
                      }
                    : p
                )
              );
            }}
          >
            <BiMinus />
            Kurang Harga
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setProducts(products.filter((p) => p.id !== id));
            }}
          >
            <AiFillDelete /> Hapus
          </button>
        </form>
        <form>
          <button
            onClick={(e) => {
              e.preventDefault();
              setProducts(products.slice(1));
            }}
          >
            <AiFillDelete />
            Hapus depan
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setProducts(products.slice(0, -1));
            }}
          >
            <AiFillDelete />
            Hapus Belakang
          </button>{" "} <button
            onClick={(e) => {
              e.preventDefault();
              setProducts([]);
            }}
          >
            <AiFillDelete />
            Hapus semua
          </button>{" "}
        </form>
        <div className="product-container">
          <div className="product">
            {products.map((value, i) => {
              return (
                <Product
                  key={i}
                  id={value.id}
                  nama={value.nama}
                  harga={value.harga}
                />
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}
