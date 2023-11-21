import { Card } from "@/components/ui/card";
import { authOptions } from "@/lib/auth";
import { prismaClient } from "@/lib/prisma";
import { UserCheck, ShieldCheck, Gem, LandPlot } from "lucide-react";
import { getServerSession } from "next-auth";

interface HonorBadge {
  id: string;
  name: string;
  color: string;
  icon: string;
}

async function HonorBadge() {
  const session = await getServerSession(authOptions);
  
  const honorBadgeList: HonorBadge[] = await prismaClient.honorBadge.findMany();

  const icons = {
    UserCheck: <UserCheck size={24} />,
    ShieldCheck: <ShieldCheck size={24} />,
    Gem: <Gem size={24} />,
    LandPlot: <LandPlot size={24} />,
  };

  return (
    <div className="grid grid-cols-4 gap-4 -mx-2">
      {honorBadgeList.map((honorBadge) => (
        <Card key={honorBadge.id} className="flex flex-col h-full w-16 mx-2"> {/* Ajuste o tamanho desejado */}
          <div className="flex items-center justify-center p-2">
            <div className="">{icons[honorBadge.icon]}</div>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default HonorBadge;
