import {
  ClipboardList,
  Key,
  Phone,
  FileText,
  type LucideIcon,
} from "lucide-react";
import { DEMO_DATA, type DemoInfoCard } from "@/lib/demo-data";

const CATEGORY_ICONS: Record<string, LucideIcon> = {
  house_rules: ClipboardList,
  access_codes: Key,
  emergency: Phone,
  custom: FileText,
};

function InfoCardContent({ content }: { content: DemoInfoCard["content"] }) {
  switch (content.type) {
    case "text":
      return <p className="text-[8px] md:text-sm text-gray-300">{content.text}</p>;
    case "key_value":
      return (
        <div className="space-y-0.5 md:space-y-1.5">
          {(content.items as Array<{ key: string; value: string }>)?.map((item, i) => (
            <div key={i} className="flex justify-between">
              <span className="text-[8px] md:text-sm text-gray-400">{item.key}</span>
              <span className="text-[8px] md:text-sm font-medium text-white">{item.value}</span>
            </div>
          ))}
        </div>
      );
    case "list":
      return (
        <ul className="space-y-0.5 md:space-y-1">
          {(content.items as string[])?.map((item, i) => (
            <li key={i} className="text-[8px] md:text-sm text-gray-300 flex items-start gap-1 md:gap-2">
              <span className="text-gray-500">•</span>
              {item}
            </li>
          ))}
        </ul>
      );
    case "contact":
      return (
        <div className="space-y-0.5 md:space-y-1.5">
          {content.contacts?.map((contact, i) => (
            <div key={i} className="flex justify-between">
              <span className="text-[8px] md:text-sm text-gray-400">{contact.label}</span>
              <span className="text-[8px] md:text-sm font-medium text-white">{contact.phone}</span>
            </div>
          ))}
        </div>
      );
    default:
      return null;
  }
}

export function StayScreen() {
  return (
    <div
      className="absolute inset-0 flex flex-col bg-cover bg-center"
      style={{ backgroundImage: "url(/backgrounds/ocean.jpg)" }}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      <div className="relative z-10 flex flex-col flex-1 overflow-hidden px-3 pt-10 pb-2 md:px-6 md:pt-16 md:pb-4">
        {/* Nav bar */}
        <nav
          className="absolute top-0 left-0 right-0 z-10 flex items-start px-3 py-2 md:px-6 md:py-3 gap-3 md:gap-6"
          style={{ textShadow: "0 1px 4px rgba(0,0,0,0.6)" }}
        >
          {["Home", "Explore", "Your Stay"].map((tab, i) => (
            <span
              key={tab}
              className={`text-[10px] md:text-base font-medium pb-0.5 ${
                i === 2
                  ? "text-white border-b-2 border-white"
                  : "text-gray-400"
              }`}
            >
              {tab}
            </span>
          ))}
        </nav>

        <h2 className="text-sm md:text-xl font-bold text-white mb-2 md:mb-4">Property Information</h2>

        <div className="grid grid-cols-2 gap-1.5 md:gap-3 flex-1 overflow-auto">
          {DEMO_DATA.infoCards.map((card) => {
            const IconComponent = CATEGORY_ICONS[card.category] || FileText;
            return (
              <div
                key={card.id}
                className="bg-white/10 rounded-lg md:rounded-2xl p-2 md:p-4"
              >
                <div className="flex items-center gap-1 md:gap-2 mb-1 md:mb-3">
                  <IconComponent className="w-3 h-3 md:w-5 md:h-5 text-gray-300" />
                  <h3 className="text-[10px] md:text-base font-semibold text-white">{card.title}</h3>
                </div>
                <InfoCardContent content={card.content} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
