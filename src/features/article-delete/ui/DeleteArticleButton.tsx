import { useState } from "react";
import { useDeleteArticle } from "@/features/article-delete/model";
import {
  Button,
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/ui";

export const DeleteArticleButton = ({ id }: { id: string }) => {
  const [open, setOpen] = useState(false);
  const { handleDelete } = useDeleteArticle(id);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={"destructive"}>Delete</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete Article</DialogTitle>
        </DialogHeader>

        <DialogFooter>
          <Button variant={"outline"} onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button
            variant={"destructive"}
            onClick={() => {
              handleDelete();
              setOpen(false);
            }}
          >
            Confirm
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
