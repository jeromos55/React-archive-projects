import "./styles.css";

export default function App() {
  function Avatar() {
    return <img className="avatar" src="programmer.jpg" alt="Robert Radnoti" />;
  }

  function Intro() {
    return (
      <div>
        <h1> Robert Radnoti </h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer
        </p>
      </div>
    );
  }

  function SkillList() {
    return (
      <div className="skill-list">
        <Skill skill="React" emoji="&#128077;" color="lightblue" />
        <Skill skill="HTML+CSS" emoji="&#128077;" color="green" />
        <Skill skill="C#" emoji="&#128077;" color="yellow" />
        <Skill skill=".Net" emoji="&#128077;" color="red" />
        <Skill skill="SQL" emoji="&#128077;" color="brown" />
      </div>
    );
  }

  function Skill(props) {
    return (
      <div className="skill" style={{ backgroundColor: props.color }}>
        <span>{props.skill}</span>
        <span>{props.emoji}</span>
      </div>
    );
  }

  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}
