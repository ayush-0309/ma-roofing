export interface Testimonial {
  name: string;
  town: string;
  text: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Declan Murphy",
    town: "Carlow Town",
    text: "Brilliant service from M&A Roofing. They came out the same day I called, sorted the leak over the kitchen and left the place spotless. Wouldn't hesitate to recommend them to anyone in Carlow.",
  },
  {
    name: "Siobhán Kelly",
    town: "Bagenalstown",
    text: "Had the full guttering replaced last autumn. Competitive price, tidy work and they were done in a day. The lads were very professional and explained everything clearly. Five stars no question.",
  },
  {
    name: "Pádraig Doyle",
    town: "Kilkenny",
    text: "Used M&A for a flat roof on our extension — came in on time and on budget. The guarantee they gave us really gives peace of mind. Highly recommend them across the county.",
  },
];
