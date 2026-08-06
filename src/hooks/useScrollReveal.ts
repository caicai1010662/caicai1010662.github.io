"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type RefObject,
} from "react";

type Options = {
  /** 元素进入视口的可见比例阈值，默认 0.1 */
  threshold?: number;
  /** 视口外边距，默认 0px 0px -40px 0px（元素进入视口稍下方即触发） */
  rootMargin?: string;
};

type ScrollRevealResult<T extends HTMLElement> = {
  ref: RefObject<T | null>;
  /** 元素首次进入视口后保持 true，且只触发一次 */
  isVisible: boolean;
};

/**
 * 滚动揭示动画 hook：元素进入视口时 isVisible 变为 true，
 * 之后 observer 断开，避免重复触发。
 * 与 globals.css 中的 .reveal / .reveal-visible 配合使用。
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: Options = {}
): ScrollRevealResult<T> {
  const { threshold = 0.1, rootMargin = "0px 0px -40px 0px" } = options;
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || isVisible) return;

    if (typeof IntersectionObserver === "undefined") {
      // 兜底：不支持 IntersectionObserver 时直接显示
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin, isVisible]);

  return { ref, isVisible };
}

/**
 * 根据 isVisible 生成 reveal 动画的 className 与延迟 style。
 * 供多个元素依次（staggered）浮现时复用：
 *
 *   <h2 {...revealProps(isVisible, 100)}>...</h2>
 */
export function revealProps(
  isVisible: boolean,
  delayMs = 0
): { className: string; style: CSSProperties | undefined } {
  return {
    className: isVisible ? "reveal reveal-visible" : "reveal",
    style: delayMs > 0
      ? ({ "--reveal-delay": `${delayMs}ms` } as CSSProperties)
      : undefined,
  };
}
