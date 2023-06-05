'use client';

import { twMerge } from 'tailwind-merge';

interface TemplateProps {
  children: React.ReactNode;
  className?: string;
}

const Template: React.FC<TemplateProps> = ({ children, className }) => {
  return <div className={twMerge(``, className)}></div>;
};

export default Template;
