"use client";

import { motion } from "framer-motion";
import { Terminal, Database, Layout, Mail, ChevronDown } from "lucide-react";
import styles from "./page.module.css";

const FADE_UP_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100, damping: 20 } },
};

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="bg-gradient" />
      
      <div className="container">
        {/* Navigation spacer or header could go here */}
        
        {/* Hero Section */}
        <section className={styles.hero}>
          <motion.div
            initial="hidden"
            animate="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            <motion.h1 variants={FADE_UP_ANIMATION_VARIANTS} className={styles.title}>
              Imteaz Sadat <br /> Hossain.
            </motion.h1>
            <motion.p variants={FADE_UP_ANIMATION_VARIANTS} className={styles.subtitle}>
              Full Stack Software Developer crafting fast, performant, and robust web experiences with beautiful modern design.
            </motion.p>
            <motion.a 
              variants={FADE_UP_ANIMATION_VARIANTS} 
              href="#contact" 
              className={styles.contactCTA}
            >
              <Mail size={20} /> Let&apos;s Connect
            </motion.a>
          </motion.div>
          
          <motion.div 
             initial={{ opacity: 0, y: -20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 1.5, duration: 1, repeat: Infinity, repeatType: "reverse" }}
             style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)' }}
          >
            <ChevronDown className={styles.skillIcon} size={32} />
          </motion.div>
        </section>

        {/* What I Do Section */}
        <section className="section" id="skills">
          <motion.h2 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={FADE_UP_ANIMATION_VARIANTS}
            className={styles.sectionTitle}
          >
            Core Competencies
          </motion.h2>
          
          <div className={styles.skillsGrid}>
            {[
              {
                title: "Frontend Engineering",
                icon: <Layout className={styles.skillIcon} />,
                items: ["React & Next.js", "Vanilla CSS / CSS Modules", "Framer Motion", "Responsive Design"]
              },
              {
                title: "Backend Architecture",
                icon: <Terminal className={styles.skillIcon} />,
                items: ["Node.js & Express", "RESTful Data APIs", "Secure Authentication", "High-Performance Services"]
              },
              {
                title: "Database & Logic",
                icon: <Database className={styles.skillIcon} />,
                items: ["PostgreSQL & MongoDB", "Data Modeling", "Query Optimization", "Prisma / Mongoose"]
              }
            ].map((skill, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card"
              >
                <div className={styles.skillHeader}>
                  {skill.icon}
                  <span>{skill.title}</span>
                </div>
                <ul className={styles.skillList}>
                  {skill.items.map((item, i) => (
                    <li key={i} className={styles.skillItem}>
                      <span className={styles.skillDot} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Snippet */}
        <section className="section" id="contact" style={{ paddingBottom: '8rem', textAlign: 'center' }}>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="glass-card"
            style={{ maxWidth: '600px', margin: '0 auto' }}
          >
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', marginTop: 0, letterSpacing: '-0.02em' }}>Let&apos;s build something great.</h2>
            <p style={{ color: 'var(--muted)', marginBottom: '2.5rem', fontSize: '1.1rem', lineHeight: '1.6' }}>
              I&apos;m always open to discussing web application projects, architecture discussions, or professional opportunities.
            </p>
            <a href="mailto:hello@example.com" className={styles.contactCTA}>
              <Mail size={20} /> Reach Out via Email
            </a>
          </motion.div>
        </section>
      </div>
    </main>
  );
}
