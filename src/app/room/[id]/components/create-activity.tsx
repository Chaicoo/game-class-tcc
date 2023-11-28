"use client"

import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PlusSquareIcon } from "lucide-react";
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
import { useState } from "react";

const CreateActivityModal = () => {

    const [questionType, setQuestionType] = useState<string | null>(null);
    const [objectiveOptions, setObjectiveOptions] = useState<Map<string, string>>(new Map());
    const [newOption, setNewOption] = useState<string>('');

    const handleAddOption = () => {
        if (newOption) {
            const newOptions = new Map(objectiveOptions);
            newOptions.set(newOption, `option_${newOptions.size + 1}`);
            setObjectiveOptions(newOptions);
            setNewOption('');
        }
    };

    const handleRemoveOption = (optionId: string) => {
        const newOptions = new Map(objectiveOptions);
        newOptions.delete(optionId);
        setObjectiveOptions(newOptions);
    };

    return (
        <>
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="secondary">
                        <PlusSquareIcon className="mr-2" size="16" />
                        Criar Atividade
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>
                            Digite o nome da atividade
                            <Input id="name" value="" className="mt-4 col-span-3" />
                        </DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Pergunta
                            </Label>
                            <Input id="name" value="" className="col-span-3" />
                            <Label htmlFor="type" className="text-right">
                                Tipo
                            </Label>
                            <div className="col-span-3">
                                <Select>
                                    <SelectTrigger className="">
                                        <SelectValue placeholder="Selecione o tipo da pergunta" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Tipo</SelectLabel>
                                            <SelectItem value="1">Objetiva</SelectItem>
                                            <SelectItem value="2">Subjetiva</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                            {questionType === '1' && (
                                <>
                                    <Input
                                        id="options"
                                        value={newOption}
                                        onChange={(e) => setNewOption(e.target.value)}
                                    />
                                    <Button onClick={handleAddOption}>Adicionar</Button>
                                </>
                            )}
                            {questionType === '1' &&
                                Array.from(objectiveOptions.entries()).map(([option, optionId]) => (
                                    <div key={optionId} className="flex items-center">
                                        <span>{option}</span>
                                        <Button onClick={() => handleRemoveOption(optionId)}>Remover</Button>
                                    </div>
                                ))}
                            <Label htmlFor="points" className="text-right">
                                Pontuação
                            </Label>
                            <Input id="points" value="" className="col-span-3" />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button variant="secondary">Adicionar pergunta</Button>
                        <Button type="submit">Salvar atividade</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    );
}

export default CreateActivityModal;
