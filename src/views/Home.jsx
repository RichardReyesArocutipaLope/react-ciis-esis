import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SectionBanner from "../components/SectionBanner";
import { SectionCalendar } from "../components/SectionCalendar";
import { SectionDetails } from "../components/SectionDetails";
import { SectionGanpi } from "../components/SectionGanpi";
import { SectionHackathon } from "../components/SectionHackathon";
import { SectionLugar } from "../components/SectionLugar";
import SectionMaps from "../components/SectionMaps";
import { SectionSpeakers } from "../components/SectionSpeakers";
import { SectionSponsors } from "../components/SectionSponsors";
import { SectionThemes } from "../components/SectionThemes";
import { SectionWorkShops } from "../components/SectionWorkShops";

export const Home = () => {
  return (
    <>
      <Header state={true} />
      <SectionBanner />
      <SectionDetails />
      <SectionThemes />
      <SectionSpeakers />
      <SectionCalendar />
      <SectionHackathon />
      <SectionWorkShops />
      <SectionGanpi />
      {/* <SectionPrice /> */}
      <SectionSponsors />
      <SectionLugar />
      {/* <SectionContactUs /> */}
      <SectionMaps />
      <Footer />
    </>
  );
};
