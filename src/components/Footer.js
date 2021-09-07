const Hash = "#";
const Footer = ({ Name }) => (
  <footer className="text-muted py-5">
    <div className="container">
      <p className="float-end mb-1">
        <a href={Hash}>Back to top</a>
      </p>
      <p className="mb-0">
        Copyright &copy; {new Date().getFullYear()} {Name}. All Rights Reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
