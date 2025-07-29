import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Navbar />

      <div className="container mt-30 mx-auto px-4 py-8 pt-24">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            CatBreedz <br /> Classifier
          </h1>
          <p className="text-lg md:text-lg leading-relaxed">
            A multiclass classifier built to distinguish different breeds of
            cats <br />
            using deep neural networks and convolutional neural networks.
          </p>
        </div>

        <div className="max-w-xl mx-auto mt-20">
          <div className="text-left space-y-4 text-lg leading-relaxed">
            <p>
              Ever wondered what breed your cat is? CatBreedz uses advanced deep
              learning to identify cat breeds from images with remarkable
              accuracy.
            </p>

            <p>
              Built with convolutional neural networks (CNNs) and deep neural
              networks (DNNs), this classifier can distinguish between multiple
              cat breeds using sophisticated image recognition algorithms.
            </p>

            <p>
              The system leverages softmax regression for multiclass
              classification, ensuring accurate breed identification across a
              diverse dataset of cat images.
            </p>

            <p>
              Whether you have a Persian, Siamese, Maine Coon, or any other
              breed, CatBreedz can help you identify your feline friend with
              confidence.
            </p>

            <p>
              The project demonstrates the power of machine learning in
              real-world applications, combining computer vision techniques with
              deep learning to solve practical problems.
            </p>

            <p>
              Built with modern web technologies including TypeScript, Astro,
              and CSS, CatBreedz provides an intuitive interface for cat breed
              classification.
            </p>

            <p>
              Perfect for cat owners, veterinarians, breeders, or anyone curious
              about feline genetics and breed characteristics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
