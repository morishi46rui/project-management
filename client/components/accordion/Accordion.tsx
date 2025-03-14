'use client';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import styles from './accordion.module.css';
import type { AccordionProps } from './types';

export default function Accordion({ title, children, defaultOpen = true }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <section className={styles.section}>
      <h2
        className={styles.accordionTitle}
        onClick={() => setIsOpen(!isOpen)}
        onKeyUp={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            setIsOpen(!isOpen);
          }
        }}
      >
        <span className={`${styles.icon} ${isOpen ? styles.open : ''}`}>
          <ExpandMoreIcon style={{ fontSize: '1.5em' }} />
        </span>
        {title}
      </h2>
      <div className={`${styles.accordionContent} ${isOpen ? styles.open : ''}`}>{children}</div>
    </section>
  );
}
