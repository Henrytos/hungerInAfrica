export default function Section({ children, className, id }) {
  return (
    <section
      className={`px-[20%] max-2xl:px-[10%] max-md:px-[2%] 
    ${className ? className : ""} `}
      id={`${id ? id : ""} `}
    >
      {children}
    </section>
  );
}
