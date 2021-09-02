const Footer = () => {
  return (
    <div className="bg-dark text-light fixed-bottom text-center py-3">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <a href="http://localhost:1337/admin" target="_blank">
              Admin Area
            </a>
          </div>
          <div className="col-4">Footer Component will be here</div>
          <div className="col-4">
            <a
              href="https://github.com/jmyates2014/Code-Snippet-Cheatsheet"
              target="_blank"
            >
              GitHub Repo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
