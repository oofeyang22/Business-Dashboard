
import Summary from '../imgs/exam.svg'
import Transaction from '../imgs/transaction (1).svg'
import Statistics from '../imgs/bar-chart.svg'
import Product from '../imgs/shopping-cart.svg'
import Category from '../imgs/category.svg'
//import Search from '../imgs/sea.svg'
//import Notifications from '../imgs/note.svg'
import { GrTransaction } from "react-icons/gr";
import { IoStatsChartSharp } from "react-icons/io5";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { BiSolidCategory } from "react-icons/bi";
import { MdOutlineSummarize } from "react-icons/md";

import { IoPerson } from "react-icons/io5";
import { FaDollarSign } from "react-icons/fa";
import { GiProfit } from "react-icons/gi";

export const sideBarData = [
  {
    icon: MdOutlineSummarize,
    heading: "Summary"
  },
  {
    icon: GrTransaction,
    heading: "Transaction"
  },
  {
    icon: IoStatsChartSharp,
    heading: "Statistics"
  },
  {
    icon: MdOutlineProductionQuantityLimits,
    heading: "Products"
  },
  {
    icon: BiSolidCategory,
    heading: "Category"

  }
]
// Sidebar Data
export const SidebarData = [
    {
      icon: Summary,
      heading: "Summary",
    },
    {
      icon: Transaction,
      heading: "Transactions",
    },
    {
      icon: Statistics,
      heading: "Statistics",
    },
    {
      icon: Product,
      heading: 'Products'
    },
    {
      icon: Category,
      heading: 'Category'
    },
];

/*export const MainDashData = [
  {
    icon: Search
  },
  {
    icon: Notifications
  }
]*/


// Analytics Cards Data
export const cardsData = [
  {
    title: "CUSTOMERS",
    png: IoPerson,
    color: {
      //backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      backGround: "#68AE00",
      boxShadow: "0px 10px 20px 0px #FAFAFA",
    },
    /*barValue: 70,*/
    value: "25,970",
    series: [
      {
        name: "Customers",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "INCOME",
    png: FaDollarSign,
    color: {
      //backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      backGround: "#FCB213",
      boxShadow: "0px 10px 20px 0px #FAFAFA",
    },

    value: "14,270",
    series: [
      {
        name: "Income",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "PRODUCTS SOLD",
    png: GiProfit,
    color: {
      //backGround:
        //"linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
        backGround: "#22B5BA",
      boxShadow: "0px 10px 20px 0px #FAFAFA",
    },

    value: "4,270",
    series: [
      {
        name: "Products Sold",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];


  