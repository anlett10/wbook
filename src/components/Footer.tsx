const Footer = () => {
  return (
    <footer>
      <p className="px-4 pt-24 pb-6 md:text-base">
        This website is built with T3 stacks{" "}
        <a
          href="https://github.com/t3-oss/create-t3-app"
          target="_blank"
          rel="noreferrer"
          className="transition-opacity duration-300 opacity-75 text-teal-400 hover:opacity-100"
        >
          GitHub
        </a>
      </p>
    </footer>
  );
};

export default Footer;
