import React from "react";
import css from "./style.module.css";
import cn from "classnames/bind";
import Input from "./input_itm";
import { useFetch } from "../../../hooks/useFetch";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import Subheading from "../../shared/headings/subheading";
import DropdownMenuCredit from "../../dropdown menu/dropdown_credit";
import Button from "../../shared/button";

const cx = cn.bind(css);

const BuyerInfoForm = () => {
  const { response } = useFetch(
    "auto/categories/1/marks?api_key=AJExiG5NOgeHUD44enPoMytv92EbOBoOpXq9JF6o"
  );

  const confidants = [
    { value: "relative", label: "Родственник" },
    { value: "wife/husband", label: "Муж/Жена" },
  ];

  const methods = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className={cx("choosecar")}>
      <div className={cx("buyer-info")}>
        <div className={cx("append-heading-block")}>
          <Subheading>Информация о заёмщике</Subheading>
        </div>
        <div className={cx("buyer-inputs")}>
          <div className={cx("name-and-phone")}>
            <Input
              value={"Болтовский Сергей Николаевич"}
              subheading={"Полное ФИО"}
            />

            <Input value={"8-913-107-07-25"} subheading={"Мобильный телефон"} />

            <Input value={"Рабочий телефон"} />
          </div>
          <div>
            <Input
              value={"Томская обл., п.Светлый, д. 15 кв 57"}
              subheading={"Адрес фактического проживания "}
            />
          </div>
        </div>
      </div>
      <div className={cx("сonfidants")}>
        <Subheading>Доверенные лица</Subheading>

        <div className={cx("confidants-inputs")}>
          <div className={cx("confidant-info")}>
            <Input value={"Игорь Николевич "} subheading={"ФИО"} />

            <Input value={"8 913-104-39-89"} subheading={"Мобильный телефон"} />

            <DropdownMenuCredit
              options={confidants}
              subheading={"Кем приходится"}
            />
          </div>
        </div>
      </div>
      <div className={cx("confirmation")}>
        <p>
          Отправляя заявку вы соглашатесь с условями обработки{" "}
          <span>персональных данных</span>
        </p>
        <Button
          color={"blue"}
          title={"Отправить заявку"}
          customClass={cx("confirmation-btn")}
        />
      </div>
    </div>
  );
};

export default BuyerInfoForm;
