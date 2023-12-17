import imgStroke from "/lineCard.png";
import s from "./LeftCard.module.sass";

const Min = () => {
  return <div className={s.yello}>(20 мин.)</div>;
};

export const LeftCard = () => {
  return (
    <div className={s.LeftCardCont}>
      <div className={s.buttons}>
        <div className={s.btn1}>20 мин.</div>
        <div className={s.btn2}>40 мин.</div>
      </div>
      <div className={s.textCont1}>
        <div className={s.MainTex}>
          Цены с 25-30 декабря
          <Min /> :
        </div>
        <div className={s.underText1}>с 10:00 до 15:45 = 3000 р</div>
        <div className={s.underText2}>с 16:00 до 21:00 = 5000 р</div>
        <div className={s.underText3}>(из за пробок)</div>
      </div>
      <img src={imgStroke} alt="" />
      <div className={s.textCont2}>
        <div className={s.MainTex}>
          Цены на 31 декабря <Min />:
        </div>
        <div className={s.underText1}>с 9:45 до 11:45 = 3000 р</div>
        <div className={s.underText2}>с 11:45 до 18:45 = 3500 р</div>
        <div className={s.underText3}>с 19:00 до 22:45 = 4500 р</div>
        <div className={s.underText4}>с 23:00 до 01:00 = 8000 р</div>
      </div>
      <img src={imgStroke} alt="" />
      <div className={s.textCont2}>
        <div className={s.MainTex}>
          Цены с 1-7 января <Min />:
        </div>
        <div className={s.underText1}>с 12:00 до 18:00 = 3000 р</div>
      </div>
    </div>
  );
};
