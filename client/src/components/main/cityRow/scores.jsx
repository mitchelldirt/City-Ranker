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

export default function Score({ percent }) {
  return (
    <>
      <div className="circle-wrap">
        <div className="circle">
          <AnimationDiv rotation={percent} classNames={"mask full"} childComponent={<AnimationDiv rotation={percent} classNames={"fill"} />} />
          <div className="mask half">
            <AnimationDiv rotation={percent} classNames={"fill"} />
          </div>
          <div className="inside-circle"> 75% </div>
        </div>
      </div>
    </>
  )
}