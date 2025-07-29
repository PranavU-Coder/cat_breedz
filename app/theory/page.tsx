import Navbar from "../components/Navbar";
import ReactMarkdown from "react-markdown";
import fs from "fs";
import path from "path";

export default async function Theory() {
  const markdownPath = path.join(process.cwd(), "app/theory/theory.md");
  const markdownContent = fs.readFileSync(markdownPath, "utf8");

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Navbar />

      <div className="container mt-30 mx-auto px-4 py-8 pt-24">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-invert prose-lg max-w-none">
            <ReactMarkdown
              components={{
                h1: ({ children }) => (
                  <h1 className="text-6xl md:text-8xl font-bold mb-8 text-center">
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-3xl font-bold mb-6 text-white">
                    {children}
                  </h2>
                ),
                p: ({ children }) => (
                  <p className="text-lg leading-relaxed mb-4">{children}</p>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                    {children}
                  </ul>
                ),
                li: ({ children }) => (
                  <li className="text-lg leading-relaxed">{children}</li>
                ),
              }}
            >
              {markdownContent}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
}
