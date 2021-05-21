import React from "react"
import Layout from "../layout/Layout";
import MainHeader from "../components/mainheader";
import PrimaryNav from "../components/primaryNav";
import BoxContent from "../components/BoxContent";
import ProductDescription from "../components/productDescription";
import SameProduct from "../components/sameProduct";
import OrthersProduct from "../components/othersProduct";
import Footer from "../components/footer";
import Question from "../components/question";
const IndexPage = () => (

  <Layout>
    <MainHeader></MainHeader>
    <PrimaryNav></PrimaryNav>
    <BoxContent></BoxContent>
    <ProductDescription></ProductDescription>
    <SameProduct></SameProduct>
    <Question></Question>
    <OrthersProduct></OrthersProduct>
    <Footer></Footer>
  </Layout>
)

export default IndexPage