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
  moicau,
  cancautay,
  cancaumay,
  phukien,
  phaocauca,
  ducauca,
  aocauca,
  luoicau,
  thungcauca,
  votcauca,
  daycauca,
} from "@/assets";
import { v4 as uuidv4 } from "uuid";

export const categories = [
  {
    id: "Màn-hình",
    title: "Màn hình",
    icon: moniter,
    link: "/man-hinh",
    subMenuList: [
      {
        id: "man-hinh-hang",
        subMenuCol: [
          {
            id: "man-hinh-asus",
            title: "Màn hình ASUS",
            link: "/man-hinh-asus",
          },
          {
            id: "man-hinh-lg",
            title: "Màn hình LG",
            link: "/man-hinh-lg",
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
export const wide_nav = [
  {
    id: uuidv4(),
    title: "Mồi câu cá",
    link: "/moi-cau-ca",
    src: moicau.src,
    subMenu: [
      {
        id: uuidv4(),
        title: "Mồi câu cá dạng bột",
        link: "/moi-cau-ca-bot",
        subMenu: [
          {
            id: uuidv4(),
            title: "Cám câu cá tổng hợp CDC",
            link: "/may-bo/pc-gaming",
          },
          {
            id: uuidv4(),
            title: "Cám nền mịn tổng hợp CDC (Cám xã)",
            link: "/may-bo/pc-dohoa",
          },
          {
            id: uuidv4(),
            title: "Bột tôm CDC",
            link: "/may-bo/pc-dohoa",
          },
          {
            id: uuidv4(),
            title: "Mồi câu cá khó chịu",
            link: "/may-bo/pc-dohoa",
          },
          {
            id: uuidv4(),
            title: "Mồi câu cá khó chịu",
            link: "/may-bo/pc-dohoa",
          },
        ],
      },
      {
        id: uuidv4(),
        title: "Phụ gia câu cá",
        link: "/moi-cau-ca-bot",
        subMenu: [
          {
            id: uuidv4(),
            title: "Bột tơ nhện",
            link: "/may-bo/pc-gaming",
          },
          {
            id: uuidv4(),
            title: "Bông tuyết",
            link: "/may-bo/pc-dohoa",
          },
        ],
      },
      {
        id: uuidv4(),
        title: "Tinh mùi",
        link: "/moi-cau-ca-bot",
        subMenu: [
          {
            id: uuidv4(),
            title: "Tinh mùi CDC (Bắp sữa ) ",
            link: "/may-bo/pc-gaming",
          },
          {
            id: uuidv4(),
            title: "Tinh mùi CDC (Khóm sữa) ",
            link: "/may-bo/pc-gaming",
          },
        ],
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Cần câu tay",
    link: "/man-hinh",
    src: cancautay.src,
    subMenu: [
      {
        id: uuidv4(),
        title: "Cần câu tay giá rẻ",
        link: "/tu-build-pc",
        subMenu: [],
      },
      {
        id: uuidv4(),
        title: "Cần câu tay tầm trung",
        link: "/tu-build-pc",
        subMenu: [],
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Cần câu máy",
    link: "/man-hinh",
    src: cancaumay.src,
    subMenu: [
      {
        id: uuidv4(),
        title: "Cần câu tay giá rẻ",
        link: "/tu-build-pc",
        subMenu: [],
      },
      {
        id: uuidv4(),
        title: "Cần câu tay tầm trung",
        link: "/tu-build-pc",
        subMenu: [],
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Dây câu",
    link: "/laptop",
    src: daycauca.src,
    subMenu: [
      {
        id: uuidv4(),
        title: "Thẻo tóm sẵn",
        link: "/tu-build-pc",
        subMenu: [
          {
            id: uuidv4(),
            title: "Dây trục & thẻo",
            link: "/tu-build-pc",
            subMenu: [],
          },
          {
            id: uuidv4(),
            title: "Dây thẻo ",
            link: "/tu-build-pc",
            subMenu: [],
          },
          {
            id: uuidv4(),
            title: "Dây trục ",
            link: "/tu-build-pc",
            subMenu: [],
          },

          {
            id: uuidv4(),
            title: "Dây PE",
            link: "/tu-build-pc",
            subMenu: [],
          },
        ],
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Phụ kiện",
    link: "/ban-phim",
    src: phukien.src,
    subMenu: [
      {
        id: uuidv4(),
        title: "MAY BO 1",
        link: "/tu-build-pc",
        subMenu: [],
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Phao câu cá",
    link: "/ban-phim",
    src: phaocauca.src,
    subMenu: [
      {
        id: uuidv4(),
        title: "MAY BO 1",
        link: "/tu-build-pc",
        subMenu: [],
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Ô câu cá",
    link: "/ban-phim",
    src: ducauca.src,
    subMenu: [
      {
        id: uuidv4(),
        title: "MAY BO 1",
        link: "/tu-build-pc",
        subMenu: [],
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Áo chống nắng đi câu",
    link: "/ban-phim",
    src: aocauca.src,
    subMenu: [
      {
        id: uuidv4(),
        title: "MAY BO 1",
        link: "/tu-build-pc",
        subMenu: [],
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Lưỡi câu",
    link: "/ban-phim",
    src: luoicau.src,
    subMenu: [
      {
        id: uuidv4(),
        title: "Lưỡi câu rẻ tiền",
        link: "/tu-build-pc",
        subMenu: [],
      },
      {
        id: uuidv4(),
        title: "Lưỡi câu cá rô đồng",
        link: "/tu-build-pc",
        subMenu: [],
      },
      {
        id: uuidv4(),
        title: "Lưỡi câu có ngạnh",
        link: "/tu-build-pc",
        subMenu: [],
      },
      {
        id: uuidv4(),
        title: "Lưỡi câu có ngạnh",
        link: "/tu-build-pc",
        subMenu: [],
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Thùng câu cá",
    link: "/ban-phim",
    src: thungcauca.src,
    subMenu: [
      {
        id: uuidv4(),
        title: "MAY BO 1",
        link: "/tu-build-pc",
        subMenu: [],
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Vợt,gác cần,rọng cá",
    link: "/ban-phim",
    src: votcauca.src,
    subMenu: [
      {
        id: uuidv4(),
        title: "MAY BO 1",
        link: "/tu-build-pc",
        subMenu: [],
      },
    ],
  },
];
// export const wide_nav = [
//   {
//     id: uuidv4(),
//     title: "Tự build pc",
//     link: "/tu-build-pc",
//     src: computer.src,
//     subMenu: [],
//   },
//   {
//     id: uuidv4(),
//     title: "Máy bộ",
//     link: "/may-bo",
//     src: case_computer.src,
//     subMenu: [
//       {
//         id: uuidv4(),
//         title: "PC Văn Phòng ",
//         link: "/may-bo/pc-van-phong",
//         subMenu: [
//           {
//             id: uuidv4(),
//             title: "PC Gaming ",
//             link: "/may-bo/pc-gaming",
//           },
//           {
//             id: uuidv4(),
//             title: "PC Đồ Họa ",
//             link: "/may-bo/pc-dohoa",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: uuidv4(),
//     title: "Màn hình",
//     link: "/man-hinh",
//     src: moniter.src,
//     subMenu: [
//       {
//         id: uuidv4(),
//         title: "MAY BO 1",
//         link: "/tu-build-pc",
//         subMenu: [],
//       },
//     ],
//   },
//   {
//     id: uuidv4(),
//     title: "Laptop",
//     link: "/laptop",
//     src: laptop.src,
//     subMenu: [
//       {
//         id: uuidv4(),
//         title: "MAY BO 1",
//         link: "/tu-build-pc",
//         subMenu: [],
//       },
//     ],
//   },
//   {
//     id: uuidv4(),
//     title: "Bàn phím",
//     link: "/ban-phim",
//     src: keyboard.src,
//     subMenu: [
//       {
//         id: uuidv4(),
//         title: "MAY BO 1",
//         link: "/tu-build-pc",
//         subMenu: [],
//       },
//     ],
//   },
//   {
//     id: uuidv4(),
//     title: "Chuột",
//     link: "/chuot",
//     src: mouse.src,
//     subMenu: [
//       {
//         id: uuidv4(),
//         title: "MAY BO 1",
//         link: "/tu-build-pc",
//         subMenu: [
//           {
//             id: uuidv4(),
//             title: "May bo tu build 1 ",
//             link: "sdq",
//           },
//           {
//             id: uuidv4(),
//             title: "May bo tu build 2 May bo tu build 2  ",
//             link: "sdq",
//           },
//         ],
//       },
//       {
//         id: uuidv4(),
//         title: "MAY BO 2",
//         link: "/tu-build-pc2",
//         subMenu: [],
//       },
//       {
//         id: uuidv4(),
//         title: "MAY BO 1",
//         link: "/tu-build-pc",
//         subMenu: [
//           {
//             id: uuidv4(),
//             title: "May bo tu build 1 ",
//             link: "sdq",
//           },
//           {
//             id: uuidv4(),
//             title: "May bo tu build 2 ",
//             link: "sdq",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: uuidv4(),
//     title: "Tai nghe",
//     link: "/tai-nghe",
//     src: headphone.src,
//     subMenu: [
//       {
//         id: uuidv4(),
//         title: "MAY BO 1",
//         link: "/tu-build-pc",
//         subMenu: [],
//       },
//     ],
//   },
//   {
//     id: uuidv4(),
//     title: "CPU",
//     link: "/cpu",
//     src: cpu.src,
//     subMenu: [
//       {
//         id: uuidv4(),
//         title: "MAY BO 1",
//         link: "/tu-build-pc",
//         subMenu: [],
//       },
//     ],
//   },
//   {
//     id: uuidv4(),
//     title: "Ram",
//     link: "/ram",
//     src: ram.src,
//     subMenu: [
//       {
//         id: uuidv4(),
//         title: "MAY BO 1",
//         link: "/tu-build-pc",
//         subMenu: [],
//       },
//     ],
//   },
// ];

export const footerLinks = [
  {
    title: "Giới Thiệu",
    links: [
      {
        name: "Giới thiệu HAICOMPUTER",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "Địa chỉ cửa hàng",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Điều khoản giao dịch",
        link: "https://www.hoobank.com/create/",
      },
      {
        name: "Bảo mật thông tin",
        link: "https://www.hoobank.com/explore/",
      },
    ],
  },
  {
    title: "Chính Sách HAICOMPUTER",
    links: [
      {
        name: "Chính sách giao nhận",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Chính sách đổi trả hàng",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Chính sách bảo hành",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Hướng dẫn thanh toán",
        link: "https://www.hoobank.com/blog/",
      },
      {
        name: "Trả góp",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
  {
    title: "Hỗ trợ khách hàng",
    links: [
      {
        name: "Mua hàng",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Bảo hành",
        link: "https://www.hoobank.com/become-a-partner/",
      },
      {
        name: "Hỗ trợ khách hàng ",
        link: "https://www.hoobank.com/become-a-partner/",
      },
      {
        name: "Tra cứu đơn hàng đã mua  ",
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
