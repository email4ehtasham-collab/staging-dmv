"use client";

import { Children, useState, type ReactNode } from "react";
import Link from "next/link";
import Button from "@/components/Common/Button";
import styles from "./area-projects-grid.module.scss";

// Grid of project cards: the first `initialCount` are visible, the rest are in the
// HTML but hidden until "Show more" is pressed.
export default function AreaProjectsShowMore({
  initialCount,
  gridClassName,
  children,
}: {
  initialCount: number;
  gridClassName: string;
  children: ReactNode;
}) {
  const [expanded, setExpanded] = useState(false);
  const cards = Children.toArray(children);
  const hiddenCount = Math.max(cards.length - initialCount, 0);

  return (
    <>
      <div className={gridClassName} id="area-projects-grid">
        {cards.map((card, index) =>
          !expanded && index >= initialCount ? (
            <div key={index} hidden>
              {card}
            </div>
          ) : (
            <div key={index} style={{ display: "contents" }}>
              {card}
            </div>
          )
        )}
      </div>

      <div className={styles.actions}>
        {hiddenCount > 0 ? (
          <Button
            type="button"
            variant="secondary"
            onClick={() => setExpanded((value) => !value)}
            aria-expanded={expanded}
            aria-controls="area-projects-grid"
          >
            {expanded ? "Show fewer projects" : `Show more projects (${hiddenCount})`}
          </Button>
        ) : null}
        <Link href="/projects" className={styles.allLink}>
          View all projects
        </Link>
      </div>
    </>
  );
}
