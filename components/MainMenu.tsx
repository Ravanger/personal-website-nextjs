/** @jsx jsx */
import React, { useState } from "react"
import { motion } from "framer-motion"
import { css, jsx } from "@emotion/core"

const mainmenu = {
  open: {
    top: 0,
    height: "100vh",
    display: "flex",
    transition: {
      when: "beforeChildren",
      duration: 0.3,
    },
  },
  closed: {
    top: "-100vh",
    height: 0,
    transition: {
      duration: 0.3,
      when: "afterChildren",
    },
    transitionEnd: { display: "none" },
  },
}

const menuitemswrapper = {
  open: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
  closed: {
    transition: { staggerChildren: 0.1, staggerDirection: 1 },
  },
}

const menuitem = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: "-100%",
    opacity: 0,
  },
}

const MainMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <motion.nav
        variants={mainmenu}
        initial={false}
        animate={isOpen ? "open" : "closed"}
        css={css`
          position: absolute;
          z-index: 190;
          top: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: blue;
          height: 100vh;
          width: 100vw;
        `}
      >
        <motion.ul
          css={css`
            display: flex;
            flex-direction: column;
            > li {
              font-size: 2rem;
              font-family: sans-serif;
              + li {
                margin-top: 1rem;
              }
            }
          `}
          variants={menuitemswrapper}
        >
          <motion.li
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{ scale: 0.95, transition: { duration: 0.02 } }}
            variants={menuitem}
          >
            Item 1
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95, transition: { duration: 0.02 } }}
            variants={menuitem}
          >
            Item 2
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95, transition: { duration: 0.02 } }}
            variants={menuitem}
          >
            Item 3
          </motion.li>
        </motion.ul>
      </motion.nav>
      <motion.button
        animate={{ rotate: isOpen ? 90 : 0 }}
        onClick={() => setIsOpen(!isOpen)}
        css={css`
          position: relative;
          z-index: 200;
        `}
      >
        X
      </motion.button>
    </>
  )
}

export default MainMenu
