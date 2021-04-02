import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

// import { Container } from './styles';

const nextPage: React.FC = () => {
  return (
    <div className="">
      <motion.img 
        src={'/img/nextjs.svg'} 
        className="w-full h-full" 
        layoutId={'nextjs-logo'} 
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <Link href="/">
          <a className="
              bg-gray-900
              terxt-gray-50
              px-6 py-3
              rounded-xl
              text-lg font-semibold
              hover:bg-gray-700
            "
          >
            Back to Home
          </a>
        </Link>
      </motion.div>
    </div>
  );
}

export default nextPage;