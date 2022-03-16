import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

// import { Container } from './styles';

const nextPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <motion.img
        src={'/img/framermotion.svg'}
        layoutId={'framermotion-logo'}
        transition={{ duration: 0.5 }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <Link href="/">
          <a className="
              bg-gray-900
              text-gray-50
              px-6 py-3
              rounded-xl
              text-lg font-semibold
              hover:bg-gray-700
              transition
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