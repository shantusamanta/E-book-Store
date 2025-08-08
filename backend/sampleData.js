const mongoose = require("mongoose");
require("dotenv").config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("MongoDB connection error:", err));

const Book = require("./models/books");

const sampleBooks = [
  {
    url: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: 12.99,
    desc: "A story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan. Set in the Jazz Age on Long Island, the novel depicts first-person narrator Nick Carraway's interactions with mysterious millionaire Jay Gatsby and Gatsby's obsession to reunite with his former lover, Daisy Buchanan.",
    language: "English"
  },
  {
    url: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: 15.99,
    desc: "The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it. 'To Kill A Mockingbird' became both an instant bestseller and a critical success when it was first published in 1960.",
    language: "English"
  },
  {
    url: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400",
    title: "1984",
    author: "George Orwell",
    price: 14.99,
    desc: "A dystopian social science fiction novel and cautionary tale. Thematically, it centres on the consequences of totalitarianism, mass surveillance and repressive regimentation of persons and behaviours within society.",
    language: "English"
  },
  {
    url: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    price: 11.99,
    desc: "The story follows the main character, Elizabeth Bennet, as she deals with issues of manners, upbringing, morality, education, and marriage in the society of the landed gentry of the British Regency.",
    language: "English"
  },
  {
    url: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400",
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    price: 13.99,
    desc: "The novel's antihero, Holden Caulfield, has become an icon for teenage rebellion. The novel also deals with complex issues of innocence, identity, belonging, loss, and connection.",
    language: "English"
  },
  {
    url: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400",
    title: "Lord of the Flies",
    author: "William Golding",
    price: 12.99,
    desc: "The book focuses on a group of British boys stranded on an uninhabited island and their disastrous attempt to govern themselves. Themes include the tension between groupthink and individuality, between rational and emotional reactions, and between morality and immorality.",
    language: "English"
  },
  {
    url: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400",
    title: "Animal Farm",
    author: "George Orwell",
    price: 10.99,
    desc: "A satirical allegory of Soviet totalitarianism. The book tells the story of a group of farm animals who rebel against their human farmer, hoping to create a society where the animals can be equal, free, and happy.",
    language: "English"
  },
  {
    url: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400",
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    price: 16.99,
    desc: "A fantasy novel about the adventures of Bilbo Baggins, a hobbit who embarks on a quest to reclaim the Lonely Mountain from the dragon Smaug, accompanied by a group of dwarves and the wizard Gandalf.",
    language: "English"
  }
];

const addSampleBooks = async () => {
  try {
    // Clear existing books
    await Book.deleteMany({});
    console.log("Cleared existing books");

    // Add sample books
    await Book.insertMany(sampleBooks);
    console.log("Sample books added successfully");

    // Display added books
    const books = await Book.find();
    console.log(`Total books in database: ${books.length}`);
    
    process.exit(0);
  } catch (error) {
    console.error("Error adding sample books:", error);
    process.exit(1);
  }
};

addSampleBooks(); 