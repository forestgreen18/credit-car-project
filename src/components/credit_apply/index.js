import React from "react";
import css from "./style.module.css";
import cn from "classnames/bind";
import Header from "../shared/header";
import MainHeading from "../shared/headings/main_heading";
import { useFetch } from "../../hooks/useFetch";
import { useForm, FormProvider, useFormContext } from "react-hook-form";

import ChooseCarForm from "./choose_car_form";
import BuyerInfoForm from "./buyer_info_form";

const cx = cn.bind(css);

const CreditApply = () => {
  // const { response } = useFetch(
  //   "auto/categories/1/marks?api_key=AJExiG5NOgeHUD44enPoMytv92EbOBoOpXq9JF6o"
  // );

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
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <ChooseCarForm />
            <BuyerInfoForm />
          </form>
        </FormProvider>
      </div>
    </section>
  );
};

export default CreditApply;
