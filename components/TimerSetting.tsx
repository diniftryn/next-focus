const formSchema = z.object({
  pomodoroMinutes: z.coerce.number(),
  shortBreakMinutes: z.coerce.number(),
  longBreakMinutes: z.coerce.number()
});

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Form, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";

type SettingFormProps = {
  timer: {
    pomodoroMinutes: number;
    shortBreakMinutes: number;
    longBreakMinutes: number;
  };
  setTimer: any;
};

export function TimerSetting({ timer, setTimer }: SettingFormProps) {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      pomodoroMinutes: timer.pomodoroMinutes,
      shortBreakMinutes: timer.shortBreakMinutes,
      longBreakMinutes: timer.longBreakMinutes
    }
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (values.pomodoroMinutes !== timer.pomodoroMinutes || values.shortBreakMinutes !== timer.shortBreakMinutes || values.longBreakMinutes !== timer.longBreakMinutes) {
      setTimer(values);
      toast({
        description: "Your timer intervals have been updated."
      });
    }
  }

  return (
    <div className="">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="flex space-x-4">
            <FormField
              control={form.control}
              name="pomodoroMinutes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pomodoro Timer</FormLabel>
                  <Input {...field} className="max-w-[120px]" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="shortBreakMinutes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Short Break</FormLabel>
                  <Input {...field} className="max-w-[100px]" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="longBreakMinutes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Long Break</FormLabel>
                  <Input {...field} className="max-w-[100px]" />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit">Save</Button>
        </form>
      </Form>
    </div>
  );
}
