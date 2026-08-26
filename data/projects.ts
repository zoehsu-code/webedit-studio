export type Project = {
  title: string;
  city: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
};

export const projects: Project[] = [
  {
    title: "Large Tree Removal",
    city: "Plymouth, MI",
    description:
      "Removed a damaged mature tree located close to the homeowner's property.",
    beforeImage: "/images/project-plymouth-before.jpg",
    afterImage: "/images/project-plymouth-after.jpg",
    beforeAlt: "Placeholder before photo for a large tree removal in Plymouth, Michigan",
    afterAlt: "Placeholder after photo for a cleared yard in Plymouth, Michigan",
  },
];

// TODO: Replace placeholder project examples with real project photos and confirmed customer-approved details before launch.
