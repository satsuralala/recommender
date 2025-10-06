export interface Article {
  id: string;
  title: string;
  author: string;
  publishedDate: string;
  thumbnail: string;
  mainImage: string;
  content: string;
  excerpt: string;
  category: string;
}

export const articles: Article[] = [
  {
    id: "1",
    title: "The Future of Sustainable Architecture in Urban Development",
    author: "Sarah Mitchell",
    publishedDate: "June 15, 2025",
    thumbnail: "/modern-sustainable-architecture-building.jpg",
    mainImage: "/modern-sustainable-architecture-building.jpg",
    excerpt:
      "Exploring how innovative design principles are reshaping our cities for a greener tomorrow.",
    content: `As cities continue to expand and evolve, the integration of sustainable architecture has become not just a trend, but a necessity. Urban planners and architects are now collaborating more closely than ever to create spaces that are both functional and environmentally conscious.

The rise of green buildings has transformed skylines across the globe. These structures incorporate renewable energy sources, efficient water management systems, and materials that minimize environmental impact. From vertical gardens that improve air quality to solar panels that power entire buildings, the innovations are remarkable.

One of the most exciting developments is the concept of biophilic design, which seeks to connect building occupants more closely to nature. This approach has been shown to improve mental health, increase productivity, and create more pleasant living and working environments.

Cities like Copenhagen, Singapore, and Vancouver are leading the way, demonstrating that sustainable urban development is not only possible but can also enhance quality of life. As we look to the future, the question is no longer whether we should build sustainably, but how quickly we can implement these practices on a global scale.`,
    category: "Architecture",
  },
  {
    id: "2",
    title: "Artificial Intelligence Transforms Healthcare Diagnostics",
    author: "Dr. James Chen",
    publishedDate: "June 12, 2025",
    thumbnail: "/medical-ai-technology-healthcare.jpg",
    mainImage: "/medical-ai-technology-healthcare.jpg",
    excerpt:
      "Machine learning algorithms are revolutionizing early disease detection and treatment planning.",
    content: `The healthcare industry is experiencing a paradigm shift as artificial intelligence becomes increasingly integrated into diagnostic processes. Recent breakthroughs in machine learning have enabled medical professionals to detect diseases earlier and with greater accuracy than ever before.

AI-powered imaging analysis can now identify subtle patterns in X-rays, MRIs, and CT scans that might escape the human eye. This technology has proven particularly effective in detecting early-stage cancers, cardiovascular conditions, and neurological disorders.

Beyond diagnostics, AI is also transforming treatment planning. Algorithms can analyze vast amounts of patient data to recommend personalized treatment protocols, predict potential complications, and optimize medication dosages. This level of precision medicine was unimaginable just a decade ago.

However, the integration of AI in healthcare also raises important questions about data privacy, algorithmic bias, and the role of human judgment in medical decision-making. As we continue to develop these technologies, it's crucial that we address these concerns while harnessing AI's potential to save lives and improve patient outcomes.`,
    category: "Technology",
  },
  {
    id: "3",
    title: "The Renaissance of Artisan Coffee Culture",
    author: "Maria Rodriguez",
    publishedDate: "June 8, 2025",
    thumbnail: "/artisan-coffee-brewing-specialty-cafe.jpg",
    mainImage: "/artisan-coffee-brewing-specialty-cafe.jpg",
    excerpt:
      "From bean to cup, the craft coffee movement is redefining our relationship with this beloved beverage.",
    content: `Coffee culture has evolved dramatically over the past decade, moving far beyond the simple choice between regular and decaf. Today's coffee enthusiasts are deeply invested in every aspect of their brew, from the origin of the beans to the precise temperature of the water.

The third wave coffee movement has brought unprecedented attention to the craft of coffee making. Baristas are now viewed as skilled artisans, and specialty coffee shops have become destinations for those seeking not just caffeine, but an experience. Single-origin beans, pour-over methods, and alternative brewing techniques have become the norm rather than the exception.

This renaissance extends beyond the café. Home brewing equipment has become increasingly sophisticated, allowing enthusiasts to replicate professional-quality coffee in their own kitchens. The rise of subscription services delivering freshly roasted beans has made it easier than ever to explore coffees from around the world.

But perhaps most importantly, this movement has brought greater awareness to the social and environmental aspects of coffee production. Consumers are increasingly interested in fair trade practices, sustainable farming methods, and the stories of the farmers who grow their beans. This consciousness is reshaping the entire coffee industry, from farm to cup.`,
    category: "Lifestyle",
  },
  {
    id: "4",
    title: "Electric Aviation: The Next Frontier in Sustainable Travel",
    author: "Thomas Anderson",
    publishedDate: "June 5, 2025",
    thumbnail: "/electric-aircraft-aviation-future.jpg",
    mainImage: "/electric-aircraft-aviation-future.jpg",
    excerpt:
      "Battery-powered aircraft are preparing for takeoff, promising to revolutionize short-haul flights.",
    content: `The aviation industry stands on the brink of a major transformation as electric aircraft technology matures. While electric cars have become commonplace, the challenge of electrifying flight has proven far more complex. However, recent advances in battery technology and electric propulsion systems are making the dream of emission-free flight a reality.

Several companies are now testing electric aircraft designed for short-haul routes, typically under 500 miles. These planes promise to dramatically reduce both carbon emissions and operating costs, potentially making regional air travel more accessible and sustainable.

The benefits extend beyond environmental impact. Electric aircraft are significantly quieter than their jet-fueled counterparts, which could reduce noise pollution around airports and open up new possibilities for urban air mobility. Some envisions a future where electric air taxis provide quick transportation within and between cities.

Challenges remain, particularly regarding battery weight, charging infrastructure, and regulatory approval. However, with major aerospace companies and startups alike investing heavily in this technology, electric aviation is no longer a question of if, but when. The next decade will likely see the first commercial electric flights, marking the beginning of a new era in aviation.`,
    category: "Innovation",
  },
  {
    id: "5",
    title: "The Art of Minimalist Living in a Maximalist World",
    author: "Emma Thompson",
    publishedDate: "June 1, 2025",
    thumbnail: "/minimalist-interior-design-simple-living.jpg",
    mainImage: "/minimalist-interior-design-simple-living.jpg",
    excerpt:
      "Discovering freedom and clarity through intentional simplicity and mindful consumption.",
    content: `In an age of constant stimulation and endless consumption, a growing number of people are finding peace in minimalism. This lifestyle philosophy, which emphasizes owning less and living more intentionally, offers a counterpoint to the consumerist culture that dominates modern society.

Minimalism isn't about deprivation or living with as few possessions as possible. Rather, it's about being intentional with what we own and how we spend our time. It's about removing the excess to make room for what truly matters—whether that's relationships, experiences, creativity, or personal growth.

The benefits of minimalist living extend beyond a tidier home. Many practitioners report reduced stress, improved focus, and greater financial freedom. By consuming less, they also reduce their environmental impact and find themselves less influenced by advertising and social pressure.

However, minimalism looks different for everyone. For some, it might mean owning only 100 items. For others, it's simply about being more thoughtful about purchases and regularly decluttering. The key is finding a balance that works for your life and values, creating space—both physical and mental—for what brings you joy and fulfillment.`,
    category: "Lifestyle",
  },
  {
    id: "6",
    title: "Quantum Computing Breakthrough Promises New Era of Innovation",
    author: "Dr. Lisa Park",
    publishedDate: "May 28, 2025",
    thumbnail: "/quantum-computer-technology-laboratory.jpg",
    mainImage: "/quantum-computer-technology-laboratory.jpg",
    excerpt:
      "Scientists achieve quantum advantage in practical applications, opening doors to unprecedented computational power.",
    content: `The field of quantum computing has reached a pivotal milestone with researchers demonstrating quantum advantage in real-world applications. This breakthrough marks a significant step toward practical quantum computers that could revolutionize fields from drug discovery to climate modeling.

Unlike classical computers that process information in binary bits, quantum computers use quantum bits or qubits, which can exist in multiple states simultaneously. This property, known as superposition, along with quantum entanglement, allows quantum computers to solve certain problems exponentially faster than classical computers.

Recent advances have focused on improving qubit stability and reducing error rates, two of the biggest challenges in quantum computing. New error correction techniques and improved qubit designs have brought us closer to building large-scale, fault-tolerant quantum computers.

The implications are profound. Quantum computers could accelerate drug discovery by simulating molecular interactions, optimize complex logistics networks, enhance artificial intelligence, and break current encryption methods while enabling new forms of secure communication. As we stand at the threshold of the quantum era, the question is no longer whether quantum computing will transform our world, but how quickly we can harness its potential.`,
    category: "Technology",
  },
];

export function getArticleById(id: string): Article | undefined {
  return articles.find((article) => article.id === id);
}

export function getAllArticles(): Article[] {
  return articles;
}
