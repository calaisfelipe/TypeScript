import React, { ReactNode } from "react";

type SectionProps = {
  title?: string;
  children: ReactNode;
};

type sectionStyle = {
    [key: string]: string
}

const sectionStyled: sectionStyle = {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: '3px'

}

export const Section = ({
  children,
  title = "No title passed",
}: SectionProps) => {
  return (
    <section style={sectionStyled}>
      <h2>{title}</h2>

      {children}
    </section>
  );
};
