import {
  AlertTriangle,
  Axe,
  ClipboardCheck,
  CloudLightning,
  Scissors,
  Shovel,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    title: "Tree Removal",
    description:
      "Safe removal of dead, damaged, dangerous, or unwanted trees.",
    icon: Axe,
  },
  {
    title: "Tree Trimming",
    description:
      "Pruning and trimming to help protect your property and keep trees healthy.",
    icon: Scissors,
  },
  {
    title: "Storm Damage Cleanup",
    description:
      "Fast cleanup of fallen trees and branches after Michigan storms.",
    icon: CloudLightning,
  },
  {
    title: "Hazardous Tree Assessment",
    description:
      "Identify unstable trees and branches before they become a problem.",
    icon: AlertTriangle,
  },
  {
    title: "Stump Removal",
    description: "Remove unwanted stumps and restore usable space in your yard.",
    icon: Shovel,
  },
  {
    title: "Emergency Tree Service",
    description:
      "Responsive help when tree damage creates an urgent safety concern.",
    icon: ClipboardCheck,
  },
];

// TODO: Confirm final service list and emergency availability before launch.
