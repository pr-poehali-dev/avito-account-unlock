import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface InfoCardProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

const InfoCard = ({ title, icon, children, className }: InfoCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardHeader className="p-0">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          variant="ghost"
          className="w-full flex justify-between items-center rounded-none p-4 hover:bg-accent"
        >
          <div className="flex items-center gap-2">
            {icon}
            <span className="font-medium text-lg">{title}</span>
          </div>
          <ChevronDown
            className={cn(
              "h-5 w-5 transition-transform duration-300",
              isOpen && "transform rotate-180"
            )}
          />
        </Button>
      </CardHeader>
      <div
        className={cn(
          "transition-all duration-500 ease-in-out overflow-hidden",
          isOpen ? "max-h-[800px]" : "max-h-0"
        )}
      >
        <CardContent className="p-4 animate-fade-in">{children}</CardContent>
      </div>
    </Card>
  );
};

export default InfoCard;
