import { useEffect } from "react";

/** Marks every <img> as loading/loaded so CSS can show a shimmer then fade it in. */
export function ImageLoadWatcher() {
  useEffect(() => {
    const mark = (img: HTMLImageElement) => {
      if (img.dataset["img"]) return;
      if (img.complete && img.naturalWidth > 0) return; // already shown, no flash
      img.dataset["img"] = "loading";
      const done = () => {
        const finish = () => { img.dataset["img"] = "loaded"; };
        img.decode ? img.decode().then(finish, finish) : finish();
      };
      img.addEventListener("load", done, { once: true });
      img.addEventListener("error", () => { delete img.dataset["img"]; }, { once: true });
    };
    const scan = (root: ParentNode) => root.querySelectorAll("img").forEach(mark);
    scan(document);
    const observer = new MutationObserver((records) => {
      for (const r of records) r.addedNodes.forEach((n) => {
        if (n instanceof HTMLImageElement) mark(n);
        else if (n instanceof Element) scan(n);
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);
  return null;
}
