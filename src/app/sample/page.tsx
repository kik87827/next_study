"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { SampleDialog } from "@/components/sample-dialog";
import { Checkbox } from "@/components/ui/checkbox";

export default function Page() {
  const [open, setOpen] = useState(false);
  const [checked,setChecked] = useState(false);
  return (
    <>
      <h1>Button</h1>
      <Button>Button</Button>
      <h1>Dialog</h1>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button onClick={() => setOpen(true)}>다이얼로그 열기</Button>
        </DialogTrigger>
        <SampleDialog
          footer={
            <>
              <Button variant="outline" onClick={() => setOpen(false)}>취소</Button>
              <Button onClick={() => setOpen(false)}>확인</Button>
            </>
          }
        />
      </Dialog>
          <br />
      <hr />
      <br />
      <h1>checkbox</h1>
      <Checkbox checked={checked} onCheckedChange={(value) => setChecked(value === true)} />
    </>
  );
}
