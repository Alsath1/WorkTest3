import MorozImg from "/moroz.png";
import s from "./RightCard.module.sass";

const White = () => {
  return <div className={s.White}>смотреть видео</div>;
};

export const RightCard = () => {
  return (
    <div className={s.RightCardCont}>
      <div className={s.Text1}>
        <img src={MorozImg}></img>
        Каждый малыш ждет под новый год сказку.
        <p className={s.Text2}>
          Живой, настоящий Дед мороз и Снегурочка приедут к ребятам в
          школу,детский сад, на дом или во двор дома по г. Иваново.
        </p>
        <p className={s.Text3}>
          (<White />)
        </p>
        <p className={s.Text4}>
          В нашей компании действуют несколько опытных профессиональных
          составов, поэтому мы найдем время для всех.
        </p>
      </div>

      <p className={s.Text5}>
        Работаем ПО ПРЕДОПЛАТЕ ! Никогда не выпиваем и приезжаем в чистых
        красивых костюмах. Опыт и ответственность - делает нас самой
        востребованной фирмой по заказу Деда Мороза и Снегурочки в городе.
      </p>
      <p className={s.Text6}>
        Просим оформлять заказы на сайте, который вам всё посчитает. Действует
        система СМС оповещения.
      </p>
      <div className={s.Text7}>
        <div>тел:22-88-22</div>
        <div>(с 25.12 до 16:00)</div>
      </div>
    </div>
  );
};
