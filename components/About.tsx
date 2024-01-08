const About = () => {
  return (
    <div className="space-y-10 max-w-[700px] px-4">
      <h1 className="text-xl font-semibold">Use Focus to keep track of time while working on your tasks</h1>

      <p>
        <h2 className="text-lg font-semibold p-5">About the App</h2>
        <h3 className="text-base">
          This app was developed with an online <span className="font-semibold">Pomodoro Timer</span> and a <span className="font-semibold">task-list</span> feature to add and delete tasks. Use this app as a tool to keep track of your tasks at hand and work through them using the timer and Pomodoro technique to boost your productivity. There is also the option to <span className="font-semibold">modify timer intervals</span> based on your preference.
        </h3>
      </p>

      <p>
        <h2 className="text-lg font-semibold p-5">What is the Pomodoro Technique?</h2>
        <h3 className="text-base">
          The Pomodoro Technique is created by Francesco Cirillo for a <span className="font-semibold">more productive way to work and study.</span> The technique uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks. Each interval is known as a pomodoro, from the Italian word for 'tomato', after the tomato-shaped kitchen timer that Cirillo used as a university student. - <a href="https://en.wikipedia.org/wiki/Pomodoro_Technique">Wikipedia</a>
        </h3>
      </p>
    </div>
  );
};

export default About;
