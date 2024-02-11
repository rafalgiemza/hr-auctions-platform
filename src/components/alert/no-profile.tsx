import Link from "next/link";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "~/components/ui/alert-dialog";

interface AlertNoProfileProps {
  showAlert?: boolean;
}
export function AlertNoProfile({ showAlert = false }: AlertNoProfileProps) {
  return (
    <AlertDialog defaultOpen={showAlert}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>No profile...</AlertDialogTitle>
          <AlertDialogDescription>
            Go create a profile here:
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>
            <Link href={"/profiles"}>Create</Link>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
