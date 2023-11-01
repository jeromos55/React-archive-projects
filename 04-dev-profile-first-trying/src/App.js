import "./styles.css";

export default function App() {
  function Avatar(props) {
    return (
      <div className="avatar">
        <img src={props.photo} alt={props.name} />
        <h1 style={{ textAlign: "center" }}> {props.name} </h1>
      </div>
    );
  }

  function Intro(props) {
    return (
      <div className="avatar">
        <p> {props.text} </p>
      </div>
    );
  }

  function SkillList() {
    return (
      <div className="skill-list">
        <Skill bcgColor="blue" text="fdgghhfdf" />
        <Skill bcgColor="red" text="fdghfdf " />
        <Skill bcgColor="yellow" text="fdf " />
        <Skill bcgColor="green" text="fdfjkjkjkdf " />
        <Skill bcgColor="lightblue" text="fdghfdf " />
      </div>
    );
  }

  function Skill(props) {
    return (
      <p className="skill" style={{ backgroundColor: props.bcgColor }}>
        {props.text} &#128077;
      </p>
    );
  }

  return (
    <div className="card">
      <Avatar photo="images/programmer.jpg" name="Robert Radnoti" />
      <div className="data">
        <Intro
          text="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer"
        />
        <SkillList />
      </div>
    </div>
  );
}
