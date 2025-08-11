import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { MoreVertical, Printer, Trash2 } from "lucide-react";
import { useEffect, useState, useTransition } from "react";
import { toast } from "sonner";

interface OptionMenuProps {
  handleDelete?: () => void;
  onPrintClick: () => void;
}

export function OptionMenu({ handleDelete, onPrintClick }: OptionMenuProps) {
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  useEffect(()=>{

  })

  return (
    <>
      <DropdownMenu>
          <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-0.5 top-0.5 transition-opacity group-hover:opacity-100"
              >
                <MoreVertical className="size-4" />
              </Button>
          </DropdownMenuTrigger>
        <DropdownMenuContent>
          {handleDelete && (
            <DropdownMenuItem
              className="flex items-center gap-2"
              onClick={() => setShowDeleteConfirmation(true)}
            >
              <Trash2 className="size-4" />
              Delete
            </DropdownMenuItem>
          )}

          <DropdownMenuItem
            className="flex items-center gap-2"
            onClick={onPrintClick}
          >
            <Printer className="size-4" />
            Print
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      {handleDelete && (
        <DeleteConfirmationDialog
          handleDelete={handleDelete}
          open={showDeleteConfirmation}
          onOpenChange={setShowDeleteConfirmation}
        />
      )}
    </>
  );
}

interface DeleteConfirmationDialogProps {
  handleDelete: () => void;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

function DeleteConfirmationDialog({
  handleDelete,
  open,
  onOpenChange,
}: DeleteConfirmationDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete resume?</DialogTitle>
          <DialogDescription>
            This will permanently delete this resume. This action cannot be
            undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            variant="destructive"
            onClick={() => {
              handleDelete;
              onOpenChange(false);
            }}
          >
            Delete
          </Button>
          <Button variant="secondary" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
