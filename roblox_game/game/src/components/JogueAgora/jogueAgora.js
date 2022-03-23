import { Button } from "@material-ui/core";
import "./jogueAgora.css";

export default function JogueAgora() {
  return (
    <section className="jogue-agora">
      <Button
        variant="contained"
        color="primary"
        href="https://www.roblox.com/home"
      >
        <h4 className="texto">Jogue Agora!</h4>
      </Button>
    </section>
  );
}
