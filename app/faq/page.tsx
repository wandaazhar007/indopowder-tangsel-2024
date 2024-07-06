'use client'
import '../components/faq/faq.scss';

import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { motion } from "framer-motion";
import Faq from '../components/faq/Faq';

const faq = () => {
  return (
    <Faq />
  );
}

export default faq;