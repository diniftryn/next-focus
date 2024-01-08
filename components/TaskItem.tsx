"use client";

import { useState } from "react";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";

type TaskItemProps = {
  // id: number;
  item: { id: number; text: string; isDone: boolean };
  tasks: { id: number; text: string; isDone: boolean }[];
  setTasks: any;
};

const TaskItem = ({ item, tasks, setTasks }: TaskItemProps) => {
  const [task, setTask] = useState(item);

  function onChange(value: boolean) {
    setTask({ ...task, isDone: value });
    console.log(task);
  }

  // function handleDelete() {
  //   setTasks(tasks.filter(task => task.id !== id));
  //   console.log(task.id);
  //   console.log(tasks);
  // }

  return (
    <div className="flex flex-row items-start space-x-3 space-y-0">
      <div>
        <Checkbox checked={task.isDone} onCheckedChange={onChange} />
      </div>
      <div>{task.text}</div>
    </div>
  );
};

export default TaskItem;
