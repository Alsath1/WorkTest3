import s from "./Nav.module.sass";

export const Nav = () => {
  return (
    <div className={s.NavCont}>
      <div className={s.order}>Сделать заказ</div>
      <div className={s.Questions}>Вопросы</div>
      <div className={s.About}>О нас</div>
      <div className={s.Check}>Проверить заказ</div>
      <div className={s.Cancel}>Отменить заказ</div>
    </div>
  );
};
