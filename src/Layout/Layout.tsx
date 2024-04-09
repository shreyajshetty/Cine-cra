import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { Grid, GridItem } from "@chakra-ui/react";

const Layout = () => {
  return (
    <div>
      <Header />
      <Grid templateColumns="repeat(6,1fr)">
        <GridItem colSpan={1}>
          <Sidebar />
        </GridItem>
        <GridItem colSpan={5}>
          <Outlet />
        </GridItem>
      </Grid>
      <Footer />
    </div>
  );
};

export default Layout;
