import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { PlusSquareIcon } from "lucide-react"

export function CreateRoomModal() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">
                    <PlusSquareIcon className="mr-2" size="16" />
                    Criar sala
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Digite o nome da sala</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Nome
                        </Label>
                        <Input id="name" value="" className="col-span-3" />
                    </div>
                </div>
                <DialogFooter>
                    <AlertDialog>
                        <AlertDialogTrigger asChild>
                            <Button type="submit">Criar sala</Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>Código</AlertDialogTitle>
                                <AlertDialogDescription>
                                    Esse é o código da sua sala, compartilhe ele com seus alunos para eles terem acesso a seus materiais e atividades.
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogAction>Continue</AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
