import { motion } from "framer-motion";

const Backdrop = ({ children, onClick, open}) => {


  return (
    <motion.div
      onClick={onClick}
      className="fixed top-0 left-0 min-h-screen w-full backdrop-opacity-10 backdrop-invert bg-black/70 flex items-start md:items-center justify-center z-50 px-3 pt-[30%] md:pt-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;