import { useEffect, useState } from "react";

const mottoEndings: readonly string[] = [
  "WEB APPS",
  "LIBRARIES",
  "BACK ENDS",
  "NATURAL LANGUAGE SYSTEMS",
  "CHANGE",
];

/**
 * Creates a promise which resolves in the specified amount of time
 * @param timeout The amount of time for which to wait in milliseconds
 */
function wait(timeout: number): Promise<void> {
  return new Promise((res) => setTimeout(res, timeout));
}

export default function Motto() {
  const [mottoEnding, setMottoEnding] = useState(mottoEndings[0]);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      enum Direction {
        FORWARD = 1,
        BACKWARD = -1,
      }

      let direction: Direction = Direction.BACKWARD;
      let mottoEndingIndex = 0;
      let mottoEndingInternal = mottoEndings[mottoEndingIndex];

      await wait(1500);

      while (mottoEndingInternal !== mottoEndings[mottoEndings.length - 1]) {
        await wait(1000 / mottoEndings[mottoEndingIndex].length);

        if (cancelled) return;

        mottoEndingInternal = mottoEndings[mottoEndingIndex].substring(
          0,
          mottoEndingInternal.length + direction
        );

        setMottoEnding(mottoEndingInternal);

        if (
          direction === Direction.BACKWARD &&
          mottoEndingInternal.length === 0
        ) {
          mottoEndingIndex += 1;
          direction = Direction.FORWARD;
        } else if (
          direction === Direction.FORWARD &&
          mottoEndingInternal === mottoEndings[mottoEndingIndex]
        ) {
          direction = Direction.BACKWARD;
          await wait(1500);
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="motto">
      <h1>
        I BUILD <span className="highlight">{mottoEnding}</span>
      </h1>
      <h3>- Tess Ellenoir Duursma</h3>
    </section>
  );
}
