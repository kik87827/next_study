import type { ComponentProps, ReactNode } from "react";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type SampleDialogProps = Pick<ComponentProps<typeof DialogContent>, "variant"> & {
  footer?: ReactNode;
};

export function SampleDialog({ variant, footer }: SampleDialogProps) {
  return (
    <DialogContent variant={variant}>
      <DialogHeader>
        <DialogTitle>제목</DialogTitle>
        <DialogDescription>설명 텍스트</DialogDescription>
      </DialogHeader>
      <div>본문 내용</div>
      {footer && <DialogFooter>{footer}</DialogFooter>}
    </DialogContent>
  );
}
