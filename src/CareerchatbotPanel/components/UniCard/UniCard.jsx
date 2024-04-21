import { motion } from 'framer-motion';

function UniCard({ university }) {
  console.log(university.UniversityCampusName)
  // Animation variants
  const cardVariants = {
    offscreen: {
      opacity: 0,
      y: 20 // Smaller initial movement
    },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100, // Adjust stiffness for the spring; lower may be smoother
        damping: 10, // Control oscillation: higher values mean less oscillation
        when: "beforeChildren", // Animate this container before its children
        staggerChildren: 1 // Time in seconds to stagger the animation of children
      }
    }
  };

  return (
    <motion.div
      className="bg-gray-100 max-w-sm mx-auto h-32 flex flex-col items-center justify-center rounded-lg shadow-md overflow-hidden"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      variants={cardVariants}
    >
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          {university.UniversityCampusName}
        </div>
        <p className="text-gray-700 text-base">
          {university.UniversityDepartment}
        </p>
      </div>
    </motion.div>
  );
}

export default UniCard;
