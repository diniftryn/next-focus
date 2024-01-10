"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Timer } from "./Timer";
import { GearIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { TimerSetting } from "./TimerSetting";

export function TimerTab() {
  const [timer, setTimer] = useState({ pomodoroMinutes: 25, shortBreakMinutes: 5, longBreakMinutes: 15 });

  return (
    <div className="flex justify-center text-center h-full">
      <Tabs defaultValue="pomodoro" className="">
        <TabsList className="grid grid-cols-4 w-full">
          <TabsTrigger value="pomodoro">Pomodoro</TabsTrigger>
          <TabsTrigger value="short-break">Short Break</TabsTrigger>
          <TabsTrigger value="long-break">Long Break</TabsTrigger>
          <TabsTrigger value="setting">
            <GearIcon />
            {/* Setting */}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="pomodoro">
          <Timer displayTime={timer.pomodoroMinutes} />
        </TabsContent>
        <TabsContent value="short-break">
          <Timer displayTime={timer.shortBreakMinutes} />
        </TabsContent>
        <TabsContent value="long-break">
          <Timer displayTime={timer.longBreakMinutes} />
        </TabsContent>
        <TabsContent value="setting">
          <div className="flex justify-center text-center pt-[35px] pb-[1px]">
            <TimerSetting timer={timer} setTimer={setTimer} />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
