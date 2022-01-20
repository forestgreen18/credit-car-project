import React from "react";

import css from "./style.module.css";
import cn from "classnames/bind";
import Bank from "./bank";
import SectionHeading from "../shared/headings/section_heading";

import absoulte from "./assets/absolute.svg";
import absoulteGray from "./assets/absolutebank_gray.svg";

import expobank from "./assets/expobank.svg";
import expobankGray from "./assets/expobanks_gray.svg";

import tinkoff from "./assets/tinkoff.svg";
import tinkoffGray from "./assets/tinkoff_gray.svg";

import zenit from "./assets/bankzenit.svg";
import zenitGray from "./assets/zenitbank_gray.svg";

import setelem from "./assets/setelem.svg";
import setelemGray from "./assets/setelem_gray.svg";

import lokobank from "./assets/lokobank.svg";
import lokobankGray from "./assets/lokobank_gray.svg";

import bankunion from "./assets/bankunion.svg";
import bankunionGray from "./assets/bankunion_gray.svg";

import vtb from "./assets/vtnbank.svg";
import vtbBank from "./assets/vtnbank_gray.svg";

import rosbank from "./assets/rosbank.svg";
import rosbankGray from "./assets/rosbank_gray.svg";

import primsocbank from "./assets/primsocbank.svg";
import primsocbankGray from "./assets/primsocbank_gray.svg";

import otpbank from "./assets/otpbank.svg";
import otpbankGray from "./assets/otpbank_gray.svg";

import rgcbank from "./assets/rgcbank.svg";
import rgcbankGray from "./assets/rgcbank_gray.svg";

import sovcombank from "./assets/sovcombank.svg";
import sovcombankGray from "./assets/sovcombank_gray.svg";

import kvantmobile from "./assets/kvantmobile.svg";
import kvantmobileGray from "./assets/kvantmobile_gray.svg";

import renessance from "./assets/renessance.svg";
import renessanceGray from "./assets/renessance_gray.svg";

const cx = cn.bind(css);

const banksInfo = [
  {
    imgUrl: tinkoff,
    imgGrayUrl: tinkoffGray,
    alt: "tinkoffbank",
  },
  {
    imgUrl: vtb,
    imgGrayUrl: vtbBank,

    alt: "vtb_bank",
  },
  {
    imgUrl: lokobank,
    imgGrayUrl: lokobankGray,

    alt: "lokobank",
  },
  {
    imgUrl: otpbank,
    imgGrayUrl: otpbankGray,

    alt: "otpbank",
  },
  {
    imgUrl: setelem,
    imgGrayUrl: setelemGray,

    alt: "setelem",
  },
  {
    imgUrl: expobank,
    imgGrayUrl: expobankGray,

    alt: "expobank",
  },
  {
    imgUrl: absoulte,
    imgGrayUrl: absoulteGray,

    alt: "absolute_bank",
  },
  {
    imgUrl: bankunion,
    imgGrayUrl: bankunionGray,

    alt: "bank_soyuz",
  },
  {
    imgUrl: rosbank,
    imgGrayUrl: rosbankGray,

    alt: "rosbank",
  },
  {
    imgUrl: sovcombank,
    imgGrayUrl: sovcombankGray,

    alt: "sovcombank",
  },
  {
    imgUrl: kvantmobile,
    imgGrayUrl: kvantmobileGray,

    alt: "kvanmobile_bank",
  },
  {
    imgUrl: zenit,
    imgGrayUrl: zenitGray,

    alt: "zenitbank",
  },
  {
    imgUrl: primsocbank,
    imgGrayUrl: primsocbankGray,

    alt: "primsocbank",
  },
  {
    imgUrl: rgcbank,
    imgGrayUrl: rgcbankGray,

    alt: "rgcbank",
  },
  {
    imgUrl: renessance,
    imgGrayUrl: renessanceGray,

    alt: "renessance_credit",
  },
  {
    imgUrl: "",
    imgGrayUrl: "renessanceGray",
    alt: "",
  },
];

const Banks = () => {
  return (
    <section className={cx("bank-section")}>
      <div className={cx("bank-heading")}>
        <SectionHeading customClass={cx("bank-heading")}>
          Crystal motors - <br /> партнёр 15 банков
        </SectionHeading>
        <span className={cx("desc-paragraph")}>
          Оказываем услуги по автокредитованию. Это позволяет <br />
          оперативно получать лучшие предложение по кредитам.
        </span>
      </div>
      <div className={cx("banks-wrapper")}>
        <div className={cx("banks-list")}>
          {banksInfo.map((bank) => {
            return (
              <Bank
                key={bank.alt}
                imgUrl={bank.imgUrl}
                imgGrayUrl={bank.imgGrayUrl}
                alt={bank.alt}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Banks;
