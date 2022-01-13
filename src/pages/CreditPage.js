import React from "react";
import Container from "../components/shared/layout/container";

import css from "./style.module.css";
import cn from "classnames/bind";
import CreditApply from "../components/credit_apply";

const cx = cn.bind(css);

const CreditPage = () => {
  return (
    <div>
      <Container>
        <CreditApply />
      </Container>
    </div>
  );
};

export default CreditPage;
