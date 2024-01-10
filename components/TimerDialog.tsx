"use client";

import { Button } from "@/components/ui/button";
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { GearIcon } from "@radix-ui/react-icons";
import { TimerSetting } from "./TimerSetting";

type TimerDialogProps = {
  timer: {
    pomodoroMinutes: number;
    shortBreakMinutes: number;
    longBreakMinutes: number;
  };
  setTimer: any;
};

const TimerDialog = ({ timer, setTimer }: TimerDialogProps) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="ghost" size="sm">
          <GearIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          {/* <GearIcon /> */}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="max-w-[400px]">
        <AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="w-[50px]">x</AlertDialogCancel>
          </AlertDialogFooter>
          <AlertDialogTitle>Timer Settings</AlertDialogTitle>
          <AlertDialogDescription>Change timer intervals based on your preference.</AlertDialogDescription>
        </AlertDialogHeader>
        <div className="flex py-1">
          <TimerSetting timer={timer} setTimer={setTimer} />
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default TimerDialog;
