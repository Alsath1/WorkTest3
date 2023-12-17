import s from "./App.module.sass";
import { LeftCard } from "./LeftCard/LeftCard";
import { RightCard } from "./RightCard/RightCard";
import { Nav } from "./nav/Nav";
import headImg from "/head.png";
import snows from "/snow.png";

function App() {
  return (
    <div className={s.BigCont}>
      <div className={s.MainCont}>
        <img src={headImg} alt="" />
        <Nav></Nav>
        <div className={s.underNav}>Оформите заказ на удобное вам время:</div>
        <div className={s.CartCont}>
          <LeftCard></LeftCard>
          <RightCard></RightCard>
        </div>
      </div>
      <img src={snows} className={s.Swons} />
    </div>
  );
}

export default App;
