const PF = process.env.REACT_APP_PUBLIC_FOLDER;

export const Posts = [
  {
    id: 1,
    desc: "Post1",
    photo: PF + "RohitPost1.jpg",
    date: "5 mins ago",
    userId: 1,
    reacts: 400,
    comment: 15,
  },

  {
    id: 2,
    desc: "Post2",
    photo: PF + "RohitPost2.jpg",
    date: "15 mins ago",
    userId: 1,
    reacts: 4000,
    comment: 16,
  },

  {
    id: 3,
    desc: "Post3",
    photo: PF + "ViratPost1.jpg",
    date: "5 mins ago",
    userId: 2,
    reacts: 1400,
    comment: 115,
  },
];
