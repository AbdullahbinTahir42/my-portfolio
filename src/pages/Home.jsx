import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="pt-24 px-6 max-w-6xl mx-auto text-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <img src="/images/my.JPG" alt="Profile" className="w-48 h-48 rounded-full mx-auto border-4 border-brand shadow-[0_0_20px_rgba(64,130,109,0.5)] object-cover mb-8" />
        
        <h1 className="text-5xl font-bold mb-4">Abdullah Tahir</h1>
        <h2 className="text-2xl text-brand mb-6">Backend & AI Developer</h2>
        
        <p className="max-w-2xl mx-auto text-gray-400 text-lg mb-8">
          Backend Developer with deep expertise in Python and Django, now pivoting into AI. 
          I build robust infrastructure for ML models and intelligent automation.
        </p>

        <div className="flex justify-center gap-4">
          <a href="/files/CV_Ai.pdf" download className="border-2 border-brand text-brand px-6 py-2 rounded-full hover:bg-brand hover:text-white transition">
            Download AI CV
          </a>
          <Link to="/projects" className="bg-brand text-white px-8 py-2.5 rounded-full hover:bg-brand-dark transition shadow-lg">
            View Work
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;