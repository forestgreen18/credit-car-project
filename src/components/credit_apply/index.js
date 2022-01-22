import React from "react";
import css from "./style.module.css";
import cn from "classnames/bind";
import Header from "../shared/header";
import MainHeading from "../shared/headings/main_heading";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import ChooseCarForm from "./choose_car_form";
import BuyerInfoForm from "./buyer_info_form";

const cx = cn.bind(css);

const CreditApply = () => {
  const schema = yup
    .object({
      buyerNameInfo: yup.string().required(),
      buyerPhoneNumber: yup.string().length(11).required(),
      workingPhone: yup.string().length(11).required(),
      buyerAddress: yup.string().required(),
      confidantName: yup.string().required(),
      confidantPhone: yup.string().length(11).required(),
      confidantType: yup.string().required(),
    })
    .required();

  const methods = useForm({
    defaultValues: {
      termOfCredit: 1,
    },

    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

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
