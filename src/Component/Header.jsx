import { TAGLINE } from "./profileData";

const Header = () => {
  return (
    <header>
      <h1>Marlon Marin Barco</h1>
      <p className="fontThin TxCenter">{TAGLINE}</p>
    </header>
  );
};
export default Header;
