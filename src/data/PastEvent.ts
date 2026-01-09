export interface IEventGalleryBase {
  type: "image" | "video";
  url: string;
  alt?: string;
}

export interface IEventImage extends IEventGalleryBase {
  type: "image";
}

export interface IEventVideo extends IEventGalleryBase {
  type: "video";
  thumbnail?: string;
}

export type EventGalleryItem = IEventImage | IEventVideo;


export interface IPastEvent {
  id: number;
  title: string;
  date: string;           // ex: "12 Octobre 2024"
  location: string;       // ex: "Libreville, Gabon"
  type: string;           // ex: "Conférence", "Formation"
  attendees: number;
  image: string;
  description: string;
  highlights: string[];
  videoUrl?: string;
  presentationUrl?: string;
  gallery: EventGalleryItem[];
}




const pastEventsData: IPastEvent[] = [
  {
    id: 1,
    title: "Conférence Internationale sur la Durabilité en Afrique Centrale",
    date: "12 Octobre 2024",
    location: "Libreville, Gabon",
    type: "Conférence Internationale",
    attendees: 300,
    image: "/images/service/1.jpg",
    description:
      "Grande conférence réunissant experts et décideurs pour discuter de l'avenir de la durabilité dans la région.",
    highlights: [
      "20 intervenants internationaux",
      "5 panels de discussion",
      "Présentation de 15 études de cas",
      "Networking avec 300+ participants",
    ],
    videoUrl: "#",
    presentationUrl: "#",
    gallery: [
      { type: "image", url: "/images/service/1.jpg", alt: "Conférence Durabilité" },
      { type: "image", url: "/images/service/3.jpg", alt: "Présentation" },
      {
        type: "video",
        url: "/placeholder-video.mp4",
        thumbnail: "/sustainability-conference-africa.jpg",
        alt: "Vidéo conférence",
      },
    ],
  },
];

export default pastEventsData
