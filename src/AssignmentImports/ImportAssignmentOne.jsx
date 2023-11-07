import Greeting from "../Assignments/Assignment-1/Ques1/Greeting";
import Usercard from "../Assignments/Assignment-1/Ques2/Usercard";
import Weather from "../Assignments/Assignment-1/Ques3/Weather";
import Counter from "../Assignments/Assignment-1/Ques4/Counter";
import Tasklist from "../Assignments/Assignment-1/Ques5/Tasklist";
import Button from "../Assignments/Assignment-1/Ques6/Button";

const ImportAssignmentOne = () => {
  return (
    <>
      <h3 style={{ color: "blue" }}>Ques 1</h3>
      <Greeting />
      <hr />
      <h3 style={{ color: "blue" }}>Ques 2</h3>
      <Usercard
        name="Mr. Bean"
        email="mrbean@gmail.com"
        avatarURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNGwbLXIOSMndQIA4EpYXdHRXBjCx9IqDJ4w&usqp=CAU"
      />
      <Usercard
        name="Shinchan"
        email="shinchan@gmail.com"
        avatarURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnz-dClZM9plAFDmRBZyBQP759dl3E5KPSpw&usqp=CAU"
      />
      <hr />
      <h3 style={{ color: "blue" }}>Ques 3</h3>
      <Weather temperature="7" />
      <Weather temperature="30" />
      <hr />
      <h3 style={{ color: "blue" }}>Ques 4</h3>
      <Counter />
      <hr />
      <h3 style={{ color: "blue" }}>Ques 5</h3>
      <Tasklist
        tasks={[
          { name: "Complete Assignment", id: 1 },
          { name: "Prepare Documentation", id: 2 },
          { name: "Push changes on github", id: 3 },
        ]}
      />
      <hr />
      <h3 style={{ color: "blue" }}>Ques 6</h3>
      <Button text="Success" color="Green" />
      <Button text="Error" color="Red" />
      <Button text="Pending" color="Yellow" />
    </>
  );
};
export default ImportAssignmentOne;