const Hash = "#";
const Footer = ({ Name }) => (
  <footer class="text-muted py-5">
    <div class="container">
      <p class="float-end mb-1">
        <a href={Hash}>Back to top</a>
      </p>
      <p class="mb-0">
        Copyright &copy; {new Date().getFullYear()} {Name}. All Rights Reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
