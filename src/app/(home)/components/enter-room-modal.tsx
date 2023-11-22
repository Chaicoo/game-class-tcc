import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { DoorOpen } from "lucide-react"

export function EnterRoomModal() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" className="w-full text-left">
                    <DoorOpen className="mr-2" size="16" />
                    Entrar numa sala
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Digite o código</DialogTitle>
                    <DialogDescription>
                        Solicite o código de acesso ao seu professor para entrar na sala.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="codigo" className="text-right">
                            Código
                        </Label>
                        <Input id="codigo" value="" className="col-span-3" />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit">Entrar</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
