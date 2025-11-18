"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Counter({ start, end, duration }) {
  const ref = useRef(null); //나중에 span과 연결되어서 span이 화면에 보이는지 확인
  const mv = useMotionValue(start); //애니메이션되는 숫자 저장소
  const rounded = useTransform(mv, (v) => Math.floor(v).toLocaleString());
  // Math.floor : 숫자를 소수점 버리고 정수로 표현 toLocaleString : 콤마넣기 (1,000)

  useEffect(() => {
    let observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        animate(mv, end, { duration });
      }
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect(); // 해지 (메모리 누수 방지)
  }, [mv, end, duration]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}
