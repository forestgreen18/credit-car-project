import React from "react";
import css from "./style.module.css";
import cn from "classnames/bind";
import { useFetch } from "../../../hooks/useFetch";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import DropdownMenuCredit from "../../dropdown menu/dropdown_credit";
import Subheading from "../../shared/headings/subheading";
import CarSelect from "../car_select";
import CreditSlider from "../../shared/CreditSlider";
import Divider from "../../shared/divider";
import PriceItm from "./price_item";
const cx = cn.bind(css);

const ChooseCarForm = () => {
  const { response } = useFetch(
    "auto/categories/1/marks?api_key=AJExiG5NOgeHUD44enPoMytv92EbOBoOpXq9JF6o"
  );

  const carList = [
    { value: "Hyundai", label: "Hyundai" },
    { value: "Solaris", label: "Solaris" },
  ];

  const methods = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className={cx("choosecar")}>
      <FormProvider {...methods}>
        {" "}
        {/* // pass all methods into the context */}
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          {/* <NestedInput />
            <input type="submit" /> */}
          <div className={cx("append-heading-block")}>
            <Subheading customClass={cx("credit-subheading")}>
              Выберите авто
            </Subheading>
          </div>

          <div className={cx("option-block")}>
            <DropdownMenuCredit options={carList} subheading={"Марка авто"} />
            <DropdownMenuCredit options={carList} subheading={"Марка авто"} />
          </div>
          <div className={cx("choosing-car")}>
            <CarSelect />
          </div>
          <div className={cx("credit-car-block")}>
            <CreditSlider type={"termOfCredit"} subtype={"credit-page"} />
            <CreditSlider type={"initialLoan"} subtype={"credit-page"} />
          </div>
          <Divider customClass={cx("divider")} />
          <div className={cx("price-block")}>
            <PriceItm title={"Стоимость авто"} price={"349 000  ₽"} />
            <PriceItm title={"Ежемесячный платёж"} price={"15 000  ₽"} />
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default ChooseCarForm;
