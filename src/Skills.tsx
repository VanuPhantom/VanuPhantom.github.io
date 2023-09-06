import { ReactNode } from "react";

function Skill({ title, content }: { title: ReactNode; content: ReactNode }) {
  return (
    <div className="skill">
      <h3>{title}</h3>
      {content}
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div>
        <Skill
          title="C#"
          content={
            <p>
              I've made extensive use of this programming language whilst
              developing games in Unity, web apps with ASP.NET Core and various
              terminal and desktop apps.
            </p>
          }
        />
        <Skill
          title="Typescript"
          content={
            <p>
              I frequently use TypeScript to build web and NodeJS apps. To do
              this, I use my deep knowledge about the type system, the ability
              to program in multiple paradigms and powerful libraries such as
              RxJS to develop reliable and maintainable code.
            </p>
          }
        />
        <Skill
          title="ASP.NET Core"
          content={
            <p>
              With ASP.NET Core, I've built many web apps, from simple websites
              to complex large-scale platforms.
            </p>
          }
        />
        <Skill
          title="React"
          content={
            <p>
              I've built many web apps (and, thanks to Electron, also some
              desktop apps) using React. Thanks to my work on large and
              extremely complex React apps, I have a strong intuition for
              working with React Hooks and the ecosystem of libraries which
              enable the development of large applications.
            </p>
          }
        />
        <Skill
          title="Value-oriented thinking"
          content={
            <p>
              Whenever I work on projects, I try to view my results from the
              stakeholders' perspec- tives and evaluate how I can deliver the
              most value to them with my work.
            </p>
          }
        />
        <Skill
          title="MSSQL and Entity Framework"
          content={
            <p>
              The combination of MSSQL and EF Core is my first choice when
              developing apps in which database interactions are required. I
              both have experience in developing and maintaining small to
              medium-sized apps and developing scalable systems with techniques
              such as database per tenant systems and read/write separation.
            </p>
          }
        />
        <Skill
          title="Test-driven development"
          content={
            <p>
              I frequently apply TDD to improve my code's quality, ensure it
              adheres to require- ments and to prevent its behaviour from
              drifting when other developers alter it.
            </p>
          }
        />
      </div>
    </section>
  );
}
