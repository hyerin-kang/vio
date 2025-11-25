import Image from "next/image";
import "./subpage-bg.scss";
import Link from "next/link";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: (delay) => ({
    opacity: 1,
    transition: {
      delay: delay,
      delayChildren: 0.3,
      staggerChildren: 0.4,
    },
  }),
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

const SubpageBG = ({
  data,
  title,
  video,
  subText,
  subTitle,
  imgType = false,
  src = "",
  dimmed = false,
}) => {
  return (
    <section className="subpage-bg">
      {imgType ? (
        <Image src={src} alt={title[0]} fill className="object-cover" />
      ) : (
        <video autoPlay muted loop playsInline>
          <source src={video} type="video/mp4" />
        </video>
      )}

      {dimmed && <div className="dimm-bg"></div>}

      <div className="inner">
        {/* breadcrumb */}
        <div className="breadcrumb">
          {data.map((item, index) => (
            <Link href={item.link} key={index}>
              {item.title}
            </Link>
          ))}
        </div>

        {/* TEXT AREA */}
        <div className="text-area">
          <motion.div
            variants={containerVariants}
            custom={0}
            initial="hidden"
            animate="visible"
          >
            {title?.map((line, i) => (
              <motion.span variants={itemVariants} key={i} className="title">
                {line}
              </motion.span>
            ))}
          </motion.div>

          <div className="text-bottom">
            {/* LEFT — 0.8초 뒤 */}
            <div className="left">
              <motion.div
                variants={containerVariants}
                custom={0.8}
                initial="hidden"
                animate="visible"
              >
                <motion.p
                  variants={itemVariants}
                  className="sub-title"
                  dangerouslySetInnerHTML={{ __html: subTitle }}
                ></motion.p>
              </motion.div>
            </div>

            <div className="right">
              <motion.div
                variants={containerVariants}
                custom={1.2}
                initial="hidden"
                animate="visible"
              >
                <motion.p variants={itemVariants} className="sub-text">
                  {subText}
                </motion.p>
              </motion.div>

              <p className="scroll-text">Scroll to explore</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubpageBG;
