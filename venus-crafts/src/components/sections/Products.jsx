const products = [
  {
    name: "Royal Gold Watch",
    img: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49",
  },
  {
    name: "Luxury Perfume",
    img: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539",
  },
  {
    name: "Classic Suit",
    img: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7",
  },
  {
    name: "Leather Heels",
    img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2",
  },
];

export default function Products() {
  return (
    <section id="products" className="py-28 px-6 md:px-20">

      <h2 className="text-4xl gold-text text-center mb-16">
        Signature Collection
      </h2>

      <div className="grid md:grid-cols-4 gap-10">

        {products.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-xl overflow-hidden shadow-xl hover:scale-105 transition"
          >
            <img src={item.img} className="h-56 w-full object-cover" />

            <div className="p-5">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-gray-500 text-sm">Luxury Edition</p>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}