"use client"

import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BookPlusIcon, PlusSquareIcon } from "lucide-react";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { AlertDialogFooter, AlertDialogHeader } from "@/components/ui/alert-dialog";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea";

const PublisherContent = () => {

    return (
        <>
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="secondary">
                        <BookPlusIcon className="mr-2" size="16" />
                        Postar material
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>
                            Digite o nome do material
                            <Input id="name" value="" className="mt-4 col-span-3" />
                        </DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="description" className="text-right">
                                Descrição
                            </Label>
                            <Textarea placeholder="Digite a descrição do material que será postado ..." className="col-span-3" />
                            <Label htmlFor="material" className="text-right">
                                Anexar material
                            </Label>
                            <Input id="material" type="file" className="col-span-3" />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit">Postar conteúdo</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    );
}

export default PublisherContent;
