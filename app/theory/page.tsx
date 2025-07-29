import Navbar from "../components/Navbar";

export default function Theory() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Navbar />

      <div className="container mt-30 mx-auto px-4 py-8 pt-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 text-center">
            How It <br /> Works
          </h1>

          <div className="space-y-12">
            <section>
              <h2 className="text-3xl font-bold mb-6 text-white">
                Deep Neural Networks (DNNs)
              </h2>
              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  Our cat breed classifier is built on the foundation of Deep
                  Neural Networks (DNNs), which are artificial neural networks
                  with multiple hidden layers between the input and output
                  layers.
                </p>
                <p>
                  DNNs excel at learning complex patterns and representations
                  from data. In our case, they learn to recognize distinctive
                  features that differentiate cat breeds - from fur patterns and
                  colors to facial structures and body proportions.
                </p>
                <p>
                  Each layer of the network processes the input data and
                  extracts increasingly abstract features, allowing the model to
                  build a hierarchical understanding of what makes each cat
                  breed unique.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6 text-white">
                Convolutional Neural Networks (CNNs)
              </h2>
              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  Convolutional Neural Networks are specifically designed for
                  processing grid-like data, making them perfect for image
                  classification tasks like identifying cat breeds.
                </p>
                <p>
                  CNNs use convolutional layers that apply filters to the input
                  image, detecting features such as edges, textures, and
                  patterns. These features are then pooled and passed through
                  multiple layers, with each layer learning more complex
                  representations.
                </p>
                <p>For cat breed classification, CNNs learn to recognize:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Fur texture and length patterns</li>
                  <li>Facial feature arrangements</li>
                  <li>Color distributions and markings</li>
                  <li>Body shape characteristics</li>
                  <li>Ear and tail configurations</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6 text-white">
                Softmax Regression
              </h2>
              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  Softmax regression is used for multiclass classification,
                  allowing our model to assign probabilities to multiple cat
                  breeds simultaneously.
                </p>
                <p>
                  The softmax function takes the raw output scores from our
                  neural network and converts them into a probability
                  distribution across all possible cat breeds. This means:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Each breed gets a probability score between 0 and 1</li>
                  <li>All probabilities sum to 1</li>
                  <li>
                    The breed with the highest probability is our prediction
                  </li>
                  <li>We can show confidence levels for each prediction</li>
                </ul>
                <p>
                  This approach allows us to not only predict the most likely
                  breed but also provide confidence scores and alternative
                  predictions, giving users a more nuanced understanding of the
                  classification results.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6 text-white">
                Training Process
              </h2>
              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  The model was trained on a diverse dataset of cat images
                  representing various breeds, ensuring robust performance
                  across different lighting conditions, angles, and backgrounds.
                </p>
                <p>During training, the model learns to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Extract relevant features from cat images</li>
                  <li>Distinguish between subtle breed differences</li>
                  <li>Handle variations in image quality and composition</li>
                  <li>Generalize to new, unseen cat images</li>
                </ul>
                <p>
                  The training process involves optimizing the network weights
                  to minimize classification errors while maintaining the
                  ability to generalize to new data.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6 text-white">
                Model Architecture
              </h2>
              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  Our model architecture combines the strengths of CNNs for
                  feature extraction with fully connected layers for
                  classification, optimized specifically for cat breed
                  recognition.
                </p>
                <p>The architecture includes:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Input layer for image processing</li>
                  <li>
                    Multiple convolutional layers with activation functions
                  </li>
                  <li>Pooling layers for dimensionality reduction</li>
                  <li>Dropout layers for regularization</li>
                  <li>Fully connected layers for final classification</li>
                  <li>Softmax output layer for breed probabilities</li>
                </ul>
                <p>
                  This architecture balances computational efficiency with
                  classification accuracy, making it suitable for real-time
                  breed identification.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
