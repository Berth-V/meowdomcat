import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__credits">
        Credits to:
        <br />
        <a
          className="footer__a"
          href="https://www.flaticon.com/free-stickers/computer"
          title="computer stickers"
        >
          Computer stickers created by Stickers - Flaticon
        </a>
        <br />
        <a
          className="footer__a"
          href="https://www.flaticon.com/free-stickers/cat"
          title="cat stickers"
        >
          Cat stickers created by DinosoftLabs - Flaticon
        </a>
        <br />
        <a
          className="footer__a"
          href="https://www.flaticon.com/free-icons/paw"
          title="paw icons"
        >
          Paw icons created by Vector Stall - Flaticon
        </a>
      </div>
    </footer>
  );
}
