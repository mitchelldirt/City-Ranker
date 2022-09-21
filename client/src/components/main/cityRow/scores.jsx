import { motion } from 'framer-motion'

function AnimationDiv({ classNames, rotation, childComponent }) {
  return (
    <motion.div
      className={classNames}
      animate={{
        rotate: rotation
      }}
      transition={{
        duration: 2,
        ease: "easeInOut"
      }}
    >{childComponent}
    </motion.div>
  );
}

export default function Score({ degrees, percent }) {
  return (
    <>
      <div className="circle-wrap">
        <div className="circle">
          <AnimationDiv rotation={degrees} classNames={"mask full"} childComponent={<AnimationDiv rotation={degrees} classNames={"fill"} />} />
          <div className="mask half">
            <AnimationDiv rotation={degrees} classNames={"fill"} />
          </div>
          <div className="inside-circle"> {percent} </div>
        </div>
      </div>
    </>
  )
}