import React from "react";
import css from "./style.module.css";
import cn from "classnames/bind";
import Header from "../shared/header";
import MainHeading from "../shared/headings/main_heading";
import { useFetch } from "../../hooks/useFetch";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import DropdownMenuCredit from "../dropdown menu/dropdown_credit";
import Subheading from "../shared/headings/subheading";
import CarSelect from "./car_select";

const cx = cn.bind(css);

const CreditApply = () => {
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
    <section>
      <div className={cx("credit-header")}>
        <Header type={"light"} />
        <MainHeading customClass={cx("creditapply-heading")}>
          Оформление заявки <br />
          на автокредит
        </MainHeading>
        <FormProvider {...methods}>
          {" "}
          {/* // pass all methods into the context */}
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            {/* <NestedInput />
            <input type="submit" /> */}
            <div className={cx("append-headingb-block")}>
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
          </form>
        </FormProvider>
      </div>
    </section>
  );
};

function NestedInput() {
  const { register } = useFormContext(); // retrieve all hook methods
  return <input {...register("test")} />;
}

export default CreditApply;
