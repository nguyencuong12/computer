import {
  facebook,
  instagram,
  twitter,
  star,
  send,
  shield,
  people01,
  people02,
  people03,
  airbnb,
  binance,
  coinbase,
  dropbox,
  cpu,
  computer,
  moniter,
  headphone,
  ram,
  mouse,
  keyboard,
  laptop,
  case_computer,
} from "@/assets";

export const categories = [
  {
    id: "Màn hình",
    title: "Màn hình",
    icon: moniter,
    link: "/man-hinh",
    children: [
      {
        id: "man-hinh-hang",
        childrenItem: [
          {
            id: "Màn hình ASUS",
            title: "Màn hình ASUS",
            link: "/man-hinh-asus",
          },
          {
            id: "Màn hình LG",
            title: "Màn hình LG",
            link: "/man-hinh-lg",
          },
        ],
      },
    ],
  },
  {
    id: "Máy bộ",
    title: "Máy bộ",
    icon: computer,
    link: "/may-bo",
    children: [
      {
        id: "maybo",
        childrenItem: [
          {
            id: "maybocustom",
            title: "Máy bộ",
            link: "/may-bo",
          },
        ],
      },
    ],
  },
  {
    id: "Case-Nguồn",
    title: "Case-Nguồn",
    icon: case_computer,
    link: "/case-nguon",
    children: [
      {
        id: "Case Theo Hãng",
        childrenItem: [
          {
            id: "case-theo-hang",
            title: "Case Theo Hãng",
            link: "/case-theo-hang",
          },
          {
            id: "case-asus",
            title: "Case Asus",
            link: "/case-asus",
          },
          {
            id: "case-sama",
            title: "Case Sama",
            link: "/case-sama",
          },
          {
            id: "case-corsair",
            title: "Case Corsair",
            link: "/case-corsair",
          },
        ],
      },
      {
        id: "Case Theo Giá",
        childrenItem: [
          {
            id: "case-duoi-1tr",
            title: "Case Dưới 1 Triệu",
            link: "/case-duoi-1tr",
          },
          {
            id: "case-tu-1tr-2tr",
            title: "Case Từ 1 Triệu Đến 2 Triệu",
            link: "/case-tu-1tr-2tr",
          },
        ],
      },
    ],
  },
  {
    id: "RAM Và Ổ Cứng",
    title: "RAM Và Ổ Cứng",
    icon: ram,
    link: "/ram",
    children: [
      {
        id: "Dung lượng ram",
        childrenItem: [
          {
            id: "dung-luong-ram",
            title: "Dung lượng ram",
            link: "/ram-pc",
          },
          {
            id: "ram-8gb",
            title: "Ram-8gb",
            link: "/ram-pc/ram-8gb",
          },
        ],
      },
      {
        id: "Hãng ram",
        childrenItem: [
          {
            id: "hang-ram",
            title: "Hãng ram",
            link: "/ram-pc",
          },
          {
            id: "Ram Kingston",
            title: "Ram Kingston",
            link: "/ram-pc/kingston",
          },
        ],
      },
      {
        id: "Loại ram",
        childrenItem: [
          {
            id: "loai-ram",
            title: "Loại ram",
            link: "/ram-pc",
          },
          {
            id: "DDR4",
            title: "DDR4",
            link: "/ram-pc/ddr4",
          },
          {
            id: "DDR5",
            title: "DDR5",
            link: "/ram-pc/ddr5",
          },
        ],
      },
    ],
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content: "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    name: "Herman Jensen",
    title: "Founder & Leader",
    img: people01,
  },
  {
    id: "feedback-2",
    content: "Money makes your life easier. If you're lucky to have it, you're lucky.",
    name: "Steve Mark",
    title: "Founder & Leader",
    img: people02,
  },
  {
    id: "feedback-3",
    content: "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    img: people03,
  },
];

export const navLinks = [
  {
    id: "Trang chủ",
    title: "Trang chủ",
  },
  {
    id: "Bảo Hành",
    title: "Bảo Hành",
  },
  {
    id: "Liên Hệ",
    title: "Liên Hệ",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.hoobank.com/create/",
      },
      {
        name: "Explore",
        link: "https://www.hoobank.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.hoobank.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Rewards",
    content: "The best credit cards offer some tantalizing combinations of promotions and prizes",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "100% Secured",
    content: "We take proactive steps make sure your information and transactions are secure.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Balance Transfer",
    content: "A balance transfer credit card can save you a lot of money in interest charges.",
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "User Active",
    value: "3800+",
  },
  {
    id: "stats-2",
    title: "Trusted by Company",
    value: "230+",
  },
  {
    id: "stats-3",
    title: "Transaction",
    value: "$230M+",
  },
];
