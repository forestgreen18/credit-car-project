import React from 'react';
import cn from 'classnames/bind';
import Container from '../components/shared/layout/container';

import Disclaming from '../components/disclamer';
import DisclamerBackground from '../components/disclamer/disclamer_background';
import FooterBackground from '../components/footer/footer_background';
import Footer from '../components/footer';
import Divider from '../components/shared/divider';
import Copyright from '../components/footer/copyright';

import css from './style.module.css';
import CreditApply from '../components/credit_apply';

const cx = cn.bind(css);

function CreditPage() {
	return (
		<div>
			<Container>
				<CreditApply />
			</Container>
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
		</div>
	);
}

export default CreditPage;
