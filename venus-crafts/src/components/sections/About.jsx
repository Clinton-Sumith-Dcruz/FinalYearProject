export default function About() {
  return (
    <section id="about" className="py-28 px-6 md:px-20">

      <div className="grid md:grid-cols-2 gap-16 items-center">

        <img
          src="https://images.unsplash.com/photo-1593032465175-481ac7f401a0"
          className="rounded-xl shadow-2xl"
        />

        <div>
          <h2 className="text-4xl gold-text mb-6">About VenusCraft</h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            VenusCraft is a symbol of refined taste and timeless fashion.
            Our collections are inspired by heritage aesthetics, elite lifestyle,
            and modern luxury.
          </p>

          <p className="text-gray-600">
            Every piece is crafted with precision — designed for individuals
            who appreciate class, minimalism, and sophistication.
          </p>

        </div>
      </div>

    </section>
  );
}