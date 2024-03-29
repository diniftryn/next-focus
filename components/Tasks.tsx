"use client";

import { useState } from "react";
import TaskItem from "./TaskItem";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "./ui/checkbox";

const formSchema = z.object({
  text: z.string().min(1)
});

const Tasks = () => {
  const [tasks, setTasks] = useState<
    {
      id: number;
      text: string;
      isDone: boolean;
    }[]
  >([
    // { id: 0, text: "practice leetcode", isDone: true },
    // { id: 1, text: "review dsa", isDone: false },
    // { id: 2, text: "meditate", isDone: false }
  ]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { text: "" }
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (values.text.length !== 0) {
      const newTask = { id: tasks.length + Math.random(), text: values.text, isDone: false };
      console.log(newTask);
      setTasks([...tasks, newTask]);
      form.reset();
    }
  }

  return (
    <div>
      <div className="flex justify-center py-5">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex">
            <FormField
              control={form.control}
              name="text"
              render={({ field }) => (
                <FormItem>
                  <Input className="w-[80vw] md:max-w-[500px]" autoComplete="off" placeholder="Add Task" {...field} />
                </FormItem>
              )}
            />
            <Button type="submit">+</Button>
          </form>
        </Form>
      </div>

      <section className={tasks.length > 0 ? "flex flex-col items-center py-5" : ""}>
        {tasks &&
          tasks.map(task => (
            <div className="grid grid-cols-6 text-start p-2 border w-[90vw] md:max-w-[550px]">
              <div className="flex items-center col-start-1 col-end-5 px-1">
                <Checkbox />
                <div className="pl-3">{task.text}</div>
              </div>
              <div className="col-end-7 col-span-1 text-end px-2">
                <button onClick={() => setTasks(tasks.filter(item => item.id !== task.id))}>x</button>
              </div>
            </div>
          ))}
      </section>
    </div>
  );
};

export default Tasks;
