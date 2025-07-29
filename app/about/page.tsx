import Navbar from "../components/Navbar";

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Navbar />
      <div className="container mt-30 mx-auto px-4 py-8 pt-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 text-center">
            About Us
          </h1>

          <div className="text-center mb-16">
            <p className="text-xl leading-relaxed max-w-2xl mx-auto">
              CatBreedz is a passion project that combines the power of deep
              learning with the love for our feline friends. Our team is
              dedicated to making cat breed identification accessible to
              everyone.
            </p>
          </div>

          <div className="space-y-12">
            <section>
              <h2 className="text-3xl font-bold mb-6 text-white">
                Our Mission
              </h2>
              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  We believe that understanding your cat's breed can help
                  provide better care, anticipate health needs, and appreciate
                  the unique characteristics that make each breed special.
                </p>
                <p>
                  Our mission is to leverage cutting-edge machine learning
                  technology to create an accurate, user-friendly tool that
                  helps cat owners, veterinarians, and breeders identify cat
                  breeds with confidence.
                </p>
                <p>
                  By combining deep neural networks with convolutional neural
                  networks, we've created a system that can recognize subtle
                  differences between breeds, making breed identification more
                  accessible than ever before.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6 text-white">
                Contributors
              </h2>

              <div className="flex flex-wrap justify-center gap-8">
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-2xl font-bold text-white mb-3">
                    P
                  </div>
                  <h3 className="text-lg font-semibold">Pranav U</h3>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-2xl font-bold text-white mb-3">
                    C
                  </div>
                  <h3 className="text-lg font-semibold">Community</h3>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6 text-white">
                Technology Stack
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4">
                  <h3 className="text-lg font-semibold mb-2">
                    Machine Learning
                  </h3>
                  <p className="text-gray-400">
                    Deep Neural Networks, CNNs, Softmax Regression
                  </p>
                </div>
                <div className="text-center p-4">
                  <h3 className="text-lg font-semibold mb-2">Frontend</h3>
                  <p className="text-gray-400">
                    TypeScript, Astro, Tailwind CSS
                  </p>
                </div>
                <div className="text-center p-4">
                  <h3 className="text-lg font-semibold mb-2">Backend</h3>
                  <p className="text-gray-400">
                    Next.js, Python, TensorFlow/PyTorch
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
