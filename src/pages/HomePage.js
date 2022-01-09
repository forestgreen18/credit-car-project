import React from "react";
import Hero from "../components/hero";
import Container from "../components/shared/layout/container";
import Background from "../components/hero/background";
import Steps from "../components/steps";
import ChooseCar from "../components/choose_car";

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
    </div>
  );
};

export default HomePage;
