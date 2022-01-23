import React from 'react';
import cn from 'classnames/bind';
import Hero from '../components/hero';
import Container from '../components/shared/layout/container';
import Background from '../components/hero/background';
import Steps from '../components/steps';
import ChooseCar from '../components/choose_car';
import CreditCondition from '../components/choose_car_by_credit';
import Credit from '../components/credit';
import Banks from '../components/banks';
import CreditBackground from '../components/credit_application/credit_background';
import CreditApplication from '../components/credit_application';

import css from './style.module.css';
import TradeIn from '../components/trade_in';
import CustomBackground from '../components/shared/background';
import ConsultingBackground from '../components/consulting/consulting_background';
import Consulting from '../components/consulting';
import Questions from '../components/questions';
import QuestionBackground from '../components/questions/question_background';
import Disclaming from '../components/disclamer';
import DisclamerBackground from '../components/disclamer/disclamer_background';
import FooterBackground from '../components/footer/footer_background';
import Footer from '../components/footer';
import Divider from '../components/shared/divider';
import Copyright from '../components/footer/copyright';

const cx = cn.bind(css);

function HomePage() {
	return (
		<>
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
				<div className={cx('application-container')}>
					<CreditApplication />
				</div>
			</CreditBackground>
			<Container>
				<TradeIn />
			</Container>
			<CustomBackground customClass={cx('consult-bg')}>
				<ConsultingBackground>
					<Container>
						<Consulting />
					</Container>
				</ConsultingBackground>
				<QuestionBackground>
					<Container>
						<Questions />
					</Container>
				</QuestionBackground>
			</CustomBackground>

			<CustomBackground customClass={cx('footer-bg')}>
				<DisclamerBackground>
					<Container>
						<Disclaming />
					</Container>
				</DisclamerBackground>
				<FooterBackground>
					<Container>
						<Footer />
					</Container>
					<Divider />
					<Container>
						<Copyright />
					</Container>
				</FooterBackground>
			</CustomBackground>
		</>
	);
}

export default HomePage;
