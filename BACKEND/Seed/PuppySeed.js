import mongoose from "mongoose";
import dotenv from "dotenv";
import { Puppy } from "../Models/Puppy.js";
import connectDB from "../config/Databaseconnection.js";

dotenv.config();

const PUPPY_LISTINGS = [
  {
    name: "Luna",
    breed: "French Bulldog",
    gender: "Female",
    age: "8 weeks",
    price: "$2,500",

    breeder: "Ocean Breeze Frenchies",
    rating: "4.8",
    initials: "OB",
    avatarBg: "bg-violet-100 text-violet-800",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBq-cNeN7EoxbudV-lAAg2CVtQgqdh6D2jLAxJjB7gWhFn7LmgMixe0KzhRghgChr08WbPENmrzHq59S1Q_Q8MtBwqfBD26ov_OyVwIWY7UKBTE_4J2BV3RjWkB7UD3fHdifCJLoNgNQ_zkuH9C4KG1odhwoaZ70f4P1BA5Ny8swp3tbgFpnr_UMmieQFdQYIj-31kk-uNDTYs5OxGL2VkNyLdgUX35VOKf3JwhBOzAqn0xpOoV0V-gzwxxI4UT-ElPFeDVjNknlm_r",
  },
  {
    name: "Milo",
    breed: "Labradoodle",
    gender: "Male",
    age: "10 weeks",
    price: "$1,800",

    breeder: "Sunset Creek Doodles",
    rating: "5.0",
    initials: "SC",
    avatarBg: "bg-purple-100 text-purple-800",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAPSOWGaqhvffQ7uX4xuHADq1PB0ZMlFuRL_Q1fhevw73k1bpY9xoB-c3tr7e-qKzrRk-Lc5_L8PXiFNXXbQJuIdCn93RSv1HqoCF9VHbNVwc374gwnXHYvi6U7vSfKGl-PT3DqqWr71qh9WKTRaDWYpl3Eq7PR3jpVFzbNSE-oDvqkveuvSFb0AovvpNWsYh68tAokNo1RpGo5UlMe_pamDLJDs8qy_0TTrQSfjzes5FSJFWkD5U0JcXlNDKebQ0r_KHXLY4zUey3v",
  },
  {
    name: "Winston",
    breed: "Pembroke Corgi",
    gender: "Male",
    age: "9 weeks",
    price: "$2,200",

    breeder: "Royal Paws Kennel",
    rating: "4.7",
    initials: "RP",
    avatarBg: "bg-amber-100 text-amber-800",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBdcfb84zyZv9hYx8xOFASxW6ZSrkKMFZyyxr6IS6_KH1qs8PBV-SVWtDXSmu01VaQPq3A2Nt18zIdlO0XUHVPzpmQbeDd9SbZvRJoekFsZoaovEgXLSJQYPk0vMutyBQrxrceawm8WcxPRMFf5gnql5e4XFId-wuNBIZJ37qpTrkTFr1izi489aW4bGzeKj609rJmTLNVWgOsRv2IaxEyAnbdQOeh8Iz_ei39QFrSFuiuUuCsLm599K6XCm3CeGXGWJRxs6nFTafii",
  },
  {
    name: "Koda",
    breed: "Siberian Husky",
    gender: "Male",
    age: "12 weeks",
    price: "$1,500",

    breeder: "Northern Aurora",
    rating: "4.9",
    initials: "NA",
    avatarBg: "bg-[#4f378a] text-white",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCu90OKhQZ_IhdLqYqA0dsmZEmNwMiJCg9jvxnqOrQnS2_FxPrK3-pvSx-P3OGr4VnEoeqtk0CK_zsmKD-GxvRoP9JL4AAP9gxRZk8MZbX_JBvVsLDWMNCEY2-Wc6Dm-aHa8Sfb2w2VYCfHaifQYyzLhWI3ZOKVqpjGtPP_ewHLDP3N-smaBIyZbDsJUtnJKBDSe3Gda6YTmOq88_8chTq6ryT7qJ8GyDiHtM1rzTKk86-_pCFiwIbv0ysr_MsQvriAYzuySy9X8M27",
  },
];

const seedData = async () => {
  try {
    await connectDB();
    await Puppy.deleteMany(); // Clear existing
    await Puppy.insertMany(PUPPY_LISTINGS);
    console.log("Puppies seeded successfully");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding puppies:", error);
    process.exit(1);
  }
};

seedData();