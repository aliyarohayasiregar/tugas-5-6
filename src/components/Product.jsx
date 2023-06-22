
export default function Product ({id,nama,harga}){
    return(
        <div>
        <p>({id}){nama}</p>
        <h4>Harga=
        {harga.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
          })}
        </h4>
        </div>
    )
}