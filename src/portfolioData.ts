export interface ServicePhoto {
  id: string;
  url: string;
  title: string;
  category: string;
  aspectRatio: string;
}

export const RECENT_WORK_PHOTOS: ServicePhoto[] = [
  {
    id: "work-guess-box",
    url: "/BOX5.jpg",
    title: "GUESS Designer Shoe Packaging Box",
    category: "Rigid Box Packaging",
    aspectRatio: "1 / 1"
  },
  {
    id: "work-pierre-cardin",
    url: "/BOX1.png",
    title: "Pierre Cardin Paris Luxury Rigid Box",
    category: "Luxury Gift Packaging",
    aspectRatio: "4 / 3"
  },
  {
    id: "work-tgf-studio",
    url: "/unnamed.jpg",
    title: "TGF Virtual Design Studio Showcase",
    category: "Brand Design & Catalogues",
    aspectRatio: "3 / 4"
  },
  {
    id: "work-veloir-fragrance",
    url: "/BOX3.png",
    title: "Veloir Golden Sand Dhoop Label",
    category: "Custom Product Labels",
    aspectRatio: "4 / 3"
  },
  {
    id: "work-aceline-baron",
    url: "/BOX4.png",
    title: "AceLine Baron Series Wood Grain Box",
    category: "Wood Finish Packaging",
    aspectRatio: "4 / 3"
  },
  {
    id: "work-kutumb-dental",
    url: "/BOX7.png",
    title: "Kutumb Dental Medical Standee & Flyer",
    category: "Commercial Printing",
    aspectRatio: "3 / 4"
  }
];
