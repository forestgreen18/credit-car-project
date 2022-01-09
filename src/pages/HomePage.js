import React from "react";
import Hero from "../components/hero";
import Container from "../components/shared/layout/container";
import Background from "../components/hero/background";
import Steps from "../components/steps";
import ChooseCar from "../components/choose_car";
import CreditCondition from "../components/choose_car_by_credit";
import Credit from '../components/credit';
import Banks from '../components/banks';
import CreditBackground from '../components/credit_application/credit_background';
import CreditApplication from '../components/credit_application';

import css from './style.module.css'
import cn from 'classnames/bind'
const cx = cn.bind(css)


const HomePage = () => {
  return (
    <div>
      <Background>
        <Container>
          <Hero />
        </Container>
      </Background>
      <Container>
        <Steps />
      </Container>
      <Container>
        <ChooseCar />
      </Container>
      <Container>
        <CreditCondition />
      </Container>
      <Container>
        <Credit />
      </Container>
      <Container>
        <Banks />
      </Container>
      <CreditBackground>
        <div className={cx("application-container")}>
          <CreditApplication />
        </div>
      </CreditBackground>
    </div>
  );
};

export default HomePage;
